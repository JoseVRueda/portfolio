export const profile = {
  name: "Jose Vicente Rueda Rueda",
  email: "josevruedar@gmail.com",
  phoneDisplay: "+57 314 505 8846",
  phoneHref: "tel:+573145058846",
  links: {
    linkedin: "https://www.linkedin.com/in/josevrueda/",
    github: "https://github.com/JoseVRueda",
  },
  location: {
    city: "Barranquilla",
    region: "Atlántico",
    country: "Colombia",
    countryCode: "CO",
  },
} as const;

export const experience = [
  {
    id: "indra",
    company: "Indra",
    start: "2026-04-01",
    end: "2026-08-01",
  },
  {
    id: "ombia",
    company: "Ombia",
    start: "2025-04-01",
    end: "2026-04-01",
  },
  {
    id: "transelca",
    company: "ISA Transelca",
    start: "2024-07-01",
    end: "2025-01-01",
  },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];

export const skillGroups = [
  {
    id: "frontend",
    items: ["React", "Next.js", "TypeScript", "MUI", "Shadcn", "Tailwind"],
  },
  {
    id: "backend",
    items: ["NestJS", "Node.js", "ASP.NET", "C#"],
  },
  {
    id: "testing",
    items: ["xUnit (.NET)", "Jest (JavaScript/React)"],
  },
  {
    id: "databases",
    items: ["PostgreSQL"],
  },
  {
    id: "tools",
    items: ["TanStack Query", "React Hook Form", "Yup", "Axios"],
  },
  {
    id: "orms",
    items: ["TypeORM", "Sequelize", "Entity Framework"],
  },
  {
    id: "other",
    items: ["Docker", "Git", "GitHub", "ArcGIS Pro", "REST APIs"],
  },
] as const;

export type SkillGroupId = (typeof skillGroups)[number]["id"];

export const projects = [
  {
    id: "secret-hitler",
    name: "Secret Hitler Online",
    repo: "https://github.com/JoseVRueda/secret-hitler-online",
    demo: "https://secret-hitler-online.up.railway.app",
    stack: ["Next.js", "Zustand", "Socket.IO", "Express", "XState", "TypeScript"],
  },
  {
    id: "your-qr-code",
    name: "your-qr-code",
    repo: "https://github.com/JoseVRueda/your-qr-code",
    demo: "https://your-qr-code.josevruedar.workers.dev/",
    stack: ["TypeScript"],
  },
] as const;

export type ProjectId = (typeof projects)[number]["id"];

export const education = {
  school: "Universidad del Norte",
  url: "https://www.uninorte.edu.co/",
  startYear: 2020,
  endYear: 2024,
} as const;

export const spokenLanguages = [
  { id: "spanish", code: "es" },
  { id: "english", code: "en" },
] as const;

export type SpokenLanguageId = (typeof spokenLanguages)[number]["id"];

export const certifications = [
  {
    id: "javascript",
    issuer: "Platzi",
    issued: "2025-03-01",
    url: "https://platzi.com/p/josevruedar/curso/10266-javascript/diploma/detalle/",
  },
  {
    id: "design-systems",
    issuer: "Platzi",
    issued: "2024-12-01",
    url: "https://platzi.com/p/josevruedar/curso/1420-sistemas-diseno/diploma/detalle/",
  },
  {
    id: "git",
    issuer: "Platzi",
    issued: "2024-12-01",
    url: "https://platzi.com/p/josevruedar/curso/1557-git-github/diploma/detalle/",
  },
] as const;

export type CertificationId = (typeof certifications)[number]["id"];
