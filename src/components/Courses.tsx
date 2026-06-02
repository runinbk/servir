"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { CURSOS } from "../data/cursos";
import { Curso } from "../types";
import { Search, Calendar, Clock, ArrowRight, BookOpen, AlertCircle } from "lucide-react";
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

  // Definir subcategorías dinámicas según la pestaña principal
  const subCategorias = useMemo<CategoriaFiltro[]>(() => {
    if (tab === "jovenes") {
      return [
        { key: "todas", label: "🌱 Todos los Jóvenes" },
        { key: "adolescentes", label: "👦 Adolescentes" },
        { key: "jovenes", label: "🧑 Jóvenes" },
        { key: "jovenesAdultos", label: "🧑‍💼 Jóvenes Adultos" },
      ];
    } else {
      return [
        { key: "todas", label: "🌳 Todos los Adultos" },
        { key: "mujeres", label: "👩 Mujeres" },
        { key: "hombres", label: "👨 Hombres" },
        { key: "profesionales", label: "💼 Profesionales" },
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

  const handleInscribirseClick = (curso: Curso) => {
    onSelectCurso(curso);
  };

  return (
    <section id="cursos" className={styles.courses}>
      <div className="contenedor">
        <div className="texto-centro">
          <span className="etiqueta-seccion">Catálogo Educativo</span>
          <h2 className="seccion-titulo">Nuestros Cursos Gratuitos</h2>
          <p className="seccion-subtitulo">
            Elige el programa que se adapta a tu etapa de vida. Desarrolla tus habilidades, fortalece tu liderazgo y construye tu futuro. Todo es 100% gratuito.
          </p>
        </div>

        {/* PANEL DE FILTROS & BUSCADOR */}
        <div className={styles.controlesBox}>
          
          <div className={styles.controlesFilaSuperior}>
            {/* Pestañas Principales */}
            <div className={styles.pestanasFlex}>
              <button
                className={`${styles.pestanaBtn} ${tab === "jovenes" ? styles.pestanaActiva : ""}`}
                onClick={() => setTab("jovenes")}
              >
                🌱 Si eres Joven...
              </button>
              <button
                className={`${styles.pestanaBtn} ${tab === "adultos" ? styles.pestanaActiva : ""}`}
                onClick={() => setTab("adultos")}
              >
                🌳 Si eres Adulto...
              </button>
            </div>

            {/* Buscador inteligente */}
            <div className={styles.buscadorWrapper}>
              <Search className={styles.buscadorIcono} size={18} />
              <input
                type="text"
                className={styles.buscadorInput}
                placeholder="Busca por curso, descripción o red aliada..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>

          {/* Sub-filtros por categorías específicas */}
          <div className={styles.subfiltrosFlex}>
            {subCategorias.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.subfiltroBtn} ${subCategoria === cat.key ? styles.subfiltroActivo : ""}`}
                onClick={() => setSubCategoria(cat.key)}
              >
                {cat.label}
              </button>
            ))}

            {/* Banner indicador de filtro por organigrama externo */}
            {selectedOrganizacion && (
              <div className={styles.bannerFiltroOrg}>
                <span>Filtrado por: <strong>{selectedOrganizacion}</strong></span>
                <button 
                  onClick={onClearOrganizacion} 
                  className={styles.btnEliminarFiltro}
                  title="Eliminar filtro de organización"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

        </div>

        {/* GRID DE TARJETAS DE CURSOS */}
        <div className={styles.grid}>
          {cursosFiltrados.length > 0 ? (
            cursosFiltrados.map((curso) => (
              <article key={curso.id} className={styles.card}>
                
                {/* Cabecera Visual (Con Placeholder Vectorial Premium) */}
                <div className={styles.cardVisual}>
                  <div className={styles.cardVisualPatron}></div>
                  <span 
                    className={styles.orgTag} 
                    style={{ backgroundColor: curso.colorOrg }}
                  >
                    {curso.emoji} {curso.organizacion}
                  </span>
                  
                  <div className={styles.placeholderImg}>
                    <span className={styles.placeholderEmoji}>{curso.emoji}</span>
                  </div>
                </div>

                {/* Cuerpo de la Tarjeta */}
                <div className={styles.cardCuerpo}>
                  <h3 className={styles.cursoNombre} title={curso.nombre}>
                    {curso.nombre}
                  </h3>
                  
                  <p className={styles.cursoDesc}>
                    {curso.descripcion}
                  </p>

                  {/* Horarios e Info Práctica */}
                  <div className={styles.cursoInfoMeta}>
                    <div className={styles.metaItem}>
                      <Calendar className={styles.metaIcono} size={15} />
                      <span>{curso.dias}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock className={styles.metaIcono} size={15} />
                      <span>{curso.horario}</span>
                    </div>
                  </div>

                  {/* Botón de inscripción gratuito */}
                  <button 
                    onClick={() => handleInscribirseClick(curso)}
                    className={styles.btnInscribirse}
                  >
                    <BookOpen size={16} />
                    <span>Inscribirse Gratis</span>
                    <ArrowRight size={14} style={{ marginLeft: "auto" }} />
                  </button>

                  {/* Enlace de navegación real a subrutas de curso */}
                  <Link href={`/cursos/${curso.id}`} className={styles.linkDetalle}>
                    Ver programa detallado →
                  </Link>
                </div>

              </article>
            ))
          ) : (
            /* ESTADO VACÍO (SIN RESULTADOS) */
            <div className={styles.sinResultados}>
              <AlertCircle className={styles.sinResultadosIcono} size={48} style={{ color: "var(--color-brand-gold-dark)" }} />
              <h3 className={styles.sinResultadosTitulo}>No se encontraron programas</h3>
              <p className={styles.sinResultadosDesc}>
                No pudimos encontrar cursos que coincidan con los filtros o la búsqueda ingresada. Intenta borrar el buscador o seleccionar otra categoría.
              </p>
              <button 
                onClick={() => {
                  setBusqueda("");
                  setSubCategoria("todas");
                  onClearOrganizacion();
                }}
                className="btn btn-primario"
                style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem", marginTop: "0.5rem" }}
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
