import type { CertificationId, ExperienceId, ProjectId, SkillGroupId, SpokenLanguageId } from "../data/profile";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    jobTitle: string;
  };
  nav: {
    label: string;
    language: string;
    skip: string;
    openMenu: string;
    closeMenu: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    summary: string;
    email: string;
    linkedin: string;
    github: string;
    locationLabel: string;
    portrait: string;
  };
  about: {
    heading: string;
    paragraphs: [string, string];
  };
  experience: {
    heading: string;
    roles: Record<ExperienceId, { title: string; highlights: string[] }>;
  };
  skills: {
    heading: string;
    groups: Record<SkillGroupId, string>;
  };
  projects: {
    heading: string;
    demo: string;
    source: string;
    items: Record<ProjectId, string>;
  };
  education: {
    heading: string;
    degree: string;
    languagesHeading: string;
    certificationsHeading: string;
    viewCertificate: string;
    issued: string;
    languages: Record<SpokenLanguageId, { name: string; level: string }>;
    certifications: Record<CertificationId, string>;
  };
  contact: {
    heading: string;
    lead: string;
    email: string;
    phone: string;
  };
}

export const ui: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Jose Vicente Rueda Rueda — Fullstack Developer",
      description:
        "Fullstack developer in Barranquilla. React, Next.js, TypeScript, NestJS, and ASP.NET. Systems Engineering, Universidad del Norte.",
      jobTitle: "Fullstack Developer",
    },
    nav: {
      label: "Sections",
      language: "Language",
      skip: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      summary:
        "Fullstack developer building production web applications with React, Next.js, and TypeScript on the front end, and NestJS and ASP.NET on the back end.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      locationLabel: "Based in",
      portrait: "Portrait of Jose Vicente Rueda Rueda",
    },
    about: {
      heading: "About",
      paragraphs: [
        "Fullstack developer with 1+ year of experience building and maintaining modern web applications in production environments. Specialized in developing scalable frontend solutions with React, Next.js, and TypeScript, and robust backend services using NestJS and ASP.NET.",
        "Experienced in API design, state management, form handling, and database integration using PostgreSQL. Adept at working with modern development tools and frameworks, writing clean and maintainable code, and contributing to scalable software architectures.",
      ],
    },
    experience: {
      heading: "Experience",
      roles: {
        indra: {
          title: "Fullstack Developer",
          highlights: [
            "ArcGIS Pro add-ins in .NET and C# for enterprise GIS.",
            "Backend integrations and spatial data, built to scale.",
            "Debugging and steady improvement with agile teams.",
          ],
        },
        ombia: {
          title: "Fullstack Junior Developer",
          highlights: [
            "Fullstack apps with React, Next.js, and TypeScript.",
            "NestJS and ASP.NET APIs on PostgreSQL.",
            "Forms, validation, and faster data fetching.",
          ],
        },
        transelca: {
          title: "Information Management Intern",
          highlights: [
            "IT support and technical asset management.",
            "IoC monitoring and Python data automation.",
          ],
        },
      },
    },
    skills: {
      heading: "Skills",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        testing: "Testing",
        databases: "Databases",
        tools: "Tools & libraries",
        orms: "ORMs",
        other: "Other",
      },
    },
    projects: {
      heading: "Projects",
      demo: "Live demo",
      source: "Source",
      items: {
        "secret-hitler":
          "Browser game for 5–10 players. Real-time rooms for elections, voting, legislation, and executive powers.",
        "your-qr-code":
          "Free, privacy-friendly QR code generator that runs entirely in the browser. No accounts and no server: the data never leaves the device.",
      },
    },
    education: {
      heading: "Education",
      degree: "B.Sc. in Systems and Computer Engineering",
      languagesHeading: "Languages",
      certificationsHeading: "Certifications",
      viewCertificate: "View certificate",
      issued: "Issued",
      languages: {
        spanish: { name: "Spanish", level: "Native" },
        english: { name: "English", level: "C1 (Advanced)" },
      },
      certifications: {
        javascript: "JavaScript Fundamentals",
        "design-systems": "Effective Design Systems",
        git: "Professional Git and GitHub",
      },
    },
    contact: {
      heading: "Contact",
      lead: "Email is the most direct way to reach me. Phone, LinkedIn, and GitHub are here too.",
      email: "Email",
      phone: "Phone",
    },
  },
  es: {
    meta: {
      title: "Jose Vicente Rueda Rueda — Desarrollador fullstack",
      description:
        "Desarrollador fullstack en Barranquilla. React, Next.js, TypeScript, NestJS y ASP.NET. Ingeniería de Sistemas, Universidad del Norte.",
      jobTitle: "Desarrollador fullstack",
    },
    nav: {
      label: "Secciones",
      language: "Idioma",
      skip: "Saltar al contenido",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      about: "Perfil",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      summary:
        "Desarrollador fullstack de aplicaciones web en producción, con React, Next.js y TypeScript en el frontend, y NestJS y ASP.NET en el backend.",
      email: "Correo",
      linkedin: "LinkedIn",
      github: "GitHub",
      locationLabel: "Ubicación",
      portrait: "Retrato de Jose Vicente Rueda Rueda",
    },
    about: {
      heading: "Perfil",
      paragraphs: [
        "Desarrollador fullstack con más de un año de experiencia construyendo y manteniendo aplicaciones web modernas en producción. Especializado en interfaces escalables con React, Next.js y TypeScript, y en servicios de backend con NestJS y ASP.NET.",
        "Experiencia en diseño de APIs, manejo de estado, formularios e integración con PostgreSQL. Trabajo con herramientas y frameworks actuales, escribo código claro y mantenible, y contribuyo a arquitecturas de software escalables.",
      ],
    },
    experience: {
      heading: "Experiencia",
      roles: {
        indra: {
          title: "Desarrollador fullstack",
          highlights: [
            "Add-ins de ArcGIS Pro en .NET y C# para GIS empresarial.",
            "Integraciones de backend y datos espaciales, pensadas para escalar.",
            "Depuración y mejora continua en equipos ágiles.",
          ],
        },
        ombia: {
          title: "Desarrollador fullstack junior",
          highlights: [
            "Aplicaciones fullstack con React, Next.js y TypeScript.",
            "APIs en NestJS y ASP.NET sobre PostgreSQL.",
            "Formularios, validaciones y carga de datos más rápida.",
          ],
        },
        transelca: {
          title: "Practicante de gestión de la información",
          highlights: [
            "Soporte de TI y gestión de activos técnicos.",
            "Monitoreo de IoC y automatización de datos con Python.",
          ],
        },
      },
    },
    skills: {
      heading: "Habilidades",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        testing: "Pruebas",
        databases: "Bases de datos",
        tools: "Herramientas y librerías",
        orms: "ORMs",
        other: "Otros",
      },
    },
    projects: {
      heading: "Proyectos",
      demo: "Demo",
      source: "Código",
      items: {
        "secret-hitler":
          "Juego en el navegador para 5 a 10 jugadores. Salas en tiempo real para elecciones, votaciones, legislación y poderes ejecutivos.",
        "your-qr-code":
          "Generador de códigos QR gratuito y privado, que corre por completo en el navegador. Sin cuentas y sin servidor: los datos no salen del dispositivo.",
      },
    },
    education: {
      heading: "Formación",
      degree: "Ingeniería de Sistemas",
      languagesHeading: "Idiomas",
      certificationsHeading: "Certificados",
      viewCertificate: "Ver certificado",
      issued: "Expedido",
      languages: {
        spanish: { name: "Español", level: "Nativo" },
        english: { name: "Inglés", level: "C1 (avanzado)" },
      },
      certifications: {
        javascript: "Curso de Fundamentos de JavaScript",
        "design-systems": "Curso de Sistemas de Diseño Efectivos",
        git: "Curso Profesional de Git y GitHub",
      },
    },
    contact: {
      heading: "Contacto",
      lead: "El correo es la vía más directa. También dejo teléfono, LinkedIn y GitHub.",
      email: "Correo",
      phone: "Teléfono",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return ui[locale];
}
