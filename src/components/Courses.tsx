"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { CURSOS } from "../data/cursos";
import { Curso } from "../types";
import { Search, ArrowUpRight, AlertCircle, RefreshCw } from "lucide-react";
import styles from "./Courses.module.css";

interface CoursesProps {
  selectedOrganizacion: string;
  onClearOrganizacion: () => void;
  onSelectCurso: (curso: Curso) => void;
}

type TabPrincipal = "jovenes" | "adultos";

interface CategoriaFiltro {
  key: string;
  label: string;
}

export default function Courses({ 
  selectedOrganizacion, 
  onClearOrganizacion, 
  onSelectCurso 
}: CoursesProps) {
  const [tab, setTab] = useState<TabPrincipal>("jovenes");
  const [subCategoria, setSubCategoria] = useState<string>("todas");
  const [busqueda, setBusqueda] = useState<string>("");

  // Subcategorías minimalistas (chips ovalados planos sin emojis)
  const subCategorias = useMemo<CategoriaFiltro[]>(() => {
    if (tab === "jovenes") {
      return [
        { key: "todas", label: "Todos los Jóvenes" },
        { key: "adolescentes", label: "Adolescentes" },
        { key: "jovenes", label: "Jóvenes" },
        { key: "jovenesAdultos", label: "Jóvenes Adultos" },
      ];
    } else {
      return [
        { key: "todas", label: "Todos los Adultos" },
        { key: "mujeres", label: "Mujeres" },
        { key: "hombres", label: "Hombres" },
        { key: "profesionales", label: "Profesionales" },
      ];
    }
  }, [tab]);

  // Si cambia de pestaña, reiniciar subfiltro
  useEffect(() => {
    setSubCategoria("todas");
  }, [tab]);

  // Filtrado reactivo de cursos (Búsqueda + Pestaña + Subcategoría + Organización externa)
  const cursosFiltrados = useMemo(() => {
    return CURSOS.filter((curso) => {
      // 1. Filtrado por organización externa (desde el organigrama)
      if (selectedOrganizacion && curso.organizacion.toLowerCase() !== selectedOrganizacion.toLowerCase()) {
        return false;
      }

      // 2. Filtrado por Pestaña Principal (Jóvenes vs Adultos)
      const esJoven = ["adolescentes", "jovenes", "jovenesAdultos"].includes(curso.categoria);
      if (tab === "jovenes" && !esJoven) return false;
      if (tab === "adultos" && esJoven) return false;

      // 3. Filtrado por Subcategoría específica
      if (subCategoria !== "todas" && curso.categoria !== subCategoria) {
        return false;
      }

      // 4. Filtrado por Buscador de texto en tiempo real
      if (busqueda.trim() !== "") {
        const query = busqueda.toLowerCase();
        const enNombre = curso.nombre.toLowerCase().includes(query);
        const enDesc = curso.descripcion.toLowerCase().includes(query);
        const enOrg = curso.organizacion.toLowerCase().includes(query);
        return enNombre || enDesc || enOrg;
      }

      return true;
    });
  }, [selectedOrganizacion, tab, subCategoria, busqueda]);

  return (
    <section id="cursos" className={styles.coursesSection}>
      <div className={styles.contenedorFull}>
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className={styles.header}>
          <span className={styles.etiqueta}>Catálogo Educativo</span>
          <h2 className={styles.titulo}>Nuestros Cursos Gratuitos</h2>
          <p className={styles.subtitulo}>
            Elige el programa que se adapta a tu etapa de vida. Desarrolla tus habilidades, fortalece tu liderazgo y construye tu futuro de manera <span className="acento-italico">100% gratuita</span>.
          </p>
        </div>

        {/* CONTROLES DE BÚSQUEDA Y FILTRADO ULTRA MINIMALISTAS */}
        <div className={styles.controles}>
          <div className={styles.controlesFila}>
            
            {/* Pestañas Principales (Chips en caja blanca) */}
            <div className={styles.pestanasBox}>
              <button
                className={`${styles.pestanaBtn} ${tab === "jovenes" ? styles.pestanaActiva : ""}`}
                onClick={() => setTab("jovenes")}
              >
                Jóvenes
              </button>
              <button
                className={`${styles.pestanaBtn} ${tab === "adultos" ? styles.pestanaActiva : ""}`}
                onClick={() => setTab("adultos")}
              >
                Adultos
              </button>
            </div>

            {/* Buscador minimalista de línea fina */}
            <div className={styles.buscador}>
              <Search className={styles.buscadorIcono} size={16} />
              <input
                type="text"
                className={styles.buscadorInput}
                placeholder="Buscar programas..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

          </div>

          {/* Subfiltros en chips ovalados planos */}
          <div className={styles.subfiltros}>
            {subCategorias.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.subfiltroBtn} ${subCategoria === cat.key ? styles.subfiltroActivo : ""}`}
                onClick={() => setSubCategoria(cat.key)}
              >
                {cat.label}
              </button>
            ))}

            {/* Indicador de filtro externo */}
            {selectedOrganizacion && (
              <div className={styles.filtroExternoBadge}>
                <span>Red: <strong>{selectedOrganizacion}</strong></span>
                <button 
                  onClick={onClearOrganizacion} 
                  className={styles.clearFiltroBtn}
                  title="Quitar filtro de red"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>

        {/* LISTA HORIZONTAL MINIMALISTA EDITORIAL (ESTILO WHOSANGELFLORES) */}
        <div className={styles.listaCursos}>
          {cursosFiltrados.length > 0 ? (
            cursosFiltrados.map((curso) => (
              <article key={curso.id} className={styles.filaCurso}>
                
                {/* Columna 1: Nombre de la Organización/Programa (Título principal grande estilo Angel Flores) */}
                <div className={styles.colOrganizacion}>
                  <h3 className={styles.orgNombre}>{curso.organizacion}</h3>
                </div>

                {/* Columna 2: Nombre del Curso & Descripción (Bloque de texto explicativo a la derecha) */}
                <div className={styles.colInformacion}>
                  <h4 className={styles.cursoNombre}>{curso.nombre}</h4>
                  <p className={styles.cursoDescripcion}>{curso.descripcion}</p>
                </div>

                {/* Columna 3: Información de Horarios (Chips ovalados finos) */}
                <div className={styles.colMetadatos}>
                  <span className={styles.chipMeta}>{curso.dias}</span>
                  <span className={styles.chipMeta}>{curso.horario}</span>
                </div>

                {/* Columna 4: Enlaces y Acciones Minimalistas (Flecha Inclinada ↗) */}
                <div className={styles.colAcciones}>
                  
                  {/* Botón de inscripción rápida: Abre Modal */}
                  <button 
                    onClick={() => onSelectCurso(curso)}
                    className={styles.btnInscripcionRapida}
                    title="Inscribirse Gratis al Curso"
                    aria-label={`Inscribirse al curso ${curso.nombre}`}
                  >
                    <ArrowUpRight className={styles.flechaDiagonal} size={22} />
                  </button>

                  {/* Enlace sutil al programa detallado */}
                  <Link href={`/cursos/${curso.id}`} className={styles.enlacePrograma}>
                    Ver programa →
                  </Link>

                </div>

              </article>
            ))
          ) : (
            /* ESTADO VACÍO (SIN RESULTADOS) */
            <div className={styles.sinResultados}>
              <AlertCircle className={styles.sinResultadosIcono} size={38} />
              <h3 className={styles.sinResultadosTitulo}>No se encontraron programas</h3>
              <p className={styles.sinResultadosDesc}>
                Prueba borrando los términos de búsqueda o restableciendo los filtros de categoría.
              </p>
              <button 
                onClick={() => {
                  setBusqueda("");
                  setSubCategoria("todas");
                  onClearOrganizacion();
                }}
                className={styles.btnReset}
              >
                <RefreshCw size={14} />
                <span>Restablecer Catálogo</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
