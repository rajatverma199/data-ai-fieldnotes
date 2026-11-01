'use strict';
const resources = window.RESOURCES;
const preferredTopics = ['Semantic layers','Self-service analytics','Governance & identity','Orchestration','AI data agents','Applied analytics','Analytics UX & APIs'];
const topics = [...new Set([...preferredTopics,...resources.flatMap(r=>r.topics)])].filter(t=>resources.some(r=>r.topics.includes(t)));
const $ = s => document.querySelector(s);
const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Keep the original storage key so existing readers retain their notes.
const KEY = 'interview-dossier-v1';
let progress = {};
let storageAvailable = true;
try { progress = sanitize(JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { storageAvailable = false; }
let state = {view:'all',company:'All',topic:'All topics',search:'',format:'All',sort:'curated'};
let currentId = null, toastTimer;
function sanitize(value) {
  const result = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  for (const r of resources) {
    const v = value[r.id];
    if (v && typeof v === 'object') result[r.id] = {saved:v.saved === true,reviewed:v.reviewed === true,notes:typeof v.notes === 'string' ? v.notes.slice(0,100000) : ''};
  }
  return result;
}
function info(id) { return progress[id] || {saved:false,reviewed:false,notes:''}; }
function persist() {
  try {localStorage.setItem(KEY,JSON.stringify(progress));storageAvailable = true;return true;}
  catch {storageAvailable = false;toast('Browser storage is unavailable. Export notes to keep your changes.');return false;}
}
function toast(message) {$('#toast').textContent = message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3500);}
function dateLabel(r) {return r.date ? new Date(r.date+'T12:00:00Z').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}) : (r.dateLabel || 'Summit ’26');}
function filtered() {
  const q=state.search.toLowerCase().trim();
  const list=resources.filter(r=>(state.company==='All'||r.company===state.company)&&(state.topic==='All topics'||r.topics.includes(state.topic))&&(state.format==='All'||r.type===state.format)&&(state.view==='all'||(state.view==='saved'?info(r.id).saved:info(r.id).reviewed))&&(!q||[r.title,r.originalTitle,r.summary,r.keywords,r.company,r.author,r.source,r.topics.join(' '),r.takeaways.join(' '),Object.values(r.brief || {}).flat().join(' '),info(r.id).notes].join(' ').toLowerCase().includes(q)));
  if(state.sort==='newest')list.sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  if(state.sort==='title')list.sort((a,b)=>a.title.localeCompare(b.title));
  return list;
}
function render() {
  const list=filtered();
  $('#all-count').textContent=resources.length;
  $('#total-resources').textContent=String(resources.length).padStart(2,'0');
  $('#total-topics').textContent=String(topics.length).padStart(2,'0');
  document.querySelectorAll('[data-company]').forEach(b=>{b.querySelector('span:last-child').textContent=b.dataset.company==='All'?resources.length:resources.filter(r=>r.company===b.dataset.company).length;});
  $('#saved-count').textContent=resources.filter(r=>info(r.id).saved).length;
  $('#reviewed-count').textContent=resources.filter(r=>info(r.id).reviewed).length;
  document.querySelectorAll('[data-view]').forEach(b=>{const active=b.dataset.view===state.view;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active)});
  document.querySelectorAll('[data-company]').forEach(b=>{const active=b.dataset.company===state.company;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active)});
  $('#topics').innerHTML=['All topics',...topics].map(t=>`<button class="topic ${state.topic===t?'active':''}" data-topic="${escapeHTML(t)}" aria-pressed="${state.topic===t}">${escapeHTML(t)}<span class="topic-count">${t==='All topics'?resources.length:resources.filter(r=>r.topics.includes(t)).length}</span></button>`).join('');
  $('#library-title').innerHTML=`${state.view==='saved'?'Your shortlist':state.view==='reviewed'?'Reviewed resources':'The collection'} <span id="result-count">${list.length}</span>`;
  const active=[state.company!=='All'?state.company:'',state.topic!=='All topics'?state.topic:'',state.format!=='All'?state.format:'',state.search.trim()?`“${state.search.trim()}”`:''].filter(Boolean);
  $('#filter-state').hidden=!active.length;$('#filter-summary').textContent=active.join(' · ');
  $('#cards').innerHTML=list.map(r=>{
    const p=info(r.id),companyClass=r.company.toLowerCase();
    return `<article class="card"><div class="card-top"><span class="source-icon ${companyClass}" aria-hidden="true">${r.company==='Netflix'?'N':r.company==='OpenAI'?'◈':r.company==='Meta'?'∞':r.company==='Spotify'?'S':'b.'}</span><span class="card-source">${escapeHTML(r.source)}</span><span class="dot">·</span><span>${r.type}</span><button class="save-btn" data-save="${r.id}" aria-pressed="${p.saved}" aria-label="${p.saved?'Remove from':'Add to'} shortlist: ${escapeHTML(r.title)}">${p.saved?'★':'☆'}</button></div><h3><button data-open="${r.id}">${escapeHTML(r.title)}</button></h3><p class="card-summary">${escapeHTML(r.summary)}</p><div class="tags">${r.topics.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div><div class="card-takeaways"><h4>Key takeaways</h4><ul>${r.takeaways.map(t=>`<li>${escapeHTML(t)}</li>`).join('')}</ul></div><button class="quick-review" data-open="${r.id}" aria-label="Quick review: ${escapeHTML(r.title)}">Quick review <span>5-part brief →</span></button>${r.unverified?'<p class="card-note">↳ Metadata only · watch to capture takeaways</p>':''}<div class="card-footer"><span class="date">${dateLabel(r)}${r.duration?' · '+r.duration:''}</span><button class="review-btn" data-review="${r.id}" aria-pressed="${p.reviewed}" aria-label="${p.reviewed?'Mark unread':'Mark reviewed'}: ${escapeHTML(r.title)}">${p.reviewed?'✓ Reviewed':'○ Mark reviewed'}</button><a href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer" aria-label="${r.type==='Video'?'Watch':'Read'} ${escapeHTML(r.title)} (opens in a new tab)">${r.type==='Video'?'Watch':'Read'} ↗</a></div></article>`;
  }).join('');
  $('#empty').hidden=!!list.length;
  $('#results-live').textContent=`${list.length} ${list.length===1?'resource':'resources'} shown`;
}
function renderBrief(r) {
  const sections = [['Context',r.brief.context],['Key problems / pain points',r.brief.problems],['Solution details',r.brief.solutions],['Unique value proposition',r.brief.value],['Key takeaways',r.takeaways]];
  return `<div class="review-sections">${sections.map(([title,bullets],i)=>`<section class="review-section"><h3><span>${String(i+1).padStart(2,'0')}</span>${title}</h3><ul>${bullets.map(t=>`<li>${escapeHTML(t)}</li>`).join('')}</ul></section>`).join('')}</div>`;
}
function openBrief(id) {
  const r=resources.find(r=>r.id===id);if(!r)return;
  currentId=id;const p=info(id);
  $('#detail-content').innerHTML=`<div class="brief"><div class="brief-meta">${escapeHTML(r.company)} · ${r.type} · ${dateLabel(r)}</div><h2 id="detail-title">${escapeHTML(r.originalTitle)}</h2><p class="brief-meta">${escapeHTML(r.author)}${r.duration?' · '+r.duration:''}</p><p class="summary">${escapeHTML(r.summary)}</p><div class="tags">${r.topics.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div><div class="brief-actions"><a class="primary" href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer">${r.type==='Video'?'Watch on YouTube':'Read original article'} ↗</a><button class="review-btn" data-review="${id}" aria-pressed="${p.reviewed}">${p.reviewed?'✓ Reviewed':'○ Mark reviewed'}</button></div>${renderBrief(r)}${r.chapters?`<h3>Jump into the talk</h3><div class="related">${r.chapters.map(c=>`<a href="https://www.youtube.com/watch?v=-6czrxuHJLg&t=${c.seconds}s" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(c.label)}</span><span>${c.time} ↗</span></a>`).join('')}</div>`:''}<h3>Practitioner lens</h3><p class="angle">${escapeHTML(r.angle)}</p><h3>Practice prompts</h3><div class="question-list">${r.questions.map(q=>`<div class="question">${escapeHTML(q)}</div>`).join('')}</div><h3><label for="resource-notes">Your notes</label></h3><textarea id="resource-notes" class="note-area" maxlength="100000" placeholder="What stood out? Connect it to your own work, or capture a question to ask…">${escapeHTML(p.notes)}</textarea><p class="notes-help" id="notes-status">${storageAvailable?'Saved automatically in this browser. Export a backup from the sidebar.':'Browser storage unavailable. Export your notes to keep them.'}</p><h3>Read alongside</h3><div class="related">${r.related.map(rel=>{const a=resources.find(x=>x.id===rel);return `<button data-open="${a.id}">${escapeHTML(a.title)} <span>↗</span></button>`}).join('')}</div><div class="evidence"><strong>Source note</strong><br>${escapeHTML(r.evidence)}${r.supporting?`<br><a href="${escapeHTML(r.supporting.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(r.supporting.title)} ↗</a>`:''}<br>Summaries are condensed reading aids. Practice prompts and reading connections are editorial suggestions.</div></div>`;
  if(!$('#detail').open)$('#detail').showModal();
  $('#detail').scrollTop=0;$('#close-detail').focus();
}
function toggle(id,key) {
  progress[id]={...info(id),[key]:!info(id)[key]};const didSave=persist();render();
  if($('#detail').open&&currentId===id){const b=$('#detail [data-review]');if(b){b.setAttribute('aria-pressed',info(id).reviewed);b.textContent=info(id).reviewed?'✓ Reviewed':'○ Mark reviewed';}}
  if(didSave)toast(key==='saved'?(info(id).saved?'Added to your shortlist':'Removed from shortlist'):(info(id).reviewed?'Marked as reviewed':'Marked as unread'));
}
function reset(){state={view:'all',company:'All',topic:'All topics',search:'',format:'All',sort:'curated'};$('#search').value='';$('#format').value='All';$('#sort').value='curated';render();}
document.addEventListener('click',event=>{
  const b=event.target.closest('button');if(!b)return;
  if(b.dataset.open)openBrief(b.dataset.open);
  else if(b.dataset.save){const id=b.dataset.save;toggle(id,'saved');document.querySelector(`[data-save="${id}"]`)?.focus();}
  else if(b.dataset.review){const id=b.dataset.review,wasDialog=$('#detail').contains(b);toggle(id,'reviewed');if(!wasDialog)document.querySelector(`[data-review="${id}"]`)?.focus();}
  else if(b.dataset.view){state.view=b.dataset.view;render();}
  else if(b.dataset.company){state.company=b.dataset.company;render();}
  else if(b.dataset.topic){state.topic=b.dataset.topic;render();Array.from(document.querySelectorAll('[data-topic]')).find(x=>x.dataset.topic===state.topic)?.focus();}
});
$('#search').addEventListener('input',e=>{state.search=e.target.value;render();});
$('#format').addEventListener('change',e=>{state.format=e.target.value;render();});
$('#sort').addEventListener('change',e=>{state.sort=e.target.value;render();});
$('#clear').onclick=reset;$('#empty-clear').onclick=reset;
$('#close-detail').onclick=()=>$('#detail').close();
$('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=$('#detail').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#detail').close();}});
$('#detail').addEventListener('input',e=>{if(e.target.id==='resource-notes'){progress[currentId]={...info(currentId),notes:e.target.value};const ok=persist();$('#notes-status').textContent=ok?'Saved in this browser.':'Not saved to browser storage. Export to keep your notes.';}});
$('#detail').addEventListener('close',()=>{render();document.querySelector(`[data-open="${currentId}"]`)?.focus();});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('#detail').open){e.preventDefault();$('#search').focus();}});
$('#export').onclick=()=>{const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),progress},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='data-ai-fieldnotes-notes.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Notes and progress exported');};
$('#import').onclick=()=>$('#import-file').click();
$('#import-file').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>2000000)throw Error('File too large');const data=JSON.parse(await f.text());if(data.version!==1||!data.progress||typeof data.progress!=='object'||Array.isArray(data.progress))throw Error('Invalid format');const incoming=sanitize(data.progress);for(const [id,v] of Object.entries(incoming)){const old=info(id);progress[id]={saved:old.saved||v.saved,reviewed:old.reviewed||v.reviewed,notes:old.notes&&v.notes&&old.notes!==v.notes?old.notes+'\n\n— Imported notes —\n'+v.notes:old.notes||v.notes};}const ok=persist();render();if(ok)toast('Backup merged with your notes and progress');}catch{toast('Choose a valid Fieldnotes JSON backup (up to 2 MB).');}e.target.value='';};
render();
if(!storageAvailable)toast('Browser storage is unavailable. Export notes to keep your changes.');
