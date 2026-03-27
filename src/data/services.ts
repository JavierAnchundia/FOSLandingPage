export type ServiceCategory = {
  title: string;
  summary: string;
  description: string;
  capabilities: string[];
};

export const services: ServiceCategory[] = [
  {
    title: "Telecomunicaciones y fibra optica",
    summary:
      "Soluciones para despliegue, adecuacion y soporte de redes de comunicacion y enlaces de fibra optica.",
    description:
      "Desarrollamos proyectos de telecomunicaciones con enfoque tecnico y operativo para infraestructuras que requieren continuidad, orden de ejecucion y confiabilidad en campo.",
    capabilities: [
      "Instalacion y adecuacion de enlaces de fibra optica",
      "Redes de comunicacion y cableado especializado",
      "Montaje y soporte para infraestructura de telecomunicaciones",
      "Pruebas, validacion y acompanamiento tecnico",
    ],
  },
  {
    title: "Redes e infraestructura tecnologica",
    summary:
      "Implementacion de redes, conectividad y plataformas fisicas para operaciones corporativas e institucionales.",
    description:
      "Integramos redes de datos e infraestructura tecnologica para entornos que necesitan conectividad estable, organizacion fisica y capacidad de crecimiento.",
    capabilities: [
      "Redes locales y estructuracion de conectividad",
      "Cableado y ordenamiento de infraestructura tecnologica",
      "Integracion de componentes de red y soporte de operacion",
      "Adecuacion de espacios tecnicos y puntos criticos",
    ],
  },
  {
    title: "Ingenieria electrica e industrial",
    summary:
      "Desarrollo de soluciones electricas para proyectos industriales, comerciales e institucionales.",
    description:
      "Ejecutamos trabajos de ingenieria electrica e industrial con criterio tecnico, seguridad operativa y orientacion al cumplimiento de alcance en obra y mantenimiento.",
    capabilities: [
      "Redes electricas de baja y media complejidad",
      "Montaje y adecuacion de sistemas electricos",
      "Apoyo a proyectos industriales y de potencia",
      "Integracion tecnica en campo para obras y ampliaciones",
    ],
  },
  {
    title: "Consultoria, mantenimiento y soporte tecnico",
    summary:
      "Acompanamiento tecnico para diagnostico, continuidad operativa y mantenimiento preventivo o correctivo.",
    description:
      "Brindamos soporte especializado para mantener infraestructura, redes y sistemas tecnicos en condiciones de operacion confiable, con respuesta oportuna y enfoque preventivo.",
    capabilities: [
      "Consultoria tecnica para proyectos e infraestructura existente",
      "Mantenimiento preventivo y correctivo",
      "Soporte tecnico especializado en campo",
      "Atencion a incidencias y continuidad operativa",
    ],
  },
  {
    title: "Suministro de materiales y equipos",
    summary:
      "Provision de materiales, componentes y equipos de apoyo para proyectos tecnicos e infraestructura.",
    description:
      "Complementamos la ejecucion de proyectos con suministro de materiales y equipos relacionados con telecomunicaciones, redes, energia e infraestructura tecnica.",
    capabilities: [
      "Materiales para redes y conectividad",
      "Componentes para infraestructura electrica y tecnica",
      "Equipos de apoyo para instalacion y mantenimiento",
      "Abastecimiento alineado al requerimiento del proyecto",
    ],
  },
];
