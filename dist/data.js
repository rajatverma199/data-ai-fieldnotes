window.RESOURCES = [
  {
    "id": "spotify-portal",
    "company": "Spotify",
    "type": "Article",
    "source": "Spotify Engineering",
    "author": "Dimitri Mazmanov",
    "date": "2026-09-03",
    "duration": "",
    "title": "Portal by Spotify: routing routine coding work to smaller models",
    "originalTitle": "Portal by Spotify cut my Claude Code token usage by 90%",
    "url": "https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90",
    "topics": [
      "AI developer experience",
      "Agent efficiency"
    ],
    "keywords": "Portal AiKA shunt Claude Code model routing bulk-reader code-writer hooks CLI MCP token context latency",
    "summary": "Reusable worker agents handle large reads and predictable code generation, preserving the main coding agent’s context.",
    "brief": {
      "context": [
        "An AI coding workflow spends expensive model tokens on routine file processing."
      ],
      "problems": [
        "Prompt-only routing is advisory; delegation also adds latency and can lose detail."
      ],
      "solutions": [
        "Portal modes configure worker models and instructions; shunt combines hooks, CLI scripts, and skills to route tasks.",
        "Large reads return summaries; pattern-based generation can write directly to disk. Targeted reads remain available."
      ],
      "value": [
        "Shared, configurable workers can serve multiple projects without rebuilding routing integrations."
      ]
    },
    "takeaways": [
      "Match delegation to task complexity; keep debugging and consequential reasoning with the stronger model.",
      "Evaluate quality and latency alongside token savings."
    ],
    "angle": "PM lens: treat model routing as a developer-product decision, with observable tradeoffs and a clear fallback.",
    "questions": [
      "What quality checks should run before accepting delegated code?",
      "How would you measure cost per successfully completed developer task?"
    ],
    "evidence": "Published September 3, 2026. The author reports roughly 90% mean bulk-read token savings across a four-scenario Java-monorepo benchmark; this is not a claim of 90% lower total cost. Interview prompts are editorial.",
    "related": [
      "kepler",
      "meta-patterns",
      "netflix-datajunction"
    ]
  },
  {
    "id": "meta-patterns",
    "company": "Meta",
    "type": "Article",
    "source": "Analytics at Meta",
    "author": "Benjamin Wan Rothschild",
    "date": "",
    "dateLabel": "Added Oct 24, 2026",
    "duration": "7 min read",
    "title": "Scaling AI-native analytics patterns at Meta",
    "originalTitle": "Scaling AI-Native Analytics Patterns at Meta",
    "url": "https://medium.com/@AnalyticsAtMeta/scaling-ai-native-analytics-patterns-at-meta-b29162cb46bf",
    "topics": [
      "Semantic layers",
      "Self-service analytics",
      "AI data agents"
    ],
    "keywords": "Analytics Libraries deterministic SQL typed specifications YAML measurement patterns retention funnels recipes DEmate",
    "summary": "Meta turns recurring measurements into governed libraries that agents can use to produce pipelines, query models, and build analytics experiences.",
    "brief": {
      "context": [
        "Meta repeatedly rebuilds common product measurements; Analytics Libraries now power over 9,000 production pipelines."
      ],
      "problems": [
        "Duplicate pipelines create inconsistent calculations.",
        "Free-form AI-generated SQL can produce plausible but wrong answers."
      ],
      "solutions": [
        "Typed parameters generate pipelines and agent-readable YAML models.",
        "A deterministic query tool selects sources and generates SQL; recipes and templates support analysis and dashboards."
      ],
      "value": [
        "Humans and agents share governed primitives across analytics production and consumption."
      ]
    },
    "takeaways": [
      "Standardize recurring measurements where reuse justifies maintenance.",
      "Preserve flexibility for exploratory and one-off analysis."
    ],
    "angle": "Compare governed patterns with Kepler’s context-rich exploration and Netflix’s shared metrics.",
    "questions": [
      "Which measurements should become reusable patterns?",
      "How would you test intent interpretation when SQL generation is deterministic?"
    ],
    "evidence": "Source article reviewed. Pipeline count is reported by Meta. Exact publication date was not verified; the card shows the collection date. Value proposition and takeaways are concise editorial syntheses.",
    "related": [
      "netflix-analytics",
      "bi-semantic",
      "kepler",
      "netflix-datajunction"
    ]
  },
  {
    "id": "netflix-datajunction",
    "company": "Netflix",
    "type": "Article",
    "source": "Netflix TechBlog",
    "author": "Olek Gorajek, Samuel Redai & Yian Shang",
    "date": "2026-02-24",
    "duration": "7 min read",
    "title": "DataJunction: Netflix’s semantic foundation for analytics",
    "originalTitle": "DataJunction as Netflix’s answer to the missing piece of the modern data stack",
    "url": "https://netflixtechblog.com/datajunction-as-netflixs-answer-to-the-missing-piece-of-the-modern-data-stack-92af926b40a5",
    "topics": [
      "Semantic layers",
      "Self-service analytics",
      "Analytics UX & APIs"
    ],
    "keywords": "DataJunction DJ semantic graph SQL parsing generation metrics dimensions experimentation metric authoring API cubes Druid Data Explorer Superset introspection",
    "summary": "Why Netflix chose DataJunction and prioritized its semantic graph, SQL engine, and APIs to make metrics easier to author, inspect, and reuse.",
    "brief": {
      "context": [
        "Netflix’s experimentation platform exposed the difficulty of creating and understanding shared metrics."
      ],
      "problems": [
        "Scattered definitions and duplicated pipelines undermined consistency.",
        "Metric onboarding could take weeks and required specialized knowledge."
      ],
      "solutions": [
        "A connected semantic graph supports SQL parsing and generation through shared APIs.",
        "Cubes serve metrics and dimensions; client links expose definitions for inspection and troubleshooting."
      ],
      "value": [
        "Reusable business definitions connect practitioner authoring to multiple analytics interfaces."
      ]
    },
    "takeaways": [
      "Prioritize a dependable semantic core before expanding interfaces.",
      "Make definitions inspectable from the tools where people consume metrics."
    ],
    "angle": "Consider how practitioners author, validate, and publish reusable business meaning when onboarding a new domain.",
    "questions": [
      "Where is the largest remaining bottleneck in metric onboarding?",
      "How do you balance shared definitions with exploratory flexibility?"
    ],
    "evidence": "Source article reviewed. Published February 24, 2026. Describes experimentation adoption and broader analytics ambitions; it does not establish a particular LORE integration. Interview framing is editorial synthesis.",
    "related": [
      "netflix-analytics",
      "bi-semantic",
      "meta-patterns",
      "netflix-analytics-3"
    ]
  },
  {
    "id": "netflix-analytics",
    "company": "Netflix",
    "type": "Article",
    "source": "Netflix TechBlog",
    "author": "Netflix Technology Blog",
    "date": "2024-12-17",
    "duration": "7 min read",
    "title": "Part 1: Analytics engineering at Netflix — shared foundations",
    "originalTitle": "Part 1: A Survey of Analytics Engineering Work at Netflix",
    "url": "https://netflixtechblog.com/part-1-a-survey-of-analytics-engineering-work-at-netflix-d761cfd551ee",
    "topics": [
      "Semantic layers",
      "Self-service analytics",
      "AI data agents"
    ],
    "keywords": "DataJunction DJ LORE cloud efficiency FPD CEA experimentation cost metrics",
    "summary": "How DataJunction, LORE, and cloud efficiency analytics help teams define consistent metrics and turn data into decisions.",
    "takeaways": [
      "Invest in reusable metrics and data foundations.",
      "Earn self-service adoption through trust and useful answers."
    ],
    "angle": "Connect platform investments to analyst productivity, metric consistency, and business decisions.",
    "questions": [
      "How would you prioritize shared metrics, conversational access, and dashboard improvements?",
      "Which measures would demonstrate that self-service analytics is working?"
    ],
    "evidence": "Source article reviewed. Interview prompts are suggested practice questions, not questions reported by Netflix.",
    "related": [
      "bi-semantic",
      "kepler",
      "meta-patterns",
      "netflix-analytics-2",
      "netflix-analytics-3",
      "netflix-datajunction"
    ],
    "brief": {
      "context": [
        "Netflix’s analytics engineers build systems that support decisions across the business."
      ],
      "problems": [
        "Scattered metric definitions cause inconsistency and repeated work.",
        "Bespoke dashboards are costly to maintain and often lightly used."
      ],
      "solutions": [
        "DataJunction shares metric definitions and resolves dimensional joins.",
        "LORE adds conversational access and feedback; FPD and CEA organize cloud cost analytics."
      ],
      "value": [
        "Shared foundations support multiple analytics experiences and consistent business measures."
      ]
    }
  },
  {
    "id": "netflix-analytics-2",
    "company": "Netflix",
    "type": "Article",
    "source": "Netflix TechBlog",
    "author": "Netflix Technology Blog",
    "date": "2025-01-02",
    "duration": "9 min read",
    "title": "Part 2: Analytics engineering at Netflix — business applications",
    "originalTitle": "Part 2: A Survey of Analytics Engineering Work at Netflix",
    "url": "https://netflixtechblog.com/part-2-a-survey-of-analytics-engineering-work-at-netflix-4f1f53b4ab0f",
    "topics": [
      "Applied analytics"
    ],
    "keywords": "games gaming causal inference synthetic control incrementality acquisition engagement state machine forecasting content cash production dubbing assistive speech recognition ASR evaluation",
    "summary": "Examples from games growth, content cash forecasting, and dubbing show how analytics engineering supports specialized business decisions.",
    "brief": {
      "context": [
        "Netflix applies analytics across games, production finance, and localization."
      ],
      "problems": [
        "Observed signups do not reveal what caused acquisition.",
        "Unknown future titles complicate cash forecasts; transcription quality varies across languages and content."
      ],
      "solutions": [
        "Synthetic controls estimate campaign lift; player state transitions support engagement scenarios.",
        "Production-phase models forecast cash spend; layered ASR evaluation measures text and timing accuracy."
      ],
      "value": [
        "Domain-specific models and usable analytical tools connect measurement to operational decisions."
      ]
    },
    "takeaways": [
      "Validate assumptions and historical data before relying on model outputs.",
      "Measure performance by meaningful segments, not only overall averages."
    ],
    "angle": "Discuss how a shared platform supports different domains without erasing their measurement needs.",
    "questions": [
      "Which capabilities should be shared across these domains?",
      "How would you measure whether an analytical tool improves the underlying decision?"
    ],
    "evidence": "Source article reviewed. Describes work presented at Netflix’s 2024 Analytics Summit; published January 2, 2025. Takeaways and interview framing are editorial syntheses.",
    "related": [
      "netflix-analytics",
      "netflix-analytics-3"
    ]
  },
  {
    "id": "netflix-analytics-3",
    "company": "Netflix",
    "type": "Article",
    "source": "Netflix TechBlog",
    "author": "Netflix Technology Blog",
    "date": "2025-01-06",
    "duration": "9 min read",
    "title": "Part 3: Analytics engineering at Netflix — design & APIs",
    "originalTitle": "Part 3: A Survey of Analytics Engineering Work at Netflix",
    "url": "https://netflixtechblog.com/part-3-a-survey-of-analytics-engineering-work-at-netflix-e67f0aa82183",
    "topics": [
      "Analytics UX & APIs",
      "Self-service analytics"
    ],
    "keywords": "dashboard design user research jobs to be done information architecture GraphQL Metaflow API latency caching batch production budgeting Locust load tests integration deployment workflow Benn Stancil",
    "summary": "Dashboard design principles and a production-budgeting API case study expose the work needed to make analytics usable and reliable.",
    "brief": {
      "context": [
        "Netflix shares dashboard craft and lessons from embedding budget analysis in an existing product."
      ],
      "problems": [
        "Overloaded dashboards obscure users’ tasks.",
        "Production APIs introduce latency, integration, testing, and release-coordination challenges."
      ],
      "solutions": [
        "Organize dashboard views around user jobs and make filters and context visible.",
        "Integrate GraphQL through Metaflow; combine caching, batch precomputation, testing, and coordinated deployment."
      ],
      "value": [
        "Analytical results reach users within existing workflows, with attention to usability and operational expectations."
      ]
    },
    "takeaways": [
      "Validate whether real-time analysis is worth its complexity.",
      "Align performance and deployment expectations with engineering partners early."
    ],
    "angle": "Connect practitioner productivity to the full path from analytical prototype to dependable product capability.",
    "questions": [
      "Where do analytics teams encounter the most friction getting work into production?",
      "When would you choose batch results over a real-time API?"
    ],
    "evidence": "Source article reviewed. Describes work presented at Netflix’s 2024 Analytics Summit; published January 6, 2025. Interview prompts are suggested discussion questions.",
    "related": [
      "netflix-analytics",
      "netflix-analytics-2",
      "maestro"
    ]
  },
  {
    "id": "bi-semantic",
    "company": "Cross-company",
    "type": "Article",
    "source": "benn.substack",
    "author": "Benn Stancil",
    "date": "2023-05-05",
    "duration": "",
    "title": "BI by another name",
    "originalTitle": "BI by another name",
    "url": "https://benn.substack.com/p/bi-by-another-name",
    "topics": [
      "Semantic layers",
      "Self-service analytics"
    ],
    "keywords": "BI metrics business intelligence governance exploration universal semantic layer SQL",
    "summary": "A useful challenge to the semantic-layer pitch: shared metric APIs alone may not support the full range of analytical work.",
    "takeaways": [
      "Test semantic layers against exploratory use cases.",
      "Shared definitions should enable varied ways of working."
    ],
    "angle": "Use this as a counterpoint when discussing DataJunction or a unified analytics experience.",
    "questions": [
      "Where would you standardize semantics, and where would you preserve analyst flexibility?",
      "What would make migration to a shared semantic layer worth the effort?"
    ],
    "evidence": "Source essay reviewed. This is the author’s argument, not an industry consensus.",
    "related": [
      "netflix-analytics",
      "netflix-datajunction"
    ],
    "brief": {
      "context": [
        "Stancil questions whether independent semantic layers are truly universal."
      ],
      "problems": [
        "Metric APIs constrain exploration to predefined measures and dimensions.",
        "Different analytical interfaces need consistent logic without losing flexibility."
      ],
      "solutions": [
        "He argues for shared entities and computation that work beyond reporting.",
        "SQL and dbt illustrate complementary possibilities; no complete implementation is proposed."
      ],
      "value": [
        "A critical lens for distinguishing metric extraction from broad semantic interoperability."
      ]
    }
  },
  {
    "id": "data-projects",
    "company": "Netflix",
    "type": "Article",
    "source": "Netflix TechBlog",
    "author": "Amer Hesson, Marcelo Mayworm, James Mulcahy & Brittany Truong",
    "date": "2026-05-11",
    "duration": "8 min read",
    "title": "Data Projects: managing data assets at Netflix scale",
    "originalTitle": "Data Projects: Managing Data Assets at Netflix Scale",
    "url": "https://netflixtechblog.com/data-projects-managing-data-assets-at-netflix-scale-7ca25888591e",
    "topics": [
      "Governance & identity",
      "Orchestration"
    ],
    "keywords": "permissions ACL IAM ownership durable identity gravity assets access control",
    "summary": "A project-level model for managing related data assets and running workloads under identities that outlast individual employees.",
    "takeaways": [
      "Decouple production execution from employee lifecycles.",
      "Make governance part of the default workflow."
    ],
    "angle": "Frame governance as a usability and reliability problem, alongside access control.",
    "questions": [
      "How would you migrate human-owned pipelines to durable identities safely?",
      "How would you measure whether project-level permissions reduce support burden?"
    ],
    "evidence": "Source article reviewed. Publication date: May 11, 2026.",
    "related": [
      "maestro",
      "kepler"
    ],
    "brief": {
      "context": [
        "Netflix manages millions of tables and many scheduled data workloads."
      ],
      "problems": [
        "Per-asset permissions are cumbersome during organizational changes.",
        "Workflows fail when their human owners lose access or leave."
      ],
      "solutions": [
        "Data Projects group assets and provide durable, assumable identities with role-based grants.",
        "Assets created under a project identity join the project automatically."
      ],
      "value": [
        "One abstraction connects asset organization, access management, and workload identity."
      ]
    }
  },
  {
    "id": "maestro",
    "company": "Netflix",
    "type": "Article",
    "source": "Netflix TechBlog",
    "author": "Jun He, Natallia Dzenisenka, Praneeth Yenugutala, Yingyi Zhang & Anjali Norwood",
    "date": "2024-07-22",
    "duration": "18 min read",
    "title": "Maestro: Data/ML workflow orchestrator at Netflix",
    "originalTitle": "Maestro: Data/ML Workflow Orchestrator at Netflix",
    "url": "https://netflixtechblog.com/maestro-netflixs-workflow-orchestrator-ee13a06f9c78",
    "topics": [
      "Orchestration"
    ],
    "keywords": "workflow pipelines ML distributed systems retries loops run strategy scalability dependencies signals",
    "summary": "A look at Netflix’s workflow platform: scalable execution, reusable workflow patterns, and operational controls for Data/ML pipelines.",
    "takeaways": [
      "Pair workflow expressiveness with debugging tools.",
      "Treat reliability and usability as shared platform requirements."
    ],
    "angle": "Discuss the product tradeoffs of a shared orchestration service used by technical and less technical teams.",
    "questions": [
      "How would you balance expressive workflows with ease of debugging?",
      "Which reliability and usability metrics would you track for an orchestrator?"
    ],
    "evidence": "Source article reviewed. Scale and feature descriptions reflect the July 2024 article.",
    "related": [
      "data-projects"
    ],
    "brief": {
      "context": [
        "Netflix needs shared orchestration for interconnected Data/ML workflows."
      ],
      "problems": [
        "Large workloads require scalable scheduling and execution.",
        "Users need flexible patterns plus operational control when jobs fail."
      ],
      "solutions": [
        "Maestro manages queues, retries, and compute dispatch.",
        "Loops, subworkflows, branches, versioning, and run strategies support varied workflows."
      ],
      "value": [
        "A common orchestration service supports both complex workflows and diverse user needs."
      ]
    }
  },
  {
    "id": "kepler",
    "company": "OpenAI",
    "type": "Article",
    "source": "The New Stack",
    "author": "Joab Jackson",
    "date": "2026-01-05",
    "duration": "",
    "title": "Kepler: OpenAI’s internal agent platform for synthesizing data",
    "originalTitle": "Kepler: OpenAI’s Internal Agent Platform for Synthesizing Data",
    "url": "https://thenewstack.io/kepler-openais-internal-agent-platform-for-synthesizing-data/",
    "topics": [
      "AI data agents",
      "Self-service analytics",
      "Governance & identity"
    ],
    "keywords": "metadata context memory evaluation evals SQL MCP permissions retrieval",
    "summary": "Reporting on an internal data agent that combines contextual knowledge, iterative queries, and memory to help employees answer data questions.",
    "takeaways": [
      "Design beyond text-to-SQL.",
      "Measure correctness and preserve access boundaries."
    ],
    "angle": "Think beyond text-to-SQL: discovery, context, trust, permissions, and evaluation are product requirements.",
    "questions": [
      "How would you measure answer correctness separately from adoption?",
      "What should an agent do when its context is ambiguous or incomplete?"
    ],
    "evidence": "Article reviewed via indexed full text; direct page fetch was blocked. This is third-party reporting. A related first-party write-up is linked below.",
    "supporting": {
      "title": "OpenAI: Inside our in-house data agent",
      "url": "https://openai.com/index/inside-our-in-house-data-agent/"
    },
    "related": [
      "openai-video",
      "netflix-analytics",
      "meta-patterns"
    ],
    "brief": {
      "context": [
        "The New Stack reports on OpenAI’s internal data analysis agent."
      ],
      "problems": [
        "Similar tables conceal important semantic differences.",
        "Finding context and writing correct queries slow down analysis."
      ],
      "solutions": [
        "Kepler retrieves knowledge, executes queries, and iterates using results.",
        "Metadata, code-derived context, memory, evaluations, and user credentials support the workflow."
      ],
      "value": [
        "Connects fragmented data and institutional knowledge through an interactive analytical interface."
      ]
    }
  },
  {
    "id": "openai-video",
    "company": "OpenAI",
    "type": "Video",
    "source": "YouTube",
    "author": "Bonnie Xu, OpenAI",
    "date": "",
    "duration": "20:48 watch",
    "title": "Inside OpenAI’s internal AI data agent",
    "originalTitle": "Inside OpenAI’s Internal AI Data Agent — Bonnie Xu, OpenAI (Summit ’26)",
    "url": "https://youtu.be/-6czrxuHJLg?si=P4a-KJkY2yyngSVb",
    "topics": [
      "AI data agents",
      "Self-service analytics",
      "Governance & identity"
    ],
    "keywords": "Bonnie Xu Summit 2026 video talk context memory evaluations evals metadata retrieval permissions",
    "summary": "Bonnie Xu explains how context layers, memory, evaluations, and permissions shape OpenAI’s internal data agent.",
    "takeaways": [
      "Curate context beyond table descriptions.",
      "Use memory and evaluations to sustain quality."
    ],
    "chapters": [
      {
        "label": "Architecture & context layers",
        "seconds": 402,
        "time": "6:42"
      },
      {
        "label": "Evaluating answer quality",
        "seconds": 782,
        "time": "13:02"
      },
      {
        "label": "Permissions & transparency",
        "seconds": 881,
        "time": "14:41"
      },
      {
        "label": "Lessons learned",
        "seconds": 945,
        "time": "15:45"
      }
    ],
    "angle": "Explain how you would make an analytics agent trustworthy and useful, then validate those choices with users.",
    "questions": [
      "What tradeoffs from the talk would you apply to a data platform you own?",
      "Which claims or examples would you want to investigate further?"
    ],
    "evidence": "Auto-generated English captions reviewed; transcription errors are possible. Timestamp links refer to this video. Runtime verified in the player; publication date not verified.",
    "related": [
      "kepler",
      "netflix-analytics"
    ],
    "brief": {
      "context": [
        "Bonnie Xu explains OpenAI’s internal data agent and implementation lessons."
      ],
      "problems": [
        "Schema alone cannot explain table semantics.",
        "Wrong answers, regressions, and sensitive data create trust risks."
      ],
      "solutions": [
        "Six context layers combine metadata, annotations, code, institutional knowledge, memory, and live access.",
        "Result-based evaluations, permission checks, and focused tools improve reliability."
      ],
      "value": [
        "A practical account of the foundations and iteration required for trustworthy analytics agents."
      ]
    }
  }
];
