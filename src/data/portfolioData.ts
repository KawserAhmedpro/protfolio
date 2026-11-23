export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  contribution: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  linkedInPostUrl?: string;
  isBackendPractice?: boolean;
  metrics?: { label: string; value: string }[];
  highlight: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'backend' | 'database' | 'tools' | 'exploring';
  status: 'proficient' | 'comfortable' | 'exploring';
  description: string;
  context: string;
  badge?: string;
}

export interface JourneyMilestone {
  year: string;
  phase: string;
  title: string;
  context: string;
  description: string;
  takeaway: string;
  tags: string[];
}

export interface ResearchTopic {
  id: string;
  code: string;
  title: string;
  domain: string;
  summary: string;
  curiosityReason: string;
  keyConcepts: string[];
  status: 'Reading Papers' | 'Prototyping' | 'Deep Dive';
  notesCount: number;
}

export interface PersonalInterest {
  title: string;
  monikers: string;
  description: string;
  reflection: string;
}

export interface AcademicRecord {
  level: string;
  degree: string;
  institution: string;
  result: string;
  board?: string;
  status: 'Ongoing' | 'Completed';
  highlight?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kawser Ahmed Ratul",
    nickname: "Ratul",
    handle: "KawserAhmedpro",
    role: "Computer Science & Engineering Student",
    institution: "Mymensingh Engineering College",
    country: "Bangladesh",
    coordinates: "24.7471° N, 90.4203° E",
    locationCity: "Mymensingh",
    timezone: "Asia/Dhaka",
    statusBadge: "ACADEMIC LAB // BUILDING & EXPLORING",
    avatarInitials: "KAR",
    shortTagline: "Developer in progress. Curious about how things work under the hood.",
    editorialBio: [
      "I am a Computer Science and Engineering undergraduate at Mymensingh Engineering College, Bangladesh. Rather than jumping between surface-level trends, I spend my time getting comfortable with backend systems, understanding database internals, and dissecting how machine learning models actually process information.",
      "My core engineering focus is on C# and the ASP.NET Core ecosystem — building structured Web APIs, writing clean Entity Framework Core data mappings, and architecting relational schemas in PostgreSQL. When I face everyday frictions in student hostel life and academic routines, I build real software like the Dining Management System and ResearchMate to solve them.",
      "I believe the best software engineers are relentless learners with zero ego. I am not a veteran architect or a senior specialist; I am an aspiring engineer who genuinely loves writing clean code, reading academic research papers, and steadily building capability day by day."
    ],
    principles: [
      {
        number: "01",
        title: "First Principles Over Buzzwords",
        detail: "Understand the SQL query your ORM executes. Know how HTTP payloads serialize. Dive into what happens in memory rather than taking abstractions for granted."
      },
      {
        number: "02",
        title: "Friction-Driven Creation",
        detail: "The most authentic software is born from real personal and community need. Both the Dining Management System and ResearchMate were coded to organize hostel living and academic research."
      },
      {
        number: "03",
        title: "Academic Curiosity + Practical Craft",
        detail: "Pairing formal research papers with hands-on code experiments. Reading how modern transformers or distributed storage engines work makes me a sharper engineer."
      },
      {
        number: "04",
        title: "Honest Self-Calibration",
        detail: "No fabricated credentials or inflated skill percentages. Continuous mastery requires an honest appraisal of what I know and what I have yet to conquer."
      }
    ]
  },

  socialLinks: {
    github: "https://github.com/KawserAhmedpro",
    linkedin: "https://www.linkedin.com/in/kawserahmedratulpro/",
    facebook: "https://www.facebook.com/kawserahmedpro",
    email: "kawserahmedratul@gmail.com",
    resumeUrl: "#resume-modal",
    academicPortal: "https://mec.ac.bd"
  },

  academicHistory: [
    {
      level: "B.Sc.",
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Mymensingh Engineering College (MEC)",
      result: "Undergraduate (Ongoing)",
      board: "Affiliated with University of Dhaka",
      status: "Ongoing",
      highlight: "Department of CSE"
    },
    {
      level: "HSC",
      degree: "Higher Secondary Certificate",
      institution: "Hajiganj Degree College",
      result: "GPA 5.00 / 5.00",
      board: "Cumilla Board",
      status: "Completed",
      highlight: "Golden GPA 5.00"
    },
    {
      level: "SSC",
      degree: "Secondary School Certificate",
      institution: "Waruk Rahmania High School",
      result: "GPA 5.00 / 5.00",
      board: "Cumilla Board",
      status: "Completed",
      highlight: "GPA 5.00"
    },
    {
      level: "JSC",
      degree: "Junior School Certificate",
      institution: "Waruk Rahmania High School",
      result: "GPA 5.00 / 5.00",
      board: "Cumilla Board",
      status: "Completed",
      highlight: "GPA 5.00"
    },
    {
      level: "PSC",
      degree: "Primary School Certificate",
      institution: "Waruk Govt Primary School",
      result: "GPA 5.00 / 5.00",
      board: "Cumilla Board",
      status: "Completed",
      highlight: "GPA 5.00"
    }
  ] as AcademicRecord[],

  telemetry: {
    systemStatus: "ONLINE // RUNNING EXPERIMENTS",
    academicSemester: "Undergraduate CSE",
    coreStack: "C# • ASP.NET Core • EF Core • PostgreSQL",
    explorationRadar: "Machine Learning • Transformers • Distributed Patterns",
    openToOpportunities: "Open for technical discussions, open-source collaboration & learning"
  },

  projects: [
    {
      id: "dining-management-system",
      number: "01",
      title: "Dining Management System",
      subtitle: "Web-Based Hostel & Student Mess Dining Digitization Platform",
      category: "Full-Stack Web Application",
      tagline: "Simplifying and digitalizing dining operations with automated meal tracking, daily market expense management, and dynamic meal rate calculations.",
      description: "A comprehensive web-based platform engineered to modernize and digitalize dining operations in student messes and hostels. Built to eliminate manual ledger books, reduce calculation errors, and provide complete transparency across daily member meals, market grocery purchases, manager fees, and individualized billing sheets.",
      problem: "In student hostels across engineering colleges and universities in Bangladesh, managing shared dining records via manual paper registers regularly causes dispute-heavy meal calculations, lost bazaar receipts, lack of real-time member balance visibility, and chaotic manager handovers.",
      solution: "Architected a full web application featuring Firebase authentication, member management, flexible daily meal tracking (ON / OFF / DOUBLE states), market expense logging, automatic meal rate calculation (Total Expense / Total Consumed Meals), a public information portal, and an administrative control panel with offline support.",
      features: [
        "Member Management & Boarder Profile Administration",
        "Daily Meal Tracking with quick ON / OFF / DOUBLE status toggles",
        "Market & Expense Management with itemized grocery logs",
        "Automatic Dynamic Meal Rate Calculation",
        "Manager Assignment, Rotation & Automated Fee Calculation",
        "Public Information Portal for dispute-free transparent dining sheets",
        "Admin Dashboard & Real-Time Operational Overview",
        "Firebase Authentication for secure role-based access",
        "Offline Support & Multi-Device Synchronization"
      ],
      contribution: "Sole designer and developer. Conceived the system architecture, implemented Firebase authentication and real-time synchronization, built the dynamic meal-rate formula engine, designed the mobile-first responsive UI, and deployed the production web app.",
      technologies: ["JavaScript (ES6+)", "Firebase Authentication", "Real-Time Sync", "HTML5 Semantic UI", "Custom CSS3 Architecture", "Financial Ledger Logic", "Responsive Web Design"],
      liveUrl: "https://kawserahmedpro.github.io/meal_management_system/login",
      githubUrl: "https://github.com/KawserAhmedpro/meal_management_system",
      linkedInPostUrl: "https://www.linkedin.com/posts/kawserahmedratulpro_introducing-my-project-dining-management-activity-7530198268576862208-j5w6",
      isBackendPractice: false,
      metrics: [
        { label: "Deployment", value: "GitHub Pages" },
        { label: "Auth Provider", value: "Firebase Auth" },
        { label: "Architecture", value: "Public Portal + Admin" }
      ],
      highlight: "Directly solves student mess dining accounting with zero manual math errors and complete transparency."
    },
    {
      id: "researchmate",
      number: "02",
      title: "ResearchMate",
      subtitle: "Academic Literature Management & Paper Reading Workspace",
      category: "Research Tool / Workspace",
      tagline: "A unified workspace for organizing research papers, extracting metadata, and synthesizing notes.",
      description: "An intentional reading and literature management workspace tailored for students and researchers. Built to eliminate paper sprawl across browser tabs by integrating paper cataloging, PDF reading, tagged notes, and searchable metadata into one cohesive environment.",
      problem: "Reading machine learning and computer science research papers often results in scattered browser tabs, lost PDF references, and disconnected notes across random text files.",
      solution: "Developed an integrated research workspace that catalogs papers with author and citation metadata, pairs documents with organized personal notes, and provides quick search and tagging across different research domains.",
      features: [
        "Structured research paper repository with metadata ingestion",
        "Tag-based taxonomic classification (e.g. ML, NLP, Systems)",
        "Integrated document reading workspace with note synchronization",
        "Search and filter across titles, topics, and custom tags",
        "Quick citation archiving and reference management",
        "Lightweight, fast client-side architecture"
      ],
      contribution: "Architected the user experience and document workflow. Developed the paper card indexing system, filter engines, and note-taking state management.",
      technologies: ["JavaScript", "HTML5", "CSS3 / Modern Layouts", "Client Document Handling", "Workspace UI"],
      liveUrl: "https://kawserahmedpro.github.io/ReasearchMate/",
      githubUrl: "https://github.com/KawserAhmedpro/ReasearchMate",
      isBackendPractice: false,
      metrics: [
        { label: "Target Domain", value: "Academic Papers" },
        { label: "Workspace Mode", value: "Split View / Reader" },
        { label: "Search Index", value: "Client-side Fast Filter" }
      ],
      highlight: "Designed to fuel my daily habit of reading AI & Systems research papers without tab fatigue."
    },
    {
      id: "aspnet-backend-practice",
      number: "03",
      title: "ASP.NET Core Backend Practice & API Systems",
      subtitle: "RESTful Web APIs, Layered Architecture & Database Integration",
      category: "Backend Engineering / System Practice",
      tagline: "Hands-on implementation of resilient Web APIs, Entity Framework Core data access, and secure authentication.",
      description: "A continuous series of backend engineering labs and API services built with C# and ASP.NET Core. Explores clean architectural boundaries, RESTful API design conventions, database migrations, authentication pipelines, and structured error handling.",
      problem: "Writing basic endpoints is easy, but writing maintainable, production-ready backend code requires hands-on understanding of dependency injection, middleware pipelines, database concurrency, and secure token authentication.",
      solution: "Designed and implemented modular Web API services featuring Clean/Layered Architecture, Repository & Unit of Work patterns, Entity Framework Core with PostgreSQL, JWT-based bearer authentication, and comprehensive input validation.",
      features: [
        "RESTful API endpoints following HTTP specifications and status codes",
        "Entity Framework Core ORM with code-first migrations and relational mapping",
        "PostgreSQL integration with indexed queries and transaction support",
        "JWT Authentication and role-based authorization policies",
        "Centralized global exception handling middleware with ProblemDetails RFC 7807",
        "DTO projection with AutoMapper / explicit mapping to avoid entity over-posting",
        "Interactive API Console simulator embedded in this portfolio"
      ],
      contribution: "Designed database schemas, wrote C# controllers and service layers, configured EF Core DbContext, and implemented automated API test collections in Postman.",
      technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "RESTful Web API", "JWT / Auth", "Postman", "Swagger / OpenAPI"],
      liveUrl: "#api-simulator",
      githubUrl: "https://github.com/KawserAhmedpro",
      isBackendPractice: true,
      metrics: [
        { label: "Framework", value: "ASP.NET Core 8" },
        { label: "Data Store", value: "PostgreSQL / EF Core" },
        { label: "Architecture", value: "Layered / Repository" }
      ],
      highlight: "Practical laboratory demonstrating backend fundamentals, type safety, and database integrity."
    }
  ] as ProjectItem[],

  skills: [
    // Languages
    {
      name: "C#",
      category: "languages",
      status: "proficient",
      description: "Primary backend language. Strong affinity for its strict type system, LINQ, async/await, and modern language features.",
      context: "Used across ASP.NET Core Web API services, console tools, and architectural labs.",
      badge: "Core Language"
    },
    {
      name: "C++",
      category: "languages",
      status: "proficient",
      description: "Foundational programming language learned during CSE curriculum. Pointers, memory allocation, and STL.",
      context: "Used for competitive problem solving, data structures, and algorithm implementations.",
      badge: "Foundational"
    },
    {
      name: "Python",
      category: "languages",
      status: "comfortable",
      description: "Scripting, machine learning exploration, prototyping algorithms, and processing research datasets.",
      context: "Primary language for experimenting with ML concepts, Jupyter notebooks, and mathematical scripts.",
      badge: "Data & ML"
    },

    // Backend
    {
      name: "ASP.NET Core",
      category: "backend",
      status: "proficient",
      description: "Framework of choice for web APIs, middleware pipelines, configuration binding, and dependency injection.",
      context: "Building RESTful microservices, API backends, and learning clean layered architecture.",
      badge: "Primary Backend"
    },
    {
      name: "Web API",
      category: "backend",
      status: "proficient",
      description: "Designing predictable, resource-oriented RESTful endpoints with status codes, routing, and model binding.",
      context: "Architecting backend controllers, request validation, and OpenAPI documentation.",
      badge: "API Design"
    },
    {
      name: "Entity Framework Core",
      category: "backend",
      status: "proficient",
      description: "Code-first migrations, DbContext lifecycle, navigation properties, LINQ-to-Entities, and eager/lazy loading.",
      context: "Connecting .NET applications to relational databases with type safety and schema control.",
      badge: "ORM Engine"
    },
    {
      name: "REST API Design",
      category: "backend",
      status: "proficient",
      description: "Resource naming, HTTP verb conventions, status codes, pagination, filtering, and error contracts.",
      context: "Ensuring APIs are self-describing, consistent, and intuitive for frontend consumers.",
      badge: "Protocol"
    },

    // Databases
    {
      name: "PostgreSQL",
      category: "database",
      status: "comfortable",
      description: "Relational database used for projects. ACID compliance, foreign keys, indexing, and JSONB capabilities.",
      context: "Primary relational storage for ASP.NET Core backend practice projects.",
      badge: "Primary RDBMS"
    },
    {
      name: "SQL & Relational Design",
      category: "database",
      status: "comfortable",
      description: "Writing relational queries, joins, aggregates, normalization (1NF to 3NF), and understanding indexing basics.",
      context: "Schema architecture, foreign key constraints, and query analysis.",
      badge: "Data Modeling"
    },

    // Tools
    {
      name: "Git & GitHub",
      category: "tools",
      status: "proficient",
      description: "Version control, branching, committing, pull requests, and publishing open-source projects via GitHub Pages.",
      context: "Everyday workflow for all codebases and repository management.",
      badge: "Version Control"
    },
    {
      name: "Visual Studio",
      category: "tools",
      status: "proficient",
      description: "Comprehensive IDE for .NET development, solution configuration, interactive debugging, and profiling.",
      context: "Heavy daily driver for C# and ASP.NET Core engineering.",
      badge: "IDE"
    },
    {
      name: "VS Code",
      category: "tools",
      status: "proficient",
      description: "Lightweight editor for web frontend, Markdown notes, Python scripts, and quick code navigation.",
      context: "Used for general development, research notes, and frontend experimentation.",
      badge: "Editor"
    },
    {
      name: "Postman",
      category: "tools",
      status: "proficient",
      description: "API testing, environment variables, inspecting HTTP payloads, headers, auth tokens, and response benchmarks.",
      context: "Validating API endpoints during backend development cycles.",
      badge: "API Tooling"
    },

    // Exploring Radar
    {
      name: "Machine Learning",
      category: "exploring",
      status: "exploring",
      description: "Supervised & unsupervised learning fundamentals, loss functions, gradient descent, and evaluation metrics.",
      context: "Currently studying theory, reading papers, and experimenting with Python models.",
      badge: "Active Radar"
    },
    {
      name: "Artificial Intelligence",
      category: "exploring",
      status: "exploring",
      description: "Deep learning fundamentals, neural networks, activation functions, and transformer attention mechanisms.",
      context: "Exploring the mathematical intuition and reading foundational AI publications.",
      badge: "Active Radar"
    },
    {
      name: "Software Architecture",
      category: "exploring",
      status: "exploring",
      description: "Clean Architecture, Onion Architecture, Dependency Inversion, Domain-Driven Design (DDD) concepts.",
      context: "Refining project structures to separate domain logic from infrastructure details.",
      badge: "Engineering Craft"
    },
    {
      name: "Distributed Systems Concepts",
      category: "exploring",
      status: "exploring",
      description: "Caching patterns (Redis), message queues, database replication, and eventual consistency concepts.",
      context: "Reading systems literature to prepare for scalable production systems.",
      badge: "Systems Curiosity"
    }
  ] as SkillItem[],

  journey: [
    {
      year: "Phase 01",
      phase: "ACADEMIC ADMISSION",
      title: "Matriculation at Mymensingh Engineering College",
      context: "Department of Computer Science & Engineering",
      description: "Began my undergraduate journey at MEC. Immersed in foundational computing concepts, discrete mathematics, digital logic, and analytical problem-solving.",
      takeaway: "Realized that software engineering isn't just writing code — it's constructing formal models of reality.",
      tags: ["CSE", "Mathematics", "Foundations", "MEC"]
    },
    {
      year: "Phase 02",
      phase: "SYSTEMS & ALGORITHMS",
      title: "Grasping Algorithmic Logic with C and C++",
      context: "Core Programming & Data Structures",
      description: "Spent hours understanding memory management, pointer arithmetic, recursion, and core data structures (arrays, linked lists, stacks, trees) in C and C++.",
      takeaway: "Building a mental model of memory and time complexity created permanent respect for low-level mechanics.",
      tags: ["C++", "Data Structures", "Algorithms", "Memory"]
    },
    {
      year: "Phase 03",
      phase: "SOLVING REAL COMMUNITY FRICTION",
      title: "Building Dining Management System for Student Messes",
      context: "Full-Stack Web App & Real-Time Financial Ledger",
      description: "Witnessed the monthly disputes, manual paperwork, and calculation errors of hostel mess dining. Architected and deployed the Dining Management System with Firebase Auth, ON/OFF/DOUBLE meal tracking, market logs, and automated meal-rate calculation.",
      takeaway: "The immense satisfaction of building software that solves genuine, high-friction problems for your peers in the hall community.",
      tags: ["Dining System", "Firebase Auth", "Real-Time Ledger", "Mess Tech"]
    },
    {
      year: "Phase 04",
      phase: "BACKEND DISCOVERY",
      title: "Finding the Core: C# and ASP.NET Core",
      context: "Backend Engineering & API Architecture",
      description: "Stepped away from surface-level UI and gravitated toward backend architecture. Discovered C# and the elegant power of ASP.NET Core, Entity Framework Core, and RESTful API principles.",
      takeaway: "Found my true engineering home: structured contracts, reliable database layers, and deterministic server logic.",
      tags: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL"]
    },
    {
      year: "Phase 05",
      phase: "RESEARCH IMMERSION",
      title: "ResearchMate & The World of Research Papers",
      context: "Academic Literature & Workspace Design",
      description: "As my curiosity for AI and computer science theory expanded, reading papers became a daily habit. Built ResearchMate to organize papers, citations, and analytical notes in one place.",
      takeaway: "Directly reading original research papers demystified technologies that once felt like magic.",
      tags: ["ResearchMate", "Papers", "Knowledge Base", "Literature"]
    },
    {
      year: "Phase 06",
      phase: "CURRENT HORIZON",
      title: "Deepening Systems & Exploring Machine Intelligence",
      context: "Continuous Learning & Engineering Growth",
      description: "Currently balancing academic coursework with advanced backend practices (Clean Architecture, API resilience) while actively exploring machine learning concepts and transformer foundations.",
      takeaway: "Staying curious, humble, and writing code every single week.",
      tags: ["Active Horizon", "Machine Learning", "Clean Architecture", "Growth"]
    }
  ] as JourneyMilestone[],

  researchArchive: [
    {
      id: "paper-01",
      code: "RES-2024-01",
      title: "Transformer Attention Mechanisms & Self-Attention",
      domain: "Machine Learning / NLP",
      summary: "Exploring the mathematical mechanics behind 'Attention Is All You Need' — Query, Key, and Value matrix multiplications, scaled dot-product calculations, and multi-head representations.",
      curiosityReason: "I wanted to understand mathematically why transformers overtook recurrent architectures for sequence modeling.",
      keyConcepts: ["Self-Attention Matrix", "Scaled Dot-Product", "Positional Encoding", "Multi-Head Projections"],
      status: "Reading Papers",
      notesCount: 14
    },
    {
      id: "paper-02",
      code: "RES-2024-02",
      title: "Retrieval-Augmented Generation (RAG) & Vector Spaces",
      domain: "AI Systems & Information Retrieval",
      summary: "Analyzing semantic document chunking, cosine distance in high-dimensional vector spaces, embedding model trade-offs, and hybrid keyword-vector retrieval pipelines.",
      curiosityReason: "Fascinated by how external knowledge bases can ground language model outputs without expensive re-training.",
      keyConcepts: ["Vector Embeddings", "Cosine Similarity", "Dense Retrieval", "Context Window Optimization"],
      status: "Prototyping",
      notesCount: 19
    },
    {
      id: "paper-03",
      code: "RES-2024-03",
      title: "Relational Index Structures: B-Trees vs. LSM-Trees",
      domain: "Database Systems",
      summary: "Deep dive into physical database storage engines: how B+Trees optimize read-heavy relational workloads (PostgreSQL) versus how Log-Structured Merge-trees handle write amplification.",
      curiosityReason: "To write optimal queries and design resilient schemas in PostgreSQL, I needed to see how the engine actually touches disk pages.",
      keyConcepts: ["B+ Tree Balancing", "Page Layouts", "WAL (Write-Ahead Logging)", "Cache Hit Ratios"],
      status: "Deep Dive",
      notesCount: 22
    },
    {
      id: "paper-04",
      code: "RES-2024-04",
      title: "Resilient Web API Patterns & Concurrency Control",
      domain: "Software Architecture / Backend",
      summary: "Studying idempotency keys, optimistic concurrency via row versions in EF Core, connection pool starvation mitigation, and structured error reporting standards (RFC 7807).",
      curiosityReason: "Moving beyond basic tutorials to understand what makes backend services survive unpredictable load spikes.",
      keyConcepts: ["Optimistic Concurrency", "Idempotency", "Connection Pool Tuning", "RFC 7807 ProblemDetails"],
      status: "Deep Dive",
      notesCount: 17
    }
  ] as ResearchTopic[],

  interests: [
    {
      title: "Problem Solving & Algorithmic Puzzles",
      monikers: "Discrete Logic // Edge Cases",
      description: "Untangling complex logic, analyzing time complexity, and finding the cleanest implementation for difficult constraints.",
      reflection: "There is an unmatched clarity when an algorithm clicks into place with optimal O(n) or O(log n) efficiency."
    },
    {
      title: "Cricket & Strategic Dynamics",
      monikers: "Patience // Field Tactics",
      description: "A lifelong passion for cricket — studying captaincy decisions, bowling variations, momentum shifts, and tactical discipline.",
      reflection: "Cricket is a game of patience, composure under pressure, and reading the subtle rhythm of every ball."
    },
    {
      title: "Reading Technical Papers & Long-form Engineering",
      monikers: "Academic Curiosity // Systems Design",
      description: "Reading engineering postmortems, architecture whitepapers, and academic papers late into the night.",
      reflection: "You absorb decades of wisdom when engineers write honestly about their production bottlenecks."
    },
    {
      title: "Building Personal Utilities",
      monikers: "Handcrafted Software // Zero Bloat",
      description: "Constructing minimalist software tools to automate or track personal bottlenecks without unnecessary dependencies.",
      reflection: "Software feels magical when you wake up and use something you wrote with your own hands."
    }
  ] as PersonalInterest[],

  simulatedApiEndpoints: [
    {
      method: "GET",
      path: "/api/v1/health",
      title: "System Health & Runtime Check",
      description: "Returns the current host environment, runtime telemetry, and database connectivity state.",
      responseCode: 200,
      responseTimeMs: 8,
      responseBody: {
        status: "Healthy",
        server: "Kestrel / .NET 8.0 CLR",
        environment: "Production-Simulated",
        timestamp: "2026-11-23T06:12:00Z",
        database: {
          provider: "Npgsql.EntityFrameworkCore.PostgreSQL",
          connection: "Connected",
          activePools: 4,
          latency: "2.1ms"
        },
        engineer: "Kawser Ahmed Ratul (Ratul)",
        institution: "Mymensingh Engineering College"
      },
      csharpSnippet: `[HttpGet("health")]
public IActionResult GetHealth()
{
    var telemetry = new
    {
        Status = "Healthy",
        Server = "Kestrel / .NET 8.0",
        Timestamp = DateTime.UtcNow,
        Database = _dbHealthService.CheckPostgreSql(),
        Engineer = "Kawser Ahmed Ratul"
    };
    return Ok(telemetry);
}`
    },
    {
      method: "GET",
      path: "/api/v1/projects/summary",
      title: "Fetch Projects Case Studies",
      description: "Queries the project repository with category filters and returns projected DTOs.",
      responseCode: 200,
      responseTimeMs: 14,
      responseBody: {
        totalProjects: 3,
        items: [
          {
            id: "dining-management-system",
            name: "Dining Management System",
            category: "Full-Stack Web App",
            liveUrl: "https://kawserahmedpro.github.io/meal_management_system/login",
            postUrl: "https://www.linkedin.com/posts/kawserahmedratulpro_introducing-my-project-dining-management-activity-7530198268576862208-j5w6",
            featuresCount: 9,
            status: "Active"
          },
          {
            id: "researchmate",
            name: "ResearchMate",
            category: "Academic Tool",
            liveUrl: "https://kawserahmedpro.github.io/ReasearchMate/",
            featuresCount: 6,
            status: "Active"
          },
          {
            id: "aspnet-backend-practice",
            name: "ASP.NET Core Web API Labs",
            category: "Backend Systems",
            framework: "ASP.NET Core 8",
            status: "Continuous Practice"
          }
        ]
      },
      csharpSnippet: `[HttpGet("projects/summary")]
[ProducesResponseType(typeof(ProjectSummaryDto), StatusCodes.Status200OK)]
public async Task<ActionResult<ProjectSummaryDto>> GetProjectsSummary()
{
    var query = await _projectRepository.GetActiveProjectsAsync();
    var dtoList = _mapper.Map<List<ProjectSummaryItemDto>>(query);
    return Ok(new ProjectSummaryDto { Total = dtoList.Count, Items = dtoList });
}`
    },
    {
      method: "GET",
      path: "/api/v1/research/papers?tag=ml",
      title: "Query Academic Literature Archive",
      description: "Searches the literature index by subject tag with pagination.",
      responseCode: 200,
      responseTimeMs: 19,
      responseBody: {
        queryTag: "ml",
        totalMatches: 2,
        results: [
          {
            code: "RES-2024-01",
            title: "Transformer Attention Mechanisms & Self-Attention",
            domain: "Machine Learning / NLP",
            status: "Reading Papers",
            notesCount: 14
          },
          {
            code: "RES-2024-02",
            title: "Retrieval-Augmented Generation (RAG) & Vector Spaces",
            domain: "AI Systems",
            status: "Prototyping",
            notesCount: 19
          }
        ]
      },
      csharpSnippet: `[HttpGet("research/papers")]
public async Task<IActionResult> GetPapers([FromQuery] string tag, [FromQuery] int page = 1)
{
    var papers = await _context.ResearchNotes
        .Where(p => p.Tags.Contains(tag.ToLower()))
        .Select(p => new PaperDto(p.Code, p.Title, p.Domain, p.Notes.Count))
        .ToListAsync();
    return Ok(new { QueryTag = tag, TotalMatches = papers.Count, Results = papers });
}`
    },
    {
      method: "POST",
      path: "/api/v1/contact/dispatch",
      title: "Dispatch Collaboration Ping",
      description: "Validates contact payload and simulates queuing an inquiry event.",
      responseCode: 202,
      responseTimeMs: 24,
      responseBody: {
        success: true,
        message: "Dispatch accepted into queue. Direct channel ready.",
        directEmail: "kawserahmedratul@gmail.com",
        linkedIn: "https://www.linkedin.com/in/kawserahmedratulpro/",
        facebook: "https://www.facebook.com/kawserahmedpro",
        github: "https://github.com/KawserAhmedpro",
        status: "Queued"
      },
      csharpSnippet: `[HttpPost("contact/dispatch")]
public async Task<IActionResult> DispatchContact([FromBody] ContactRequest request)
{
    if (!ModelState.IsValid) return BadRequest(ModelState);
    await _dispatchQueue.EnqueueAsync(request);
    return Accepted(new { Success = true, Message = "Inquiry logged." });
}`
    }
  ]
};
