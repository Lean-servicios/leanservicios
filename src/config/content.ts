import limpiezaImg from "@/assets/serv-limpieza.jpg";
import fumigacionImg from "@/assets/serv-fumigacion.jpg";
import verdesImg from "@/assets/serv-verdes.jpg";
import obrasImg from "@/assets/serv-obras.jpg";
import trabajo1 from "@/assets/trabajo-1.jpg";

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
      "Cuidamos cada ambiente para que se mantenga limpio, ordenado y preparado para su actividad diaria. Diseñamos servicios adaptados a las características, frecuencia y necesidades de cada instalación.",
    items: [
      "Oficinas",
      "Instalaciones empresariales",
      "Áreas operativas",
      "Espacios comunes",
      "Limpiezas periódicas",
      "Limpiezas especiales",
      "Mantenimiento general",
    ],
    cta: "Consultar por limpieza",
    imagen: limpiezaImg,
  },
  {
    id: "fumigacion",
    titulo: "Fumigación y control de plagas",
    texto:
      "Protegemos los espacios frente a factores que pueden afectar su higiene, seguridad y funcionamiento, mediante intervenciones preventivas y correctivas adaptadas a cada establecimiento.",
    items: [
      "Fumigación",
      "Desinsectación",
      "Control preventivo de plagas",
      "Tratamientos periódicos",
      "Intervenciones específicas",
    ],
    cta: "Consultar por fumigación",
    imagen: fumigacionImg,
  },
  {
    id: "espacios-verdes",
    titulo: "Jardinería y espacios verdes",
    texto:
      "Cuidamos y conservamos los espacios exteriores para mantenerlos seguros, funcionales y en buenas condiciones.",
    items: [
      "Corte de césped",
      "Desmalezado",
      "Poda",
      "Limpieza de espacios exteriores",
      "Acondicionamiento de terrenos",
      "Mantenimiento periódico",
      "Conservación de áreas verdes",
    ],
    cta: "Consultar por espacios verdes",
    imagen: verdesImg,
  },
  {
    id: "obras-civiles",
    titulo: "Obras civiles y mantenimiento edilicio",
    texto:
      "Intervenimos allí donde los espacios necesitan repararse, adaptarse o evolucionar. Ejecutamos reparaciones, refacciones, mantenimiento edilicio y obras civiles de menor envergadura.",
    items: [
      "Albañilería",
      "Pintura",
      "Electricidad",
      "Plomería",
      "Reparaciones generales",
      "Adecuaciones de espacios",
      "Refacciones",
      "Mantenimiento edilicio",
      "Personal de oficio",
      "Perfiles técnicos",
      "Supervisión y coordinación de tareas",
    ],
    cta: "Consultar por obras civiles",
    imagen: obrasImg,
  },
];

export const proceso = [
  { n: "1", titulo: "Escuchamos", texto: "Conocemos el espacio, su dinámica y sus necesidades." },
  { n: "2", titulo: "Relevamos", texto: "Identificamos qué requiere atención y cómo intervenir." },
  { n: "3", titulo: "Planificamos", texto: "Organizamos personas, recursos, tareas y tiempos." },
  { n: "4", titulo: "Actuamos", texto: "Ejecutamos cada servicio con seguimiento y responsabilidad." },
  { n: "5", titulo: "Acompañamos", texto: "Porque las necesidades cambian y los espacios también." },
];

export const diferenciales = [
  "Soluciones integrales",
  "Un único punto de contacto",
  "Servicios adaptados a cada instalación",
  "Coordinación de personas y recursos",
  "Personal operativo, de oficio y técnico",
  "Atención personalizada",
  "Flexibilidad operativa",
  "Seguimiento de los trabajos",
  "Integración de Higiene y Seguridad",
  "Compromiso con el funcionamiento cotidiano del cliente",
];

export type Trabajo = {
  categoria: "Limpieza" | "Fumigación" | "Espacios verdes" | "Obras civiles";
  titulo: string;
  descripcion: string;
  ubicacion?: string | null;
  imagen: string;
};

/** Trabajos realizados — títulos genéricos hasta contar con material real.
 *  Reemplazar imagen, título, descripción y ubicación cuando existan. */
export const trabajos: Trabajo[] = [
  {
    categoria: "Limpieza",
    titulo: "Limpieza integral de instalaciones",
    descripcion: "Servicio de limpieza en áreas operativas y espacios comunes de gran superficie.",
    ubicacion: null,
    imagen: trabajo1,
  },
  {
    categoria: "Limpieza",
    titulo: "Mantenimiento preventivo",
    descripcion: "Rutinas periódicas de limpieza y orden en oficinas corporativas.",
    ubicacion: null,
    imagen: limpiezaImg,
  },
  {
    categoria: "Fumigación",
    titulo: "Intervención de control de plagas",
    descripcion: "Tratamiento preventivo y correctivo en depósitos y sectores productivos.",
    ubicacion: null,
    imagen: fumigacionImg,
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
    titulo: "Reparación y acondicionamiento edilicio",
    descripcion: "Trabajos de albañilería, pintura y adecuación de espacios internos.",
    ubicacion: null,
    imagen: obrasImg,
  },
];

export const areasEmpleo = [
  { titulo: "Limpieza", texto: "Operarios y operarias para servicios en empresas e instituciones." },
  { titulo: "Jardinería y espacios verdes", texto: "Tareas de corte, poda, desmalezado y mantenimiento exterior." },
  { titulo: "Fumigación", texto: "Aplicadores y personal para control de plagas." },
  { titulo: "Obras civiles", texto: "Personal de oficio: albañilería, pintura, electricidad y plomería." },
  { titulo: "Administración", texto: "Perfiles administrativos y de soporte operativo." },
  { titulo: "Higiene y Seguridad", texto: "Perfiles técnicos vinculados a seguridad y cumplimiento." },
];
