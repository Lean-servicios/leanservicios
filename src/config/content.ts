const limpiezaImg = { url: "/assets/lean/serv-limpieza-institucional.jpg" };
import fumigacionImg from "@/assets/serv-fumigacion.jpg";
import verdesImg from "@/assets/serv-verdes.jpg";
import obrasImg from "@/assets/serv-obras.jpg";
const limpiezaEventos = { url: "/assets/lean/trabajo-limpieza-eventos.jpg" };
const limpiezaAuditorio = { url: "/assets/lean/trabajo-limpieza-auditorio.jpg" };
const fumigacionEstadio = { url: "/assets/lean/trabajo-fumigacion-estadio.jpg" };

/** Contenido editable: servicios, proceso, diferenciales y trabajos. */

export type Servicio = {
  id: string;
  titulo: string;
  texto: string;
  items: string[];
  cta: string;
  /** Valor que se precarga en el cuestionario de contacto. */
  servicioFormulario: string;
  imagen: string;
  /** Encuadre del recorte en las tarjetas. */
  foco?: string;
};

export const servicios: Servicio[] = [
  {
    id: "limpieza",
    titulo: "Limpieza integral",
    texto:
      "Espacios listos para operar, con frecuencias a medida. También cubrimos eventos deportivos y turísticos de gran convocatoria.",
    items: ["Oficinas y áreas operativas", "Eventos masivos", "Limpiezas especiales"],
    cta: "Pedir presupuesto de limpieza",
    servicioFormulario: "Limpieza",
    imagen: limpiezaImg.url,
    foco: "center 22%",
  },
  {
    id: "fumigacion",
    titulo: "Fumigación y control de plagas",
    texto: "Prevención y control que protegen la higiene y la continuidad operativa.",
    items: ["Desinsectación", "Control preventivo", "Tratamientos periódicos"],
    cta: "Pedir presupuesto de fumigación",
    servicioFormulario: "Fumigación",
    imagen: fumigacionImg,
  },
  {
    id: "espacios-verdes",
    titulo: "Jardinería y espacios verdes",
    texto: "Exteriores prolijos y seguros todo el año, con mantenimiento planificado.",
    items: ["Corte y desmalezado", "Poda", "Acondicionamiento de terrenos"],
    cta: "Pedir presupuesto de espacios verdes",
    servicioFormulario: "Espacios verdes",
    imagen: verdesImg,
  },
  {
    id: "obras-civiles",
    titulo: "Obras civiles y mantenimiento edilicio",
    texto: "Reparaciones y adecuaciones con personal de oficio y supervisión propia.",
    items: ["Albañilería y pintura", "Electricidad y plomería", "Mantenimiento edilicio"],
    cta: "Pedir presupuesto de obras",
    servicioFormulario: "Obras civiles",
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
  /** Encuadre del recorte en la galería. */
  foco?: string;
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
    foco: "center 35%",
  },
  {
    categoria: "Limpieza",
    titulo: "Limpieza de auditorio",
    descripcion: "Acondicionamiento de butacas, pasillos y sala antes y después de cada función.",
    ubicacion: null,
    imagen: limpiezaAuditorio.url,
    foco: "center 25%",
  },
  {
    categoria: "Fumigación",
    titulo: "Fumigación en predio deportivo",
    descripcion:
      "Tratamiento con equipos de aplicación en circulaciones, tribunas y sectores perimetrales.",
    ubicacion: null,
    imagen: fumigacionEstadio.url,
    foco: "center 45%",
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

