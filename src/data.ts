export const profile = {
  name: 'Mukul Pandey',
  headline: 'Full Stack Developer | Building Scalable Applications with React, Vue, Java & Quarkus',
  location: 'Pune, India',
  experience: '2 years',
  email: 'mukulpandey2866@gmail.com',
  github: 'https://github.com/mukulpandey2866',
  linkedin: 'https://linkedin.com/in/mukul-pandey-274839210',
  leetcode: 'https://leetcode.com/u/mukul_pandey/',
  resumeUrl: '/mukul-pandey-resume.pdf',
  intro: "I'm a Full Stack Developer passionate about building scalable, reliable, and user-friendly applications. I work with technologies like Java, Quarkus, React, Vue and SQL to turn complex problems into practical solutions. With a background in machine learning and a strong interest in AI, I'm exploring ways to build smarter, AI-powered applications. I enjoy learning new technologies, solving challenging problems, and turning ideas into impactful products.",
}

export const skills = [
  { title: 'Java backend', note: 'Languages, frameworks & APIs', items: ['Java', 'Quarkus', 'Spring Boot', 'REST API development', 'JWT authentication'] },
  { title: 'Persistence', note: 'ORM & relational data', items: ['Hibernate ORM', 'JPA / ORM concepts', 'PostgreSQL', 'MySQL', 'SQL', 'Relational data modelling'] },
  { title: 'Frontend', note: 'Interfaces & application frameworks', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular'] },
  { title: 'Engineering & testing', note: 'Delivery, quality & operations', items: ['Git', 'Docker', 'CI/CD', 'OpenShift', 'JUnit', 'Mockito', 'Playwright', 'Postman', 'Docker-based integration testing'] },
  { title: 'Machine learning', note: 'Explored through learning and projects', items: ['Python', 'NumPy', 'pandas', 'scikit-learn', 'K-nearest neighbors (KNN)', 'Support Vector Machines (SVM)', 'Logistic regression', 'Clustering', 'Random forests', 'Parameter tuning', 'Machine learning fundamentals', 'Types of learning', 'Tensor-based concepts', 'EfficientNet-B0 and other explored models'] },
]

export type WorkProject = {
  name: string
  description: string
  components?: { name: string; description: string }[]
}

export const experience = {
  role: 'Software Engineer',
  duration: '2 years',
  employer: 'Volkswagen Group Digital Solutions India (VWGDS)',
  dates: 'October 3, 2024 – Present',
  contributions: [
    'Full-stack Java development using MVC architecture.',
    'Implemented lazy loading for application data.',
    'Developed an API Helper tool for API discovery.',
    'Onboarded multiple projects into a centralized Project Filter service.',
    'Contributed to an export service and participated in peer code reviews.',
  ],
  projects: [
    {
      name: 'Jira Services',
      description: 'Three parts that together make up the Jira services project.',
      components: [
        { name: 'Jira Data', description: 'Serves Jira data through APIs.' },
        { name: 'Jira Filter', description: 'Onboarded onto the Ticket Filter Service.' },
        { name: 'Jira Ingest', description: 'A cron job that fetches Jira data into the data warehouse. I also built a cron job that periodically removes orphan tickets.' },
      ],
    },
    {
      name: 'KPM Services',
      description: 'A larger application along the lines of KPMS Feld/NP, made up of two parts.',
      components: [
        { name: 'KPM Filter', description: 'Onboarded onto the Ticket Filter Service.' },
        { name: 'KPM Data Service', description: 'Supplies the data for problem numbers on the Ticket Filter Service through data APIs.' },
      ],
    },
    {
      name: 'KPMS Halle Services',
      description: 'Follows the same structure as KPM Services.',
      components: [
        { name: 'KPMS Halle Filter', description: 'Onboarded onto the Ticket Filter Service.' },
        { name: 'KPMS Halle Data Service', description: 'Supplies data on the Ticket Filter Service through data APIs.' },
      ],
    },
    {
      name: 'KPMS Feld/NP Services',
      description: 'Follows the same structure as KPM Services.',
      components: [
        { name: 'KPMS Feld/NP Filter', description: 'Onboarded onto the Ticket Filter Service.' },
        { name: 'KPMS Feld/NP Data Service', description: 'Supplies data on the Ticket Filter Service through data APIs.' },
      ],
    },
    { name: 'Ticket Filter Service', description: 'Frontend and backend service onto which the KPM, KPMS Halle, KPMS Feld/NP and Jira filters are onboarded. Part of the FAP data warehouse project, giving users easy access to data through these filters. I implemented random-access lazy loading here.' },
    { name: 'Export Service', description: 'Users select columns from a list and request an export through REST APIs; a background job processes the request and the finished file can be downloaded. I built the REST APIs and the UI.' },
    { name: 'Image Service', description: 'Fetches images, compresses them, stores them in an Amazon S3 bucket, and returns a link for viewing and download.' },
    { name: 'Helm Charts for Environment Controls', description: 'Helm charts used to manage environment-specific configuration.' },
  ] as WorkProject[],
}

export type PriorExperience = {
  role: string
  organization: string
  duration: string
  location: string
  certificateUrl: string
}

export const priorExperience: PriorExperience[] = [
  { role: 'Campus Ambassador', organization: 'Wayspire', duration: 'February 2024 – April 2024', location: 'Prayagraj, India', certificateUrl: 'https://drive.google.com/file/d/1UQmnp3cP3BLVKPa6Y03E7N6JHYszYiwM/view' },
  { role: 'Flutter UI Intern', organization: 'Grinler', duration: 'April 2023 – June 2023', location: 'Prayagraj, India', certificateUrl: 'https://drive.google.com/file/d/1_rIEYl9Ot_0Zj8vIjdGLPjrEA64lZWc8/view' },
  { role: 'Event Manager', organization: 'TFUG Prayagraj', duration: 'February 2023 – July 2023', location: 'Prayagraj, India', certificateUrl: 'https://certificate.givemycertificate.com/c/d262a8b0-987b-4fc7-8014-638f1dcf7ffb' },
]

export type ProjectLink = { label: string; href: string }

export type Project = {
  id: string
  number: string
  name: string
  kind: string
  status: string
  description: string
  problem?: string
  contribution?: string[]
  stack: string[]
  links?: ProjectLink[]
  preview?: string[]
}

export const projects: Project[] = [
  {
    id: 'api-helper',
    number: '01',
    name: 'API Helper',
    kind: 'Internal project · Public summary only',
    status: 'Developed',
    description: 'An API discovery tool that uses Swagger/OpenAPI schemas to help developers find field and column names, map matches to endpoints, and jump to relevant API documentation.',
    problem: 'Finding the right API endpoint and its relevant fields across API definitions can slow down exploration.',
    contribution: ['Search across API schemas for field and column names.', 'Map matching fields to their associated endpoints.', 'Navigate directly to relevant API documentation.', 'Integrated identity using Keycloak and OpenID Connect (OIDC).'],
    stack: ['React', 'JavaScript', 'Keycloak', 'OpenID Connect (OIDC)'],
  },
  {
    id: 'kpms',
    number: '02',
    name: 'KPMS Feld/NP Filter & Data Services',
    kind: 'Internal project · Public summary only',
    status: 'Developed & maintained',
    description: 'Data retrieval, field-level processing, and filtering functionality, later onboarded into the centralized Project Filter service to consolidate capabilities and improve integration and maintainability.',
    problem: 'Users need to retrieve relevant enterprise records based on selected criteria.',
    contribution: ['Implemented filtering capabilities and field-level processing.', 'Contributed across backend and frontend integration.', 'Onboarded multiple project capabilities into a centralized Project Filter service.'],
    stack: ['Quarkus', 'MySQL', 'Vue.js', 'JavaScript'],
  },
  {
    id: 'devtrack',
    number: '03',
    name: 'DevTrack',
    kind: 'Personal project · Issue & project management platform',
    status: 'Deployed',
    description: 'A full-stack issue and project management platform for organizing projects, tracking issues, and collaborating through comments. It pairs a React and TypeScript frontend with a Java Spring Boot REST API and a PostgreSQL database hosted on Neon, with the frontend and backend deployed independently.',
    problem: 'Teams need one place to organize projects, track issues, and discuss work without scattering context across tools.',
    contribution: ['User authentication with login and registration.', 'Project and issue management through a React and TypeScript interface.', 'Issue tracking with comment-based collaboration.', 'Spring Boot REST API with Spring Data JPA and Hibernate, documented with Swagger UI.', 'PostgreSQL on Neon, with independent frontend and backend deployments.'],
    stack: ['React', 'TypeScript', 'Vite', 'Axios', 'React Router', 'Java 21', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST API', 'PostgreSQL', 'Neon'],
    links: [
      { label: 'Frontend (live demo)', href: 'https://devtrack-frontend-omega.vercel.app/login' },
      { label: 'Backend (Swagger API docs)', href: 'https://devtrack-backend-qm3r.onrender.com' },
    ],
    preview: ['$ devtrack --status', 'frontend  react + typescript   vercel', 'backend   spring boot (java 21) render', 'database  postgresql           neon', 'status    deployed'],
  },
  {
    id: 'plant-disease-detection',
    number: '04',
    name: 'Deep Learning based Disease Detection System for Plants',
    kind: 'College project · Jan 2024 – Jun 2024',
    status: 'Completed',
    description: 'A deep learning system for detecting plant diseases, built with a CNN and EfficientNetB0 and tuned through parameter tuning.',
    contribution: ['Reported accuracy: 99.86%.'],
    stack: ['Python', 'Streamlit', 'CNN', 'EfficientNetB0', 'Parameter tuning'],
    links: [{ label: 'Google Colab notebook', href: 'https://drive.google.com/file/d/1ydD2Ks--TII4MKyUCpvdDUix55JOpqVp/view?usp=drive_link' }],
  },
  {
    id: 'cancer-house-price-prediction',
    number: '05',
    name: 'Cancer Cell Type Prediction & House Price Prediction',
    kind: 'College project · 2022 – 2024',
    status: 'Completed',
    description: 'Two machine learning prediction projects: cancer cell type prediction and house price prediction.',
    contribution: ['Reported accuracy: 99% and 100%.'],
    stack: ['Python', 'Logistic Regression', 'Support Vector Machine'],
    links: [{ label: 'Colab notebook', href: 'https://colab.research.google.com/drive/1qGz2DhpJcD8dsy4SQhGjq0yi7n7X-AQN' }],
  },
  {
    id: 'antardarshnam',
    number: '06',
    name: 'Antardarshnam',
    kind: 'College project · Sep 2021 – Jan 2022 · Smart India Hackathon 2022',
    status: 'Completed',
    description: 'A website with a large collection of resources such as books, games and videos for self-awareness.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'Django'],
  },
]

export const education = [
  { degree: 'Bachelor of Technology (B.Tech.)', institution: 'IERT Prayagraj', detail: 'Graduated 2024' },
  { degree: 'Master of Business Administration (MBA)', institution: 'IGNOU', detail: 'Pursuing · Fourth semester · Completion by 2026' },
]

export type Credential = {
  name: string
  issuer?: string
  issueDate?: string
  expiryDate?: string
  verificationUrl?: string
  badgeImage?: string
}

// Only add fields (issuer, dates) that are confirmed by the source.
export const certifications: Credential[] = [
  { name: 'AWS Certified in Blu Age L2 Certification', verificationUrl: 'https://drive.google.com/file/d/1Rh3ICUqMXWlc_rt6GHbsdwnol-H8sUW3/view' },
  { name: 'Google Cloud Certified Professional Data Engineer', verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/87Q7UY4V4NYV' },
  { name: 'NASSCOM Certified in Fundamentals of Digital Marketing Using Social Media Platforms', verificationUrl: 'https://drive.google.com/file/d/1-5J8Cz32wQ6X-ecieNNL3S1K_avG_OFI/view' },
]

export type Achievement = {
  title: string
  results?: string[]
  evidenceUrl: string
}

export const achievements: Achievement[] = [
  { title: 'Winner — NOVATHON 2022', evidenceUrl: 'https://drive.google.com/file/d/1IdctXVUk422iDy05ZkkKrC-KWIOlors4/view' },
  { title: 'GATE 2024', results: ['Data Science and Artificial Intelligence (DA) — Rank 5322', 'Computer Science and Information Technology (CS/IT) — Rank 10246'], evidenceUrl: 'https://drive.google.com/file/d/1a3dgsItWo2omNc8EKGDVelr_ZGoYEn0-/view' },
  { title: 'Google ML Bootcamp India', evidenceUrl: 'https://drive.google.com/file/d/16zuGEn-53y4HBx7IUXabhr5e42PzYz7E/view' },
  { title: 'Grand Finalist — Smart India Hackathon 2022', evidenceUrl: 'https://drive.google.com/file/d/1jTmHpHtKB23AjQhp8mrmFGeTmKSDL-ya/view' },
  { title: 'Top 10 Finalist — HackCBS 5.0', evidenceUrl: 'https://drive.google.com/file/d/12KT1L6fhnE2kqpO6JsBxHYtLMmMfRMkZ/view' },
]

export const commands = [
  'help', 'whoami', 'about', 'skills', 'experience', 'projects',
  'projects api-helper', 'projects kpms', 'projects devtrack',
  'projects plant-disease-detection', 'projects cancer-house-price-prediction', 'projects antardarshnam',
  'ai-journey', 'education', 'certifications', 'achievements', 'resume', 'contact', 'clear',
]