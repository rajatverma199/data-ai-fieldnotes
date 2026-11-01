# Data & AI Fieldnotes

An authored perspective on how reliable data, shared semantics, and relevant context support useful AI agents, followed by a curated reference library. Each resource includes a five-part brief, key takeaways, discussion prompts, and a link to its original source.

[Visit the reading library](https://data-ai-fieldnotes.rajver.chatgpt.site).

## Run locally

No build step or dependencies are required. With Python 3 installed, run:

```sh
python3 -m http.server 8765 --directory dist
```

Then open <http://localhost:8765>.

## Features

- Search titles, summaries, topics, and personal notes.
- Filter by company, topic, and resource format.
- Save a shortlist and track reviewed resources.
- Keep notes in browser-local storage, with JSON export and import.

Notes and reading progress are not sent to a server or included in the source code. They belong to the current browser and site origin. Export a backup before moving to another domain or clearing browser data.

## Source layout

- `dist/index.html`: the landing-page essay, source connections, page structure, and company filters.
- `dist/data.js`: curated resources and structured briefs.
- `dist/app.js`: search, filters, review dialogs, and local notes.
- `dist/style.css`: responsive presentation.
- `.openai/hosting.json`: configuration for the existing Sites deployment.

To add a resource, use a unique ID and include `context`, `problems`, `solutions`, and `value` arrays in its `brief`; `takeaways` supplies the fifth section. Related-resource IDs must exist. Topics appear automatically. Add a sidebar button in `index.html` when introducing a company.

## Hosting

Any static host can serve `dist/`. The existing Sites configuration identifies a specific hosted project; use your own project configuration for a separate deployment.

## Editorial approach

Summaries are concise reading aids, not reproductions of the source articles. Discussion prompts and reading connections are editorial suggestions. Reported results retain their scope and limitations. Original articles and videos remain the work of their respective authors and publishers.

The interface loads fonts from Google Fonts and otherwise works without a backend. Follow original-source links for the complete material.

The site was renamed to Data & AI Fieldnotes. Notes saved under the previous site address require a JSON export/import to move between browser origins. The original storage key remains compatible with existing backups.
