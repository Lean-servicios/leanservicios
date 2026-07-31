import limpiezaImg from "@/assets/serv-limpieza.jpg";
import fumigacionImg from "@/assets/serv-fumigacion.jpg";
import verdesImg from "@/assets/serv-verdes.jpg";
import obrasImg from "@/assets/serv-obras.jpg";
import limpiezaEventos from "@/assets/trabajo-limpieza-eventos.jpg.asset.json";
import limpiezaAuditorio from "@/assets/trabajo-limpieza-auditorio.jpg.asset.json";
import fumigacionEstadio from "@/assets/trabajo-fumigacion-estadio.jpg.asset.json";

/** Contenido editable: servicios, proceso, diferenciales y trabajos. */

export type Servicio = {
  id: string;
  titulo: string;
  texto: string;
  items: string[];
  cta: string;
  imagen: string;
};

export const servicios: Servicio[] = [
  {
    id: "limpieza",
    titulo: "Limpieza integral",
    texto:
      "Espacios limpios y listos para operar, con servicios y frecuencias diseñados a medida de cada instalación.",
    items: ["Oficinas y espacios comunes", "Áreas operativas", "Limpiezas periódicas", "Limpiezas especiales"],
    cta: "Consultar por limpieza",
    imagen: limpiezaImg,
  },
  {
    id: "fumigacion",
    titulo: "Fumigación y control de plagas",
    texto:
      "Intervenciones preventivas y correctivas que protegen la higiene y la continuidad operativa de cada establecimiento.",
    items: ["Fumigación y desinsectación", "Control preventivo", "Tratamientos periódicos", "Intervenciones puntuales"],
    cta: "Consultar por fumigación",
    imagen: fumigacionImg,
  },
  {
    id: "espacios-verdes",
    titulo: "Jardinería y espacios verdes",
    texto:
      "Exteriores prolijos, seguros y en condiciones durante todo el año, con mantenimiento planificado.",
    items: ["Corte y desmalezado", "Poda", "Acondicionamiento de terrenos", "Mantenimiento periódico"],
    cta: "Consultar por espacios verdes",
    imagen: verdesImg,
  },
  {
    id: "obras-civiles",
    titulo: "Obras civiles y mantenimiento edilicio",
    texto:
      "Reparaciones, refacciones y adecuaciones edilicias ejecutadas con personal de oficio y supervisión propia.",
    items: ["Albañilería y pintura", "Electricidad y plomería", "Adecuación de espacios", "Mantenimiento edilicio"],
    cta: "Consultar por obras civiles",
    imagen: obrasImg,
  },
];

export const proceso = [
  { n: "1", titulo: "Relevamos", texto: "Visitamos la instalación y detectamos qué necesita atención." },
  { n: "2", titulo: "Planificamos", texto: "Definimos equipo, recursos, tareas y tiempos." },
  { n: "3", titulo: "Ejecutamos", texto: "Trabajamos con supervisión y seguimiento continuo." },
];

export const diferenciales = [
  "Un solo proveedor para cuatro servicios",
  "Un único punto de contacto",
  "Servicios a medida de cada instalación",
  "Personal operativo, de oficio y técnico",
  "Supervisión y seguimiento de cada trabajo",
  "Respuesta rápida y flexibilidad operativa",
];

export type Trabajo = {
  categoria: "Limpieza" | "Fumigación" | "Espacios verdes" | "Obras civiles";
  titulo: string;
  descripcion: string;
  ubicacion?: string | null;
  imagen: string;
};

/** Trabajos realizados — material real de servicios ejecutados. */
export const trabajos: Trabajo[] = [
  {
    categoria: "Limpieza",
    titulo: "Limpieza en eventos de gran convocatoria",
    descripcion:
      "Operativo de limpieza en accesos, plateas y sectores comunes durante un evento masivo.",
    ubicacion: null,
    imagen: limpiezaEventos.url,
  },
  {
    categoria: "Limpieza",
    titulo: "Limpieza de auditorio",
    descripcion: "Acondicionamiento de butacas, pasillos y sala antes y después de cada función.",
    ubicacion: null,
    imagen: limpiezaAuditorio.url,
  },
  {
    categoria: "Fumigación",
    titulo: "Fumigación en predio deportivo",
    descripcion:
      "Tratamiento con equipos de aplicación en circulaciones, tribunas y sectores perimetrales.",
    ubicacion: null,
    imagen: fumigacionEstadio.url,
  },
  {
    categoria: "Espacios verdes",
    titulo: "Recuperación de espacio exterior",
    descripcion: "Desmalezado, corte y acondicionamiento de perímetro de planta.",
    ubicacion: null,
    imagen: verdesImg,
  },
  {
    categoria: "Obras civiles",
    titulo: "Mantenimiento y acondicionamiento edilicio",
    descripcion: "Trabajos de albañilería, pintura y adecuación de espacios internos.",
    ubicacion: null,
    imagen: obrasImg,
  },
];

