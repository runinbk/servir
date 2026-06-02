"use client";

import { useState } from "react";
import { ORGANIZACIONES } from "../data/organizaciones";
import { ChevronDown, Network as NetworkIcon, Search, HelpCircle } from "lucide-react";
import styles from "./Network.module.css";

interface NetworkProps {
  onSelectOrganizacion: (orgNombre: string) => void;
}

export default function Network({ onSelectOrganizacion }: NetworkProps) {
  const [jovenesOpen, setJovenesOpen] = useState<boolean>(true);
  const [adultosOpen, setAdultosOpen] = useState<boolean>(true);

  // Filtrar organizaciones según división y subgrupo
  const orgsJovenes = ORGANIZACIONES.filter((o) => o.division === "jovenes");
  const orgsAdultos = ORGANIZACIONES.filter((o) => o.division === "adultos");

  // Agrupamiento por subgrupo
  const jovenesAdolescentes = orgsJovenes.filter((o) => o.subgrupo === "adolescentes");
  const jovenesJovenes = orgsJovenes.filter((o) => o.subgrupo === "jovenes");
  const jovenesAdultos = orgsJovenes.filter((o) => o.subgrupo === "jovenes-adultos");

  const adultosMujeres = orgsAdultos.filter((o) => o.subgrupo === "mujeres");
  const adultosHombres = orgsAdultos.filter((o) => o.subgrupo === "hombres");
  const adultosProfesionales = orgsAdultos.filter((o) => o.subgrupo === "profesionales");

  const handleOrgClick = (orgNombre: string) => {
    // 1. Invocar el callback para pre-filtrar el catálogo en el componente padre
    onSelectOrganizacion(orgNombre);

    // 2. Hacer scroll fluido hacia la sección de cursos
    const element = document.getElementById("cursos");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="nuestra-red" className={styles.network}>
      <div className="contenedor">
        <div className="texto-centro">
          <span className="etiqueta-seccion">Estructura Organizacional</span>
          <h2 className="seccion-titulo">Nuestra Red de Organizaciones</h2>
          <p className="seccion-subtitulo">
            SERVIR es una sólida alianza de organizaciones civiles especializadas en diversos públicos. Haz clic en cualquier organización para explorar sus cursos gratuitos.
          </p>
        </div>

        {/* CÚSPIDE: NODO PRINCIPAL SERVIR */}
        <div className={styles.cuspide}>
          <div className={styles.nodoServir}>
            <span className={styles.servirNombre}>🌿 SERVIR</span>
            <span className={styles.servirDesc}>Organización Civil Paraguas</span>
          </div>
        </div>

        {/* LÍNEAS CONECTORAS VISUALES */}
        <div className={styles.conectorVertical}></div>
        <div className={styles.conectorHorizontalContainer}>
          <div className={`${styles.conectorExtremo} ${styles.extremoIzquierdo}`}></div>
          <div className={`${styles.conectorExtremo} ${styles.extremoDerecho}`}></div>
        </div>

        {/* DOS GRANDES DIVISIONES (ACORDEONES INTERACTIVOS) */}
        <div className={styles.grid}>
          <div className={styles.divisionesGrid}>
            
            {/* 1. DIVISION: JÓVENES */}
            <div 
              className={`${styles.divisionCard} ${jovenesOpen ? styles.divisionActiva : ""}`}
              onClick={() => setJovenesOpen(!jovenesOpen)}
              role="button"
              aria-expanded={jovenesOpen}
            >
              <div className={styles.divisionHeader}>
                <div className={styles.divisionTituloBox}>
                  <h3 className={styles.divisionTitulo}>
                    🌱 Organización de Jóvenes
                  </h3>
                  <span className={styles.divisionMeta}>
                    10 Organizaciones · Adolescentes, Jóvenes y Universitarios
                  </span>
                </div>
                <div className={styles.divisionToggleIcon}>
                  <ChevronDown size={18} />
                </div>
              </div>

              {jovenesOpen && (
                <div className={styles.divisionCuerpo} onClick={(e) => e.stopPropagation()}>
                  
                  {/* Adolescentes */}
                  <div className={styles.subgrupoBox}>
                    <h4 className={styles.subgrupoTitulo}>👦 Jóvenes Adolescentes</h4>
                    <div className={styles.chipsFlex}>
                      {jovenesAdolescentes.map((org) => (
                        <button
                          key={org.id}
                          className={styles.chipOrganizacion}
                          style={{ backgroundColor: org.color }}
                          onClick={() => handleOrgClick(org.nombre)}
                          title={org.descripcion}
                        >
                          <span>{org.emoji}</span>
                          <span>{org.nombre}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Jóvenes */}
                  <div className={styles.subgrupoBox}>
                    <h4 className={styles.subgrupoTitulo}>🧑 Jóvenes</h4>
                    <div className={styles.chipsFlex}>
                      {jovenesJovenes.map((org) => (
                        <button
                          key={org.id}
                          className={styles.chipOrganizacion}
                          style={{ backgroundColor: org.color }}
                          onClick={() => handleOrgClick(org.nombre)}
                          title={org.descripcion}
                        >
                          <span>{org.emoji}</span>
                          <span>{org.nombre}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Jóvenes Adultos */}
                  <div className={styles.subgrupoBox}>
                    <h4 className={styles.subgrupoTitulo}>🧑‍💼 Jóvenes Adultos y Universitarios</h4>
                    <div className={styles.chipsFlex}>
                      {jovenesAdultos.map((org) => (
                        <button
                          key={org.id}
                          className={styles.chipOrganizacion}
                          style={{ backgroundColor: org.color }}
                          onClick={() => handleOrgClick(org.nombre)}
                          title={org.descripcion}
                        >
                          <span>{org.emoji}</span>
                          <span>{org.nombre}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* 2. DIVISION: ADULTOS */}
            <div 
              className={`${styles.divisionCard} ${adultosOpen ? styles.divisionActiva : ""}`}
              onClick={() => setAdultosOpen(!adultosOpen)}
              role="button"
              aria-expanded={adultosOpen}
            >
              <div className={styles.divisionHeader}>
                <div className={styles.divisionTituloBox}>
                  <h3 className={styles.divisionTitulo}>
                    🌳 Organización de Adultos
                  </h3>
                  <span className={styles.divisionMeta}>
                    12 Organizaciones · Mujeres, Hombres y Profesionales
                  </span>
                </div>
                <div className={styles.divisionToggleIcon}>
                  <ChevronDown size={18} />
                </div>
              </div>

              {adultosOpen && (
                <div className={styles.divisionCuerpo} onClick={(e) => e.stopPropagation()}>
                  
                  {/* Mujeres */}
                  <div className={styles.subgrupoBox}>
                    <h4 className={styles.subgrupoTitulo}>👩 Mujeres</h4>
                    <div className={styles.chipsFlex}>
                      {adultosMujeres.map((org) => (
                        <button
                          key={org.id}
                          className={styles.chipOrganizacion}
                          style={{ backgroundColor: org.color }}
                          onClick={() => handleOrgClick(org.nombre)}
                          title={org.descripcion}
                        >
                          <span>{org.emoji}</span>
                          <span>{org.nombre}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hombres */}
                  <div className={styles.subgrupoBox}>
                    <h4 className={styles.subgrupoTitulo}>👨 Hombres</h4>
                    <div className={styles.chipsFlex}>
                      {adultosHombres.map((org) => (
                        <button
                          key={org.id}
                          className={styles.chipOrganizacion}
                          style={{ backgroundColor: org.color }}
                          onClick={() => handleOrgClick(org.nombre)}
                          title={org.descripcion}
                        >
                          <span>{org.emoji}</span>
                          <span>{org.nombre}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Profesionales */}
                  <div className={styles.subgrupoBox}>
                    <h4 className={styles.subgrupoTitulo}>💼 Profesionales y Negocios</h4>
                    <div className={styles.chipsFlex}>
                      {adultosProfesionales.map((org) => (
                        <button
                          key={org.id}
                          className={styles.chipOrganizacion}
                          style={{ backgroundColor: org.color }}
                          onClick={() => handleOrgClick(org.nombre)}
                          title={org.descripcion}
                        >
                          <span>{org.emoji}</span>
                          <span>{org.nombre}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>

        <div className={styles.guiaInteractiva}>
          <Search size={14} />
          <span>Tip: Al hacer clic en una organización se pre-filtrarán automáticamente sus cursos abajo.</span>
        </div>
      </div>
    </section>
  );
}
