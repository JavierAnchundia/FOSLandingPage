export type Project = {
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "MIDUVI Esmeraldas",
    location: "Esmeraldas, Ecuador",
    year: "2009",
    category: "Energia y comunicaciones",
    description:
      "Trabajos en red electrica y comunicaciones para infraestructura institucional, con soporte tecnico y ejecucion en campo.",
  },
  {
    title: "CNT Esmeraldas",
    location: "Esmeraldas, Ecuador",
    year: "2010",
    category: "Fibra optica",
    description:
      "Participacion en despliegue de red de fibra optica con foco en continuidad de servicio y soporte a la implementacion.",
  },
  {
    title: "Artefacta",
    location: "Nivel nacional, Ecuador",
    year: "2010 - 2014",
    category: "Redes electricas",
    description:
      "Trabajos en redes electricas a nivel nacional para locales comerciales y puntos de atencion.",
  },
  {
    title: "Novomet Nueva Loja",
    location: "Nueva Loja, Ecuador",
    year: "2015 - 2016",
    category: "Proyecto electrico industrial",
    description:
      "Participacion en proyecto electrico de 1 MW para una intervencion industrial de alta exigencia.",
  },
  {
    title: "Treboles del Sur Quito",
    location: "Quito, Ecuador",
    year: "2016 - 2017",
    category: "Red electrica",
    description:
      "Implementacion de red electrica para desarrollo inmobiliario, con foco en cumplimiento tecnico y seguridad.",
  },
  {
    title: "CELEC EP",
    location: "Ecuador",
    year: "2018",
    category: "Fibra optica para subestaciones",
    description:
      "Desarrollo de enlaces de fibra optica para subestaciones, con foco en confiabilidad y precision tecnica.",
  },
  {
    title: "Termas Papallacta",
    location: "Papallacta, Ecuador",
    year: "2018",
    category: "Red de comunicaciones",
    description:
      "Implementacion de red de comunicaciones para operacion institucional en un entorno con requerimientos de servicio continuo.",
  },
];
