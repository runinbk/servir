/**
 * SERVIR — Tipos e Interfaces de TypeScript
 * Archivo: src/types/index.ts
 */

export interface Alianza {
  nombre: string;
  descripcion: string;
  logo: string;
  abreviatura: string;
}

export interface ContactoInfo {
  direccion: string;
  telefono: string;
  email: string;
  web: string;
}

export interface RedesSociales {
  facebook: string;
  instagram: string;
  youtube: string;
  whatsapp: string;
}

export interface ConfigGlobal {
  nombreInstitucion: string;
  sloganNav: string;
  tituloHero: string;
  subtituloHero: string;
  ctaHeroPrimario: string;
  ctaHeroSecundario: string;
  misionTexto: string;
  misionTexto2: string;
  alianzas: Alianza[];
  contacto: ContactoInfo;
  redes: RedesSociales;
}

export interface Organizacion {
  id: string;
  nombre: string;
  division: "jovenes" | "adultos";
  subgrupo: "adolescentes" | "jovenes" | "jovenes-adultos" | "mujeres" | "hombres" | "profesionales";
  color: string;
  emoji: string;
  logo?: string;
  descripcion?: string;
}

export interface Curso {
  id: string;
  nombre: string;
  organizacion: string; // Nombre de la organización que lo dicta
  imagen: string;
  dias: string;
  horario: string;
  descripcion: string;
  emoji: string;
  colorOrg: string; // Color de la organización para badges y bordes
  categoria: "adolescentes" | "jovenes" | "jovenesAdultos" | "mujeres" | "hombres" | "profesionales";
}
