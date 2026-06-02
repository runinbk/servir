import { Curso } from "../types";

export const CURSOS: Curso[] = [
  // 🌱 BLOQUE JÓVENES
  // Adolescentes
  {
    id: "rj-001",
    nombre: "Liderazgo Juvenil en Acción",
    organizacion: "Ruta Joven",
    imagen: "/assets/cursos/ruta-joven-liderazgo.jpg",
    dias: "Lunes y Miércoles",
    horario: "16:00 - 18:00",
    descripcion: "Desarrolla habilidades de liderazgo, comunicación asertiva, resolución de conflictos y trabajo en equipo sólido desde temprana edad.",
    emoji: "🧭",
    colorOrg: "#F59E0B",
    categoria: "adolescentes"
  },
  {
    id: "jv-001",
    nombre: "Visión y Propósito de Vida",
    organizacion: "Juventud Visionaria",
    imagen: "/assets/cursos/juventud-visionaria-vision.jpg",
    dias: "Martes y Jueves",
    horario: "15:00 - 17:00",
    descripcion: "Un programa práctico enfocado en ayudar a descubrir tu misión personal de vida y construir un futuro lleno de metas claras e íntegras.",
    emoji: "🌟",
    colorOrg: "#8B5CF6",
    categoria: "adolescentes"
  },
  // Jóvenes
  {
    id: "aj-001",
    nombre: "Emprendimiento Social Joven",
    organizacion: "Acción Joven",
    imagen: "/assets/cursos/accion-joven-emprendimiento.jpg",
    dias: "Sábado",
    horario: "09:00 - 12:00",
    descripcion: "Aprende a formular y lanzar proyectos sociales reales con un impacto transformador positivo en tu propia comunidad y entorno.",
    emoji: "💡",
    colorOrg: "#EF4444",
    categoria: "jovenes"
  },
  {
    id: "jr-001",
    nombre: "Valores que Transforman",
    organizacion: "Juventud Radical",
    imagen: "/assets/cursos/juventud-radical-valores.jpg",
    dias: "Miércoles y Viernes",
    horario: "18:00 - 20:00",
    descripcion: "Fortalece tu carácter y cimienta convicciones éticas profundas para tomar decisiones con una integridad inquebrantable.",
    emoji: "🔥",
    colorOrg: "#EC4899",
    categoria: "jovenes"
  },
  {
    id: "fj-001",
    nombre: "Deporte y Disciplina Mental",
    organizacion: "Fuerza Joven",
    imagen: "/assets/cursos/fuerza-joven-deporte.jpg",
    dias: "Lunes, Miércoles y Viernes",
    horario: "07:00 - 08:30",
    descripcion: "Combina el entrenamiento físico intensivo con el desarrollo de la disciplina mental, la resiliencia y el espíritu deportivo en valores.",
    emoji: "💪",
    colorOrg: "#3B82F6",
    categoria: "jovenes"
  },
  {
    id: "jx-001",
    nombre: "Arte Urbano y Expresión",
    organizacion: "Juventud Xtrema",
    imagen: "/assets/cursos/juventud-xtrema-arte.jpg",
    dias: "Sábado y Domingo",
    horario: "10:00 - 12:00",
    descripcion: "Usa el arte visual, urbano y la expresión escénica como una herramienta dinámica de prevención y de transformación comunitaria.",
    emoji: "🎨",
    colorOrg: "#F97316",
    categoria: "jovenes"
  },
  // Jóvenes Adultos
  {
    id: "ji-001",
    nombre: "Liderazgo de Impacto Comunitario",
    organizacion: "Juventud de Impacto",
    imagen: "/assets/cursos/juventud-impacto-comunidad.jpg",
    dias: "Martes y Jueves",
    horario: "19:00 - 21:00",
    descripcion: "Formación intensiva de agentes de cambio social, capacitados para liderar proyectos, movilizar personas y transformar realidades complejas.",
    emoji: "🌍",
    colorOrg: "#14B8A6",
    categoria: "jovenesAdultos"
  },
  {
    id: "cr-001",
    nombre: "Creatividad e Innovación",
    organizacion: "Creación",
    imagen: "/assets/cursos/creacion-innovacion.jpg",
    dias: "Viernes",
    horario: "18:00 - 21:00",
    descripcion: "Desarrolla el pensamiento lateral creativo, rompe esquemas rígidos y aplica la innovación disruptiva a proyectos y soluciones reales.",
    emoji: "🎭",
    colorOrg: "#A855F7",
    categoria: "jovenesAdultos"
  },
  {
    id: "jimp-001",
    nombre: "Mentalidad Imparable",
    organizacion: "Juventud Imparable",
    imagen: "/assets/cursos/juventud-imparable-mentalidad.jpg",
    dias: "Lunes y Jueves",
    horario: "19:00 - 21:00",
    descripcion: "Supera obstáculos emocionales y mentales cotidianos, y edifica una mentalidad fuerte orientada al crecimiento y la perseverancia.",
    emoji: "🚀",
    colorOrg: "#06B6D4",
    categoria: "jovenesAdultos"
  },
  {
    id: "je-001",
    nombre: "Inteligencia Financiera Joven",
    organizacion: "Juventud Exitosa",
    imagen: "/assets/cursos/juventud-exitosa-finanzas.jpg",
    dias: "Miércoles y Sábado",
    horario: "08:00 - 10:00",
    descripcion: "Aprende a gestionar tus recursos económicos, planificar presupuestos, ahorrar con metas y construir una sólida libertad financiera.",
    emoji: "📈",
    colorOrg: "#10B981",
    categoria: "jovenesAdultos"
  },

  // 🌳 BLOQUE ADULTOS
  // Mujeres
  {
    id: "sm-001",
    nombre: "Sé Mujer: Identidad y Propósito",
    organizacion: "Sé Mujer",
    imagen: "/assets/cursos/se-mujer-identidad.jpg",
    dias: "Lunes y Miércoles",
    horario: "09:00 - 11:00",
    descripcion: "Un taller profundo para reconectarte con tu identidad genuina, sanar heridas emocionales y trazar un plan de vida con propósito.",
    emoji: "🌸",
    colorOrg: "#E879F9",
    categoria: "mujeres"
  },
  {
    id: "mc-001",
    nombre: "Diseño y Arte Creativo",
    organizacion: "Mujer Creativa",
    imagen: "/assets/cursos/mujer-creativa-arte.jpg",
    dias: "Martes y Jueves",
    horario: "10:00 - 12:00",
    descripcion: "Explora destrezas creativas en diseño manual, artesanías y pintura, potenciando el arte como una fuente activa de ingresos.",
    emoji: "🎨",
    colorOrg: "#FB7185",
    categoria: "mujeres"
  },
  {
    id: "ml-001",
    nombre: "Bienestar y Vida Plena",
    organizacion: "Mujer de Luz",
    imagen: "/assets/cursos/mujer-luz-bienestar.jpg",
    dias: "Miércoles",
    horario: "08:00 - 10:00",
    descripcion: "Programa holístico que integra salud mental, nutrición básica, manejo del estrés y equilibrio emocional para un bienestar integral.",
    emoji: "✨",
    colorOrg: "#FCD34D",
    categoria: "mujeres"
  },
  {
    id: "mv-001",
    nombre: "Valores en el Hogar y la Familia",
    organizacion: "Mujer Virtuosa",
    imagen: "/assets/cursos/mujer-virtuosa-familia.jpg",
    dias: "Sábado",
    horario: "09:00 - 11:30",
    descripcion: "Herramientas de consejería familiar y formación en valores morales y espirituales para criar y consolidar un hogar saludable.",
    emoji: "🏡",
    colorOrg: "#A78BFA",
    categoria: "mujeres"
  },
  {
    id: "mex-001",
    nombre: "Éxito Femenino Integral",
    organizacion: "Mujer Exitosa",
    imagen: "/assets/cursos/mujer-exitosa-exito.jpg",
    dias: "Martes y Viernes",
    horario: "19:00 - 21:00",
    descripcion: "Capacitación en liderazgo ejecutivo, oratoria, asertividad y balance entre la vida laboral, profesional y el autocuidado femenino.",
    emoji: "👑",
    colorOrg: "#34D399",
    categoria: "mujeres"
  },
  {
    id: "mu-001",
    nombre: "Tu Unicidad es tu Poder",
    organizacion: "Mujer Única",
    imagen: "/assets/cursos/mujer-unica-unicidad.jpg",
    dias: "Jueves",
    horario: "18:30 - 20:30",
    descripcion: "Aprende a valorar y celebrar tu singularidad individual, disipando la comparación tóxica y reforzando tu autoestima y valor innato.",
    emoji: "💎",
    colorOrg: "#F472B6",
    categoria: "mujeres"
  },
  {
    id: "me-001",
    nombre: "Emprendimiento Femenino",
    organizacion: "Mujer Emprendedora",
    imagen: "/assets/cursos/mujer-emprendedora-negocio.jpg",
    dias: "Lunes y Viernes",
    horario: "19:00 - 21:00",
    descripcion: "De la conceptualización a la venta: estructuración de planes de negocio, marketing digital práctico y finanzas para emprendedoras.",
    emoji: "💼",
    colorOrg: "#FBBF24",
    categoria: "mujeres"
  },
  // Hombres
  {
    id: "sep-001",
    nombre: "Emprendimiento Masculino",
    organizacion: "Sé Emprendedor",
    imagen: "/assets/cursos/se-emprendedor-negocio.jpg",
    dias: "Lunes y Miércoles",
    horario: "19:00 - 21:00",
    descripcion: "Desarrolla el espíritu emprendedor con sólidos principios éticos, gestión comercial, resolución de problemas y liderazgo responsable.",
    emoji: "🛠️",
    colorOrg: "#60A5FA",
    categoria: "hombres"
  },
  {
    id: "vis-001",
    nombre: "Visión Estratégica de Vida",
    organizacion: "Visionarios",
    imagen: "/assets/cursos/visionarios-estrategia.jpg",
    dias: "Martes y Jueves",
    horario: "19:00 - 21:00",
    descripcion: "Aprende a trazar un plan estratégico para tu vida, definiendo objetivos familiares, financieros, profesionales y de crecimiento interno.",
    emoji: "🔭",
    colorOrg: "#818CF8",
    categoria: "hombres"
  },
  // Profesionales
  {
    id: "cpx-001",
    nombre: "Capital y Expansión de Negocios",
    organizacion: "Capex",
    imagen: "/assets/cursos/capex-capital.jpg",
    dias: "Miércoles",
    horario: "18:00 - 21:00",
    descripcion: "Estrategias de avanzada para capitalizar empresas, modelado de negocios, alianzas de inversión ética y apalancamiento de expansión.",
    emoji: "📊",
    colorOrg: "#2DD4BF",
    categoria: "profesionales"
  },
  {
    id: "exp-001",
    nombre: "Expansión Empresarial y Redes",
    organizacion: "Expanzión",
    imagen: "/assets/cursos/expanzion-redes.jpg",
    dias: "Jueves y Sábado",
    horario: "09:00 - 11:00",
    descripcion: "Networking profesional de alto impacto, expansión a nuevos mercados, marcas escalables y construcción de coaliciones de negocio éticas.",
    emoji: "🌐",
    colorOrg: "#4ADE80",
    categoria: "profesionales"
  },
  {
    id: "kad-001",
    nombre: "Liderazgo con Propósito Trascendente",
    organizacion: "Kadosh",
    imagen: "/assets/cursos/kadosh-liderazgo.jpg",
    dias: "Viernes",
    horario: "19:00 - 21:30",
    descripcion: "Formación de directivos y profesionales en liderazgo de servicio, ética trascendente, gobierno corporativo ético y bienestar organizacional.",
    emoji: "🕊️",
    colorOrg: "#94A3B8",
    categoria: "profesionales"
  }
];
