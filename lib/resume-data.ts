export type Experience = {
  role: string
  company: string
  companyUrl?: string
  period: string
  location?: string
  bullets?: string[]
}

export const experience: Experience[] = [
  {
    role: "AI Full Stack Engineer",
    company: "Edelman",
    companyUrl: "https://www.edelman.com/expertise/ai",
    period: "April 2025 – Present",
    location: "New York, NY",
    bullets: [
      "Independently architect, build, and support production AI applications end to end as the sole engineer — Python/FastAPI REST services and a Supabase (PostgreSQL) backend behind a React, Next.js, Tailwind, and shadcn frontend, containerized with Docker and deployed on AWS EC2 — for client teams serving Fortune 100 companies such as Samsung, Johnson & Johnson, and CVS.",
      "Built an automated media-monitoring pipeline in Python (FastAPI, pandas) that scrapes top-tier outlets like The New York Times and The Wall Street Journal and uses OpenAI and Anthropic (Claude) models with structured output to classify coverage and model topics, with human-in-the-loop review so strategists can validate and refine results.",
      "Design multi-step LLM agent workflows with LangChain and LangGraph, and run large-scale data processing and analysis in Databricks to power client insights.",
      "Own deliverables from requirements through release: partner directly with strategists and client teams to gather feedback, communicate trade-offs, and iterate quickly, developing AI-natively with tools like Cursor and Claude to ship and refine features rapidly.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Radius",
    companyUrl: "https://radiusinsights.com/services-solutions/data-science",
    period: "July 2022 – August 2024",
    location: "New York, NY",
    bullets: [
      "Founded and led the company's first software engineering team, hiring, mentoring, and establishing the engineering practices — Git workflows, Docker-based environments, and CI/CD with GitHub Actions — and architecture used to scale solutions across the organization.",
      "Built a full-stack application (Python/Flask, pandas, React) integrating OpenAI's LLM to automate coding of thousands of open-ended survey responses, with analysts reviewing outputs in a human-in-the-loop workflow.",
      "Shipped and supported a production statistical-toolkit app — a Flask REST API processing large survey datasets with pandas and SQL, deployed on Linux — improving a five-person analytics team's efficiency by 20%.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Radius",
    companyUrl: "https://radiusinsights.com/services-solutions/data-science",
    period: "November 2020 – July 2022",
    location: "New York, NY",
    bullets: [
      "Built and deployed a data-heavy market-simulation app (Python/Flask, pandas) — still in use by clients such as CVS, Johnson & Johnson, Procter & Gamble, and L'Oréal — on a Linux cloud server.",
      "Replaced an Excel-based system with a custom project-management app for 200+ projects, featuring Salesforce integration, automated reporting, and change tracking (Flask, MySQL backend).",
    ],
  },
  {
    role: "Statistical Analyst",
    company: "Radius",
    companyUrl: "https://radiusinsights.com/services-solutions/data-science",
    period: "June 2019 – November 2020",
    location: "Greater New York City Area",
    bullets: [
      "Began building data-heavy Python applications, automating multivariate statistical techniques with pandas, NumPy, and scikit-learn and exposing them through internal Flask tools, improving analyst efficiency by 15%.",
    ],
  },
]

export type EarlierRole = {
  role: string
  detail: string
  period: string
}

export const earlierRoles: EarlierRole[] = [
  {
    role: "Physical Therapist, Per Diem",
    detail: "John T. Mather Memorial Hospital, Port Jefferson, NY",
    period: "June 2017 – August 2018",
  },
  {
    role: "Physical Therapy Aide",
    detail: "John T. Mather Memorial Hospital, Port Jefferson, NY",
    period: "December 2013 – June 2017",
  },
  {
    role: "Research and Wellness Intern",
    detail: "RRAMP Lab, Stony Brook, NY · Healthcare research and community education",
    period: "January – March 2017",
  },
  {
    role: "Clinical Intern",
    detail: "Keep Moving Forward Inc., Garden City, NY · Outpatient pediatric neurology",
    period: "June – August 2016",
  },
  {
    role: "Claims Manager / Adjuster",
    detail: "Tokio Marine America · Medical and disability workers' compensation case management",
    period: "2011 – 2012",
  },
]

export type Education = {
  school: string
  degree: string
  period: string
}

export const education: Education[] = [
  {
    school: "Stony Brook University",
    degree: "Doctor of Physical Therapy — DPT, Physical Therapy/Therapist",
    period: "2014 – 2017",
  },
  {
    school: "Saint John's University — Peter J. Tobin College of Business",
    degree: "Bachelor of Science — BS, Business: Risk Management and Insurance",
    period: "2007 – 2010",
  },
]

export const featuredProject = {
  name: "MovieTable",
  appUrl: "https://movietable.ai",
  sourceUrl: "https://github.com/ScottGuthart/movietable",
  description:
    "Public full-stack movie discovery app combining critic and user ratings with AI-powered recommendations and weighted scoring.",
  stack:
    "Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, ReUI, TanStack Table, Supabase/PostgreSQL; Dockerized and self-hosted on a DigitalOcean Ubuntu VM with Coolify (PaaS) for git-push CI/CD and Cloudflare DNS",
}

export const publications: string[] = [
  "Augmented mindfulness intervention for overweight / obese children and adolescents",
  "Clustering of Clusters in Ensemble Segmentation: Which Technique Works Best?",
  "Feasibility of an Interdisciplinary Family-Centered Adolescent/Young Adult Obesity Intervention",
  "Novel Biopsychosocial Osteoarthritis Intervention: Case Study",
]

export const contact = {
  name: "Scott Guthart",
  title: "Software Engineer — Full-Stack, AI/LLMs, Data Science",
  location: "New York, New York, United States",
  phone: "516 474 6714",
  email: "scott@guth.art",
  linkedin: "linkedin.com/in/scottguthart",
  github: "github.com/ScottGuthart",
  scheduler: "calendar.app.google/P2didUYLNea2NPRG9",
  summary:
    "Backend-focused software engineer with 7 years building data-heavy Python applications — Flask and pandas since 2019, FastAPI since 2025 — who works independently and owns deliverables end to end: architecting AI-powered systems with OpenAI, Anthropic, LangChain, and LangGraph, from Postgres data models and REST APIs to Docker, CI/CD, and production infrastructure, for Fortune 100 companies including CVS, Johnson & Johnson, Procter & Gamble, and L'Oréal.",
  skills: [
    "Python Backend (FastAPI, Flask, REST APIs, pandas, NumPy)",
    "SQL & Data (PostgreSQL / Supabase, MySQL, Databricks)",
    "AI Applications (OpenAI, Anthropic APIs, LangChain, LangGraph)",
    "Cloud, CI/CD & DevOps (AWS EC2, Docker, GitHub Actions, Linux)",
    "Full-Stack (Next.js, React, TypeScript)",
    "AI-Native Development (Cursor / Claude)",
  ],
}
