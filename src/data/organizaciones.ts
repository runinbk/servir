import { Organizacion, ConfigGlobal } from "../types";

export const CONFIG_GLOBAL: ConfigGlobal = {
  nombreInstitucion: "SERVIR",
  sloganNav: "Organización Civil sin fines de lucro",
  tituloHero: "Construyendo un Futuro Sin Violencia con Valores Reales",
  subtituloHero: "Somos una red de organizaciones civiles unidas por un solo propósito: transformar comunidades a través de la educación en valores, el liderazgo y la prevención del delito. Todos nuestros programas son 100% gratuitos.",
  ctaHeroPrimario: "Conoce los programas",
  ctaHeroSecundario: "Saber más",
  misionTexto: "SERVIR es una organización paraguas que nuclea a organizaciones civiles sin fines de lucro comprometidas con la promoción de principios y valores como herramientas fundamentales para la prevención del delito y la violencia en nuestra sociedad.",
  misionTexto2: "Canalizamos todos nuestros esfuerzos a través de programas educativos 100% gratuitos, diseñados especialmente para jóvenes, familias, profesionales y toda persona que desea transformar su vida y contribuir a una comunidad más segura, íntegra y próspera en Santa Cruz de la Sierra y toda Bolivia.",
  alianzas: [
    {
      nombre: "ELITE",
      descripcion: "Alianza estratégica de desarrollo y liderazgo ético.",
      logo: "/assets/logos/elite-logo.png",
      abreviatura: "ELITE"
    },
    {
      nombre: "TEMPLO EL OLAM",
      descripcion: "Respaldo y soporte de red comunitaria de valores.",
      logo: "/assets/logos/templo-olam-logo.png",
      abreviatura: "T. EL OLAM"
    }
  ],
  contacto: {
    direccion: "Santa Cruz de la Sierra, Bolivia",
    telefono: "+591 7000 0000",
    email: "contacto@servir.org.bo",
    web: "www.servir.org.bo"
  },
  redes: {
    facebook: "https://facebook.com/servir",
    instagram: "https://instagram.com/servir",
    youtube: "https://youtube.com/servir",
    whatsapp: "https://wa.me/59170000000"
  }
};

export const ORGANIZACIONES: Organizacion[] = [
  // 🌱 DIVISION JÓVENES
  // Adolescentes
  {
    id: "ruta-joven",
    nombre: "Ruta Joven",
    division: "jovenes",
    subgrupo: "adolescentes",
    color: "#F59E0B",
    emoji: "🧭",
    descripcion: "Guiando a los adolescentes en el descubrimiento de sus talentos y valores de liderazgo."
  },
  {
    id: "juventud-visionaria",
    nombre: "Juventud Visionaria",
    division: "jovenes",
    subgrupo: "adolescentes",
    color: "#8B5CF6",
    emoji: "🌟",
    descripcion: "Fomentando metas claras y propósitos de vida éticos para estudiantes escolares."
  },
  // Jóvenes
  {
    id: "accion-joven",
    nombre: "Acción Joven",
    division: "jovenes",
    subgrupo: "jovenes",
    color: "#EF4444",
    emoji: "💡",
    descripcion: "Empoderando la participación ciudadana y el emprendimiento con impacto social."
  },
  {
    id: "juventud-radical",
    nombre: "Juventud Radical",
    division: "jovenes",
    subgrupo: "jovenes",
    color: "#EC4899",
    emoji: "🔥",
    descripcion: "Entrenando el carácter de jóvenes para tomar decisiones firmes basadas en valores."
  },
  {
    id: "fuerza-joven",
    nombre: "Fuerza Joven",
    division: "jovenes",
    subgrupo: "jovenes",
    color: "#3B82F6",
    emoji: "💪",
    descripcion: "Desarrollando resiliencia mental y fortaleza deportiva en comunidades vulnerables."
  },
  {
    id: "juventud-xtrema",
    nombre: "Juventud Xtrema",
    division: "jovenes",
    subgrupo: "jovenes",
    color: "#F97316",
    emoji: "🎨",
    descripcion: "Canalizando la expresión urbana y el arte hacia la prevención de la violencia."
  },
  // Jóvenes Adultos
  {
    id: "juventud-impacto",
    nombre: "Juventud de Impacto",
    division: "jovenes",
    subgrupo: "jovenes-adultos",
    color: "#14B8A6",
    emoji: "🌍",
    descripcion: "Formando líderes comunitarios listos para crear proyectos sostenibles."
  },
  {
    id: "creacion",
    nombre: "Creación",
    division: "jovenes",
    subgrupo: "jovenes-adultos",
    color: "#A855F7",
    emoji: "🎭",
    descripcion: "Inspirando soluciones innovadoras y expresión teatral con enfoque social."
  },
  {
    id: "juventud-imparable",
    nombre: "Juventud Imparable",
    division: "jovenes",
    subgrupo: "jovenes-adultos",
    color: "#06B6D4",
    emoji: "🚀",
    descripcion: "Entrenando en superación de barreras y mentalidad empresarial disruptiva."
  },
  {
    id: "juventud-exitosa",
    nombre: "Juventud Exitosa",
    division: "jovenes",
    subgrupo: "jovenes-adultos",
    color: "#10B981",
    emoji: "📈",
    descripcion: "Impartiendo finanzas personales e inserción laboral inteligente para jóvenes."
  },

  // 🌳 DIVISION ADULTOS
  // Mujeres
  {
    id: "se-mujer",
    nombre: "Sé Mujer",
    division: "adultos",
    subgrupo: "mujeres",
    color: "#E879F9",
    emoji: "🌸",
    descripcion: "Espacio de restauración, identidad y valor genuino para la mujer actual."
  },
  {
    id: "mujer-creativa",
    nombre: "Mujer Creativa",
    division: "adultos",
    subgrupo: "mujeres",
    color: "#FB7185",
    emoji: "🎨",
    descripcion: "Fomentando el autoempleo de mujeres mediante manualidades y arte práctico."
  },
  {
    id: "mujer-luz",
    nombre: "Mujer de Luz",
    division: "adultos",
    subgrupo: "mujeres",
    color: "#FCD34D",
    emoji: "✨",
    descripcion: "Promoviendo el bienestar emocional, familiar y la plenitud de las madres."
  },
  {
    id: "mujer-virtuosa",
    nombre: "Mujer Virtuosa",
    division: "adultos",
    subgrupo: "mujeres",
    color: "#A78BFA",
    emoji: "🏡",
    descripcion: "Educando en principios familiares sólidos y la cohesión de los hogares bolivianos."
  },
  {
    id: "mujer-exitosa",
    nombre: "Mujer Exitosa",
    division: "adultos",
    subgrupo: "mujeres",
    color: "#34D399",
    emoji: "👑",
    descripcion: "Potenciando el liderazgo corporativo y profesional de mujeres líderes."
  },
  {
    id: "mujer-unica",
    nombre: "Mujer Única",
    division: "adultos",
    subgrupo: "mujeres",
    color: "#F472B6",
    emoji: "💎",
    descripcion: "Celebrando el valor de la unicidad y sanando heridas de baja autoestima."
  },
  {
    id: "mujer-emprendedora",
    nombre: "Mujer Emprendedora",
    division: "adultos",
    subgrupo: "mujeres",
    color: "#FBBF24",
    emoji: "💼",
    descripcion: "Lanzando nuevos negocios locales liderados por mujeres resilientes."
  },
  // Hombres
  {
    id: "se-emprendedor",
    nombre: "Sé Emprendedor",
    division: "adultos",
    subgrupo: "hombres",
    color: "#60A5FA",
    emoji: "🛠️",
    descripcion: "Capacitando a varones en ética comercial, negocios técnicos y soporte familiar."
  },
  {
    id: "visionarios",
    nombre: "Visionarios",
    division: "adultos",
    subgrupo: "hombres",
    color: "#818CF8",
    emoji: "🔬", // Se usa microscopio u otro emoji representativo
    descripcion: "Impulsando planes de vida y mentores de integridad masculina para el futuro."
  },
  // Profesionales
  {
    id: "capex",
    nombre: "Capex",
    division: "adultos",
    subgrupo: "profesionales",
    color: "#2DD4BF",
    emoji: "📊",
    descripcion: "Entrenando en gobernanza financiera corporativa y ampliación de inversiones éticas."
  },
  {
    id: "expanzion",
    nombre: "Expanzión",
    division: "adultos",
    subgrupo: "profesionales",
    color: "#4ADE80",
    emoji: "🌐",
    descripcion: "Creando redes internacionales de networking e internacionalización empresarial."
  },
  {
    id: "kadosh",
    nombre: "Kadosh",
    division: "adultos",
    subgrupo: "profesionales",
    color: "#94A3B8",
    emoji: "🕊️",
    descripcion: "Reuniendo a líderes institucionales comprometidos con los valores trascendentes."
  }
];
