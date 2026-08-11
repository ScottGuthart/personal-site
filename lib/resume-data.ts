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
      "Independently architect, build, and self-host full-stack AI applications end to end — React, Next.js, Tailwind, and shadcn on a Supabase (PostgreSQL) backend, deployed on AWS EC2 — for client teams serving Fortune 100 companies such as Samsung, Johnson & Johnson, and CVS.",
      "Built an automated media-monitoring pipeline that scrapes top-tier outlets like The New York Times and The Wall Street Journal and uses LLMs with structured output to classify coverage and model topics, with human-in-the-loop review so strategists can validate and refine results.",
      "Partner directly with internal teams to gather feedback and iterate quickly, developing AI-natively with tools like Cursor and Claude to ship and refine features rapidly.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Radius",
    companyUrl: "https://radiusinsights.com/services-solutions/data-science",
    period: "July 2022 – August 2024",
    location: "New York, NY",
    bullets: [
      "Founded and led the company's first software engineering team, hiring, mentoring, and establishing the engineering practices and architecture used to scale solutions across the organization.",
      "Built a full-stack application (Python, React) integrating OpenAI's LLM to automate coding of thousands of open-ended survey responses, with analysts reviewing outputs in a human-in-the-loop workflow.",
      "Shipped a statistical-toolkit app deployed on Linux via a REST API, improving a five-person analytics team's efficiency by 20%.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Radius",
    companyUrl: "https://radiusinsights.com/services-solutions/data-science",
    period: "November 2020 – July 2022",
    location: "New York, NY",
    bullets: [
      "Built and deployed a market-simulation app — still in use by clients such as CVS, Johnson & Johnson, Procter & Gamble, and L'Oréal — on a Linux cloud server.",
      "Replaced an Excel-based system with a custom project-management app for 200+ projects, featuring Salesforce integration, automated reporting, and change tracking (MySQL backend).",
    ],
  },
  {
    role: "Statistical Analyst",
    company: "Radius",
    companyUrl: "https://radiusinsights.com/services-solutions/data-science",
    period: "June 2019 – November 2020",
    location: "Greater New York City Area",
    bullets: [
      "Automated multivariate statistical techniques in Python (NumPy, scikit-learn), improving analyst efficiency by 15%.",
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
    "Full-stack software engineer with a backend focus, independently architecting and self-hosting AI-driven applications end to end — from Postgres data models to production infrastructure — for Fortune 100 companies including CVS, Johnson & Johnson, Procter & Gamble, and L'Oréal.",
  skills: [
    "Full-Stack (Next.js, React, Tailwind, shadcn)",
    "Backend & Infra (Supabase / PostgreSQL, AWS EC2)",
    "AI Workflows & Human-in-the-Loop Systems",
    "AI-Native Development (Cursor / Claude)",
  ],
}
