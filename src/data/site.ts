import type { FeatureIconKind } from "../utils/helpers";

export type ContactInfo = {
  email: string;
  phone: string;
  office: string;
  hours: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type CompanyValue = {
  title: string;
  description: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  highlights: string[];
  panelItems: {
    label: string;
    text: string;
  }[];
  bottomItems: {
    label: string;
    text: string;
  }[];
};

export type SiteConfig = {
  name: string;
  brand: string;
  slogan: string;
  shortDescription: string;
  domain: string;
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
  contact: ContactInfo;
  social: SocialLink[];
  values: CompanyValue[];
};

export type HomeContent = {
  hero: HeroContent;
  presentation: {
    title: string;
    text: string;
  };
  workAreas: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: FeatureIconKind;
    }[];
  };
  servicesPreview: {
    eyebrow: string;
    title: string;
    description: string;
  };
  highlights: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      icon: FeatureIconKind;
    }[];
  };
  clients: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projectsPreview: {
    eyebrow: string;
    title: string;
    description: string;
  };
  capabilities: {
    value: string;
    label: string;
  }[];
  cta: {
    title: string;
    description: string;
    cta: CallToAction;
  };
};

export type PageContent = {
  title: string;
  description: string;
  eyebrow: string;
};

export const siteConfig: SiteConfig = {
  name: "FOS Ecuador S.A.",
  brand: "Fibra Optica y Sistemas",
  slogan:
    "Soluciones de ingenieria para infraestructura, conectividad y continuidad operativa.",
  shortDescription:
    "FOS Ecuador S.A. acompana proyectos que necesitan conectividad, energia e infraestructura tecnica con una ejecucion responsable, criterio profesional y capacidad de respuesta en campo.",
  domain: "https://fos-pages.pages.dev",
  seo: {
    defaultTitle: "FOS Ecuador S.A. | Fibra Optica y Sistemas",
    defaultDescription:
      "Empresa ecuatoriana especializada en telecomunicaciones, fibra optica, infraestructura tecnologica, ingenieria electrica, automatizacion, instrumentacion y mantenimiento tecnico.",
    ogImage: "/images/og-fos.svg",
  },
  contact: {
    email: "contacto@empresa.com",
    phone: "+593 00 000 0000",
    office: "Ecuador",
    hours: "Lunes a viernes, 08:30 - 17:30",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  values: [
    {
      title: "Honestidad",
      description:
        "Actuamos con transparencia en cada propuesta, relacion y compromiso tecnico.",
    },
    {
      title: "Responsabilidad",
      description:
        "Cumplimos los alcances de trabajo con seriedad, orden operativo y atencion al detalle.",
    },
    {
      title: "Seguridad",
      description:
        "Priorizamos practicas seguras para proteger a las personas, los equipos y la continuidad de la operacion.",
    },
    {
      title: "Competitividad",
      description:
        "Aportamos soluciones tecnicas eficientes que combinan calidad, experiencia y capacidad de ejecucion.",
    },
    {
      title: "Trabajo en equipo",
      description:
        "Integramos conocimiento tecnico y coordinacion operativa para responder mejor a cada proyecto.",
    },
  ],
};

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "Ingenieria aplicada para proyectos que no pueden detenerse",
    title: "Infraestructura, conectividad y soporte tecnico para proyectos que exigen confianza",
    description:
      "En FOS Ecuador S.A. reunimos telecomunicaciones, fibra optica, redes, ingenieria electrica, automatizacion y mantenimiento tecnico para resolver necesidades reales con orden, seguridad y capacidad operativa.",
    primaryCta: {
      label: "Conoce lo que hacemos",
      href: "/servicios",
    },
    secondaryCta: {
      label: "Hablemos de tu proyecto",
      href: "/contacto",
    },
    highlights: [
      "Conectividad e infraestructura tecnica en una sola empresa",
      "Capacidad para obra, implementacion y mantenimiento",
      "Respuesta profesional para entornos institucionales, industriales y comerciales",
    ],
    panelItems: [
      {
        label: "Cobertura tecnica",
        text: "Telecomunicaciones, energia, automatizacion e infraestructura",
      },
      {
        label: "Como trabajamos",
        text: "Planeacion clara, ejecucion responsable y acompanamiento tecnico",
      },
    ],
    bottomItems: [
      {
        label: "Propuesta",
        text: "Una sola empresa para coordinar especialidades tecnicas que suelen manejarse por separado.",
      },
      {
        label: "Sectores",
        text: "Experiencia en proyectos institucionales, industriales, comerciales y de servicios.",
      },
      {
        label: "Experiencia",
        text: "Trayectoria comprobada en comunicaciones, redes electricas e infraestructura operativa.",
      },
    ],
  },
  presentation: {
    title: "Una empresa tecnica pensada para resolver proyectos completos",
    text: "FOS Ecuador S.A. integra conectividad, energia e infraestructura tecnica para que cada proyecto avance con mayor coordinacion y menos friccion. Nuestro equipo combina experiencia de campo, criterio profesional y enfoque en resultados para acompanar implementaciones, mejoras y mantenimiento especializado.",
  },
  workAreas: {
    title: "Especialidades clave",
    description:
      "Estas son las areas en las que FOS aporta mayor valor cuando un proyecto necesita ejecucion tecnica confiable y capacidad de respuesta.",
    items: [
      {
        title: "Telecomunicaciones",
        description:
          "Implementacion y soporte de soluciones de comunicacion para operaciones que requieren continuidad.",
        icon: "telecom",
      },
      {
        title: "Fibra optica",
        description:
          "Despliegue de enlaces y redes con foco en calidad de instalacion y estabilidad operativa.",
        icon: "fiber",
      },
      {
        title: "Redes e infraestructura tecnologica",
        description:
          "Conectividad, cableado y ordenamiento tecnico para entornos corporativos e institucionales.",
        icon: "network",
      },
      {
        title: "Ingenieria electrica",
        description:
          "Soporte electrico para proyectos industriales, comerciales e institucionales.",
        icon: "maintenance",
      },
      {
        title: "Automatizacion e instrumentacion",
        description:
          "Apoyo tecnico para integrar control, medicion y soluciones orientadas a una operacion mas eficiente.",
        icon: "infrastructure",
      },
      {
        title: "Mantenimiento tecnico",
        description:
          "Mantenimiento preventivo y correctivo para proteger la continuidad de la operacion.",
        icon: "support",
      },
    ],
  },
  servicesPreview: {
    eyebrow: "Categorias de servicio",
    title: "Servicios organizados para entender rapido donde podemos ayudarte",
    description:
      "Agrupamos nuestras capacidades por categoria para que identifiques con claridad el tipo de apoyo tecnico que tu proyecto necesita.",
  },
  highlights: {
    eyebrow: "Fortalezas de FOS",
    title: "Tres razones por las que las empresas confian en FOS",
    description:
      "Nuestra propuesta combina experiencia real, capacidad operativa y una forma de trabajo enfocada en cumplir con criterio tecnico.",
    items: [
      {
        title: "Capacidad para integrar conectividad, energia e infraestructura en una sola solucion",
        icon: "projects",
      },
      {
        title: "Equipo preparado para implementar, mantener y dar soporte tecnico en campo",
        icon: "maintenance",
      },
      {
        title: "Ejecucion responsable, segura y orientada a la continuidad del cliente",
        icon: "infrastructure",
      },
    ],
  },
  clients: {
    eyebrow: "Clientes institucionales",
    title: "Organizaciones que han confiado en nuestro trabajo",
    description:
      "Nuestra experiencia incluye colaboraciones con entidades publicas, companias nacionales y clientes del sector productivo y comercial.",
  },
  projectsPreview: {
    eyebrow: "Proyectos relevantes",
    title: "Experiencia real en proyectos que exigen ejecucion y criterio tecnico",
    description:
      "Esta seleccion resume parte de la trayectoria de FOS en comunicaciones, energia e infraestructura para distintos tipos de cliente.",
  },
  capabilities: [
    {
      value: "2009+",
      label: "experiencia documentada en proyectos y servicios tecnicos",
    },
    {
      value: "06",
      label: "clientes institucionales y corporativos de referencia",
    },
    {
      value: "Multisector",
      label: "capacidad para intervenir en telecom, energia e infraestructura",
    },
    {
      value: "Soporte",
      label: "acompanamiento tecnico para operacion, mantenimiento y continuidad",
    },
  ],
  cta: {
    title: "Si tu proyecto necesita ejecucion tecnica seria, conversemos",
    description:
      "Podemos ayudarte a evaluar alcances, ordenar prioridades y ejecutar una solucion tecnica alineada a la necesidad real de tu operacion.",
    cta: {
      label: "Solicitar una conversacion",
      href: "/contacto",
    },
  },
};

export const companyContent = {
  seo: {
    title: "Empresa | FOS Ecuador S.A.",
    description:
      "Conoce a FOS Ecuador S.A., empresa integral de ingenieria y servicios tecnicos para telecomunicaciones, fibra optica, energia e infraestructura.",
  },
  hero: {
    eyebrow: "Empresa",
    title: "Sobre FOS Ecuador S.A.",
    description:
      "Somos una empresa ecuatoriana que integra varias especialidades tecnicas para ayudar a nuestros clientes a ejecutar proyectos con mayor orden, respaldo y continuidad.",
  } satisfies PageContent,
  intro:
    "Nuestra fortaleza esta en articular disciplinas que normalmente se gestionan por separado. Eso nos permite responder con mas coherencia cuando un proyecto necesita conectividad, infraestructura, energia y soporte operativo al mismo tiempo.",
  mission:
    "Entregar soluciones tecnicas confiables que ayuden a nuestros clientes a operar con mayor seguridad, continuidad y control.",
  vision:
    "Ser un aliado tecnico de referencia en Ecuador para proyectos de comunicaciones, energia, automatizacion e infraestructura.",
  values: siteConfig.values,
  cta: {
    title: "Descubre como esta capacidad tecnica se traduce en servicios concretos",
    description:
      "Explora nuestras categorias de servicio y encuentra la linea de apoyo que mejor se ajusta a tu proyecto.",
    cta: {
      label: "Ver servicios",
      href: "/servicios",
    },
  },
};

export const servicesPageContent = {
  seo: {
    title: "Servicios | FOS Ecuador S.A.",
    description:
      "Servicios de FOS Ecuador S.A. en telecomunicaciones, fibra optica, infraestructura tecnologica, ingenieria electrica, automatizacion y mantenimiento tecnico.",
  },
  hero: {
    eyebrow: "Servicios",
    title: "Categorias de servicio",
    description:
      "Presentamos nuestras capacidades por categoria para que identifiques con rapidez el tipo de solucion que FOS puede aportar a tu proyecto.",
  } satisfies PageContent,
  section: {
    eyebrow: "Capacidades",
    title: "Servicios claros, organizados y enfocados en necesidades reales",
    description:
      "Cada categoria resume una linea de trabajo con capacidades concretas, para que puedas evaluar el alcance sin perderte en listas extensas.",
  },
  cta: {
    title: "Cuentanos que necesitas y te orientamos por la categoria correcta",
    description:
      "Si ya tienes un requerimiento definido o todavia estas evaluando opciones, podemos ayudarte a aterrizar el siguiente paso.",
    cta: {
      label: "Hablar con nuestro equipo",
      href: "/contacto",
    },
  },
};

export const projectsPageContent = {
  seo: {
    title: "Proyectos | FOS Ecuador S.A.",
    description:
      "Experiencia real de FOS Ecuador S.A. en proyectos de fibra optica, redes electricas, comunicaciones e infraestructura tecnica.",
  },
  hero: {
    eyebrow: "Experiencia",
    title: "Proyectos y trayectoria",
    description:
      "Nuestra trayectoria incluye proyectos en comunicaciones, redes electricas, infraestructura institucional e iniciativas industriales con distintos niveles de complejidad.",
  } satisfies PageContent,
  section: {
    eyebrow: "Proyectos destacados",
    title: "Referencias reales que muestran como trabajamos",
    description:
      "Estos proyectos muestran la variedad de sectores, alcances y retos tecnicos en los que FOS ha participado.",
  },
  cta: {
    title: "Llevemos esa experiencia a tu siguiente reto tecnico",
    description:
      "Si buscas un aliado con experiencia de campo y capacidad de ejecucion, podemos conversar sobre el alcance de tu proyecto.",
    cta: {
      label: "Quiero conversar",
      href: "/contacto",
    },
  },
};

export const contactPageContent = {
  seo: {
    title: "Contacto | FOS Ecuador S.A.",
    description:
      "Contacta a FOS Ecuador S.A. para proyectos de telecomunicaciones, fibra optica, ingenieria electrica, infraestructura y mantenimiento tecnico.",
  },
  hero: {
    eyebrow: "Contacto",
    title: "Contactanos",
    description:
      "Cuentanos tu necesidad y te ayudaremos a definir el mejor camino para tu proyecto de conectividad, energia o infraestructura tecnica.",
  } satisfies PageContent,
  section: {
    eyebrow: "Canales",
    title: "Estamos listos para escuchar tu requerimiento",
    description:
      "Los datos visibles se mantienen como placeholders editables para que puedas reemplazarlos mas adelante por informacion comercial definitiva.",
  },
};

export const footerContent = {
  description: siteConfig.shortDescription,
  navigationLabel: "Navegacion",
  contactLabel: "Contacto",
  socialLabel: "Redes",
};
