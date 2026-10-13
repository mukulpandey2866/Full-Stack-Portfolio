export const profile = {
  name: 'Mukul Pandey',
  headline: 'Full Stack Developer | Building Scalable Applications with React, Vue, Java & Quarkus',
  location: 'Pune, India',
  experience: '2 years',
  email: 'mukulpandey2866@gmail.com',
  github: 'https://github.com/mukulpandey2866',
  linkedin: 'https://linkedin.com/in/mukul-pandey-274839210',
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

export const experience = {
  role: 'Software Engineer Trainee',
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
}

export type ProjectLink = { label: string; href: string }

export type Project = {
  id: string
  number: string
  name: string
  kind: string
  status: string
  description: string
  problem: string
  contribution: string[]
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
]

export const education = [
  { degree: 'Bachelor of Technology (B.Tech.)', institution: 'IERT Prayagraj', detail: 'Graduated 2024' },
  { degree: 'Master of Business Administration (MBA)', institution: 'IGNOU', detail: 'Pursuing · Fourth semester' },
]

export type Credential = {
  name: string
  issuer?: string
  issueDate?: string
  expiryDate?: string
  verificationUrl?: string
  badgeImage?: string
}

// Add verified credentials here; incomplete entries should remain unpublished.
export const certifications: Credential[] = []

export const commands = [
  'help', 'whoami', 'about', 'skills', 'experience', 'projects',
  'projects api-helper', 'projects kpms', 'projects devtrack',
  'ai-journey', 'education', 'certifications', 'resume', 'contact', 'clear',
]