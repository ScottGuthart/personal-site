export type Experience = {
  role: string
  company: string
  period: string
  location?: string
  bullets?: string[]
}

export const experience: Experience[] = [
  {
    role: "AI Full Stack Engineer",
    company: "Edelman",
    period: "April 2025 – Present",
    location: "New York, NY",
    bullets: [
      "Independently design, build, and ship AI-enabled internal applications in a fast-paced environment, streamlining workflows for client teams serving Fortune 100 companies such as Samsung, Johnson & Johnson, and CVS.",
      "Created a media monitoring platform that automatically scrapes top-tier outlets like The New York Times and The Wall Street Journal, then classifies coverage with sentiment analysis and topic modeling to surface shifts in public opinion.",
      "Automated the generation of periodic reports for account teams, replacing manual media review and giving PR strategists faster, data-driven insight into their clients' media landscape.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Radius",
    period: "July 2022 – August 2024",
    location: "New York, NY",
    bullets: [
      "Developed a full-stack application using Python, React, JavaScript, HTML, and CSS, integrating OpenAI's large language model (LLM) to automate the coding of thousands of open-ended text responses.",
      "Founded and led the company's first-ever software engineering team after earning leadership recognition, hiring and mentoring a developer to scale innovative solutions across the organization.",
      "Led the development of a statistical toolkit application using Python and React.js. The app was deployed on a Linux virtual machine via a REST API and improved the efficiency of a five-person Advanced Analytics team by 20%.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Radius",
    period: "November 2020 – July 2022",
    location: "New York, NY",
    bullets: [
      "Developed a market simulation app still in use for clients such as CVS, Johnson & Johnson, Procter & Gamble, Progressive, and L'Oréal.",
      "Built a custom project management app for 200+ projects with change tracking, Salesforce integration, automated notifications, reporting, time-off tracking, and Gantt charts, replacing an Excel-based system; deployed on a Linux cloud server using MySQL.",
    ],
  },
  {
    role: "Statistical Analyst",
    company: "Radius",
    period: "June 2019 – November 2020",
    location: "Greater New York City Area",
    bullets: [
      "Developed Python scripts leveraging libraries like NumPy, Scikit-learn, and Matplotlib to automate multivariate techniques, including latent class regression, segmentation, perceptual mapping, and max-diff analysis. This enhanced the efficiency of Statistical Analysts by 15%.",
      "Performed choice modeling: CBC, Adaptive CBC, Menu-Based CBC from design to simulation.",
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
  summary:
    "Software engineer with full-stack, AI/LLMs, and data science experience, delivering solutions for Fortune 100 companies including CVS, Johnson & Johnson, Procter & Gamble, Progressive, and L'Oréal.",
  skills: [
    "AI Application Development",
    "NLP (Sentiment Analysis & Topic Modeling)",
    "Automated Media Monitoring & Web Scraping",
  ],
}
