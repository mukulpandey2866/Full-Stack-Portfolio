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

export const projects = [
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
    id: 'elite-stays',
    number: '03',
    name: 'Elite Stays Hotels',
    kind: 'Freelance · Full-stack development',
    status: 'In progress',
    description: 'Developing a full-stack hotel booking application with a React frontend, Spring Boot backend APIs, and a PostgreSQL database. The project involves frontend development, API implementation, and database integration to support a hotel booking system.',
    problem: 'A full-stack hotel booking application is in development; specific functionality is not yet published.',
    contribution: ['React frontend development.', 'Spring Boot backend API implementation.', 'PostgreSQL database integration.'],
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
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
  'projects api-helper', 'projects kpms', 'projects elite-stays',
  'ai-journey', 'education', 'certifications', 'resume', 'contact', 'clear',
]