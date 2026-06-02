"use client";

import { use, useState } from "react";
import Link from "next/link";
import { CURSOS } from "../../../data/cursos";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Modal from "../../../components/ui/Modal";
import { 
  Calendar, 
  Clock, 
  Building2, 
  ArrowLeft, 
  AlertCircle,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import styles from "./CursoDetalle.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CursoDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Buscar el curso correspondiente
  const curso = CURSOS.find((c) => c.id === id);

  const handleInscribirse = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Si el curso no existe
  if (!curso) {
    return (
      <>
        <Navbar />
        <main className={styles.errorBox}>
          <AlertCircle className={styles.errorIcono} size={64} style={{ color: "#EF4444" }} />
          <h2 style={{ fontSize: "2rem", color: "var(--color-brand-primary)", fontWeight: 800 }}>
            Curso no encontrado
          </h2>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "420px" }}>
            El programa de capacitación que buscas no existe o ha sido modificado. Vuelve al catálogo para ver todos los cursos disponibles.
          </p>
          <Link href="/" className="btn btn-primario">
            <ArrowLeft size={16} />
            Volver al Catálogo Principal
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* NAVEGACIÓN GLOBAL */}
      <Navbar />

      <main className={styles.contenedorDetalle}>
        <div className="contenedor">
          
          {/* MIGAS DE PAN (BREADCRUMB) */}
          <div className={styles.migasDePan}>
            <Link href="/">Inicio</Link>
            <span>/</span>
            <Link href="/#cursos">Cursos Gratuitos</Link>
            <span>/</span>
            <span style={{ color: "var(--color-brand-primary)" }}>{curso.nombre}</span>
          </div>

          <div className={styles.grid}>
            
            {/* COLUMNA PRINCIPAL (INFO DETALLADA DEL CURSO) */}
            <article className={styles.mainContenido}>
              
              <div className={styles.header}>
                <span 
                  className={styles.orgBadge}
                  style={{ backgroundColor: curso.colorOrg }}
                >
                  {curso.emoji} {curso.organizacion}
                </span>
                <h1 className={styles.titulo}>{curso.nombre}</h1>
              </div>

              {/* Box Visual Premium */}
              <div className={styles.visualBox}>
                <div className={styles.visualPatron}></div>
                <span className={styles.visualEmoji}>{curso.emoji}</span>
              </div>

              {/* Descripción detallada */}
              <div className={styles.infoSeccion}>
                <h2 className={styles.seccionSubt}>Acerca del Programa</h2>
                <p className={styles.descripcion}>{curso.descripcion}</p>
                <p className={styles.descripcion} style={{ marginTop: "0.5rem" }}>
                  Este programa forma parte de las iniciativas de capacitación civil gratuitas coordinadas por SERVIR. Los talleres son de carácter práctico, dinámicos e interactivos, enfocados en brindar herramientas de formación de carácter, liderazgo ético y prevención del delito para promover una convivencia íntegra en la sociedad.
                </p>
              </div>

              {/* Qué incluye el curso */}
              <div className={styles.infoSeccion}>
                <h2 className={styles.seccionSubt}>¿Qué incluye la capacitación?</h2>
                <ul 
                  style={{ 
                    listStyle: "none", 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "0.8rem",
                    fontSize: "0.95rem",
                    color: "var(--color-text-secondary)"
                  }}
                >
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--color-brand-accent)", flexShrink: 0 }} />
                    <span>Acceso al 100% del programa educativo sin cobros ni matrículas.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--color-brand-accent)", flexShrink: 0 }} />
                    <span>Materiales de apoyo y guías prácticas digitales.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--color-brand-accent)", flexShrink: 0 }} />
                    <span>Clases dinámicas impartidas por facilitadores de la organización aliada.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--color-brand-accent)", flexShrink: 0 }} />
                    <span>Constancia digital de asistencia al finalizar la totalidad del programa.</span>
                  </li>
                </ul>
              </div>

            </article>

            {/* COLUMNA LATERAL (INFORMACIÓN DE HORARIO & ACCIÓN) */}
            <aside className={styles.sidebar}>
              
              <div className={styles.precioBox}>
                <span className={styles.precioLabel}>Costo del programa</span>
                <span className={styles.precioVal}>GRATUITO</span>
              </div>

              <div className={styles.metaLista}>
                
                <div className={styles.metaItem}>
                  <Building2 className={styles.metaIcono} size={20} />
                  <div className={styles.metaTextos}>
                    <strong>Organización Aliada</strong>
                    <span>{curso.organizacion}</span>
                  </div>
                </div>

                <div className={styles.metaItem}>
                  <Calendar className={styles.metaIcono} size={20} />
                  <div className={styles.metaTextos}>
                    <strong>Días de cursado</strong>
                    <span>{curso.dias}</span>
                  </div>
                </div>

                <div className={styles.metaItem}>
                  <Clock className={styles.metaIcono} size={20} />
                  <div className={styles.metaTextos}>
                    <strong>Horario establecido</strong>
                    <span>{curso.horario}</span>
                  </div>
                </div>

                <div className={styles.metaItem}>
                  <ShieldCheck className={styles.metaIcono} size={20} />
                  <div className={styles.metaTextos}>
                    <strong>Modalidad y Cupos</strong>
                    <span>Presencial / Cupos Limitados</span>
                  </div>
                </div>

              </div>

              <button 
                onClick={handleInscribirse}
                className={styles.btnInscribirse}
              >
                Inscribirse Gratis Ahora
              </button>

              <Link 
                href="/#cursos" 
                style={{ 
                  textAlign: "center", 
                  fontSize: "0.85rem", 
                  fontWeight: 600,
                  color: "var(--color-brand-primary-medium)",
                  marginTop: "0.5rem"
                }}
              >
                ← Volver a ver otros programas
              </Link>

            </aside>

          </div>

        </div>
      </main>

      {/* FOOTER GLOBAL */}
      <Footer />

      {/* MODAL DE INSCRIPCIÓN */}
      <Modal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        curso={curso}
      />
    </>
  );
}
