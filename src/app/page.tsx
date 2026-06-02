"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Audience from "../components/Audience";
import Network from "../components/Network";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Modal from "../components/ui/Modal";
import { Curso } from "../types";
import { Send, BookOpen } from "lucide-react";
import { CONFIG_GLOBAL } from "../data/organizaciones";

export default function Home() {
  const [selectedOrgExterno, setSelectedOrgExterno] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedCurso, setSelectedCurso] = useState<Curso | null>(null);
  const [loadingPage, setLoadingPage] = useState<boolean>(true);

  // Preloader suave de 1.1s para permitir montaje de activos e imágenes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  // Callback del organigrama para filtrar cursos
  const handleSelectOrganizacion = (orgNombre: string) => {
    setSelectedOrgExterno(orgNombre);
  };

  const handleClearOrganizacion = () => {
    setSelectedOrgExterno("");
  };

  // Callback del catálogo para abrir inscripción a un curso
  const handleSelectCurso = (curso: Curso) => {
    setSelectedCurso(curso);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Scroll suave al catálogo de cursos
  const handleScrollToCursos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
    <>
      {/* PANTALLA DE CARGA INICIAL PREMIUM (PRELOADER INSTITUCIONAL DE FADE-OUT) */}
      {loadingPage && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#F5F6F4",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div 
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem"
            }}
          >
            <img 
              src="/assets/logo-icono-servir.png" 
              alt="Cargando SERVIR..." 
              style={{
                width: "90px",
                height: "90px",
                animation: "pulseScale 1.8s infinite ease-in-out",
                borderRadius: "50%",
                boxShadow: "0 8px 30px rgba(18, 31, 23, 0.08)"
              }}
            />
            <style>{`
              @keyframes pulseScale {
                0% { transform: scale(0.95); opacity: 0.8; }
                50% { transform: scale(1.05); opacity: 1; }
                100% { transform: scale(0.95); opacity: 0.8; }
              }
            `}</style>
            <span 
              style={{
                fontFamily: "var(--font-family-title)",
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-text-secondary)"
              }}
            >
              Cargando SERVIR
            </span>
          </div>
        </div>
      )}

      {/* MENÚ DE NAVEGACIÓN GLOBAL */}
      <Navbar />

      <main style={{ minHeight: "100vh" }}>
        
        {/* 1. SECCIÓN HERO (BIENVENIDA & ESTADÍSTICAS) */}
        <Hero />

        {/* 1.5. SECCIÓN ESTADÍSTICAS E IMPACTO SOCIAL */}
        <Stats />

        {/* 2. SECCIÓN SOBRE NOSOTROS (MISIÓN, VALORES & ALIANZAS) */}
        <About />

        {/* 3. SECCIÓN A QUIÉNES AYUDAMOS (PÚBLICOS OBJETIVOS) */}
        <Audience />

        {/* 4. SECCIÓN NUESTRA RED (ORGANIGRAMA INTERACTIVO) */}
        <Network onSelectOrganizacion={handleSelectOrganizacion} />

        {/* 5. SECCIÓN CURSOS GRATUITOS (CATÁLOGO FILTRABLE CON BUSCADOR) */}
        <Courses 
          selectedOrganizacion={selectedOrgExterno}
          onClearOrganizacion={handleClearOrganizacion}
          onSelectCurso={handleSelectCurso}
        />

        {/* 6. SECCIÓN LLAMADO A LA ACCIÓN (CTA FINAL) */}
        <section 
          id="contacto"
          style={{
            padding: "6rem 0",
            background: `linear-gradient(135deg, var(--color-brand-primary-medium) 0%, #060B08 100%)`,
            color: "#FFFFFF",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Fondo decorativo sutil */}
          <div 
            style={{
              position: "absolute",
              top: "-50%",
              left: "-30%",
              width: "80%",
              height: "200%",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 60%)",
              pointerEvents: "none"
            }}
          ></div>
          
          <div className="contenedor" style={{ position: "relative", zIndex: 2 }}>
            <span 
              className="etiqueta-seccion"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "var(--color-brand-gold)",
                border: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              ¡Comienza hoy!
            </span>
            <h2 className="seccion-titulo" style={{ color: "#FFFFFF", fontSize: "2.5rem" }}>
              ¿Listo para transformar tu futuro?
            </h2>
            <p 
              className="seccion-subtitulo" 
              style={{ 
                color: "rgba(255, 255, 255, 0.8)", 
                marginBottom: "2.5rem",
                maxWidth: "600px"
              }}
            >
              Únete a miles de personas que ya se capacitan y lideran el cambio social en sus comunidades a través de la educación gratuita.
            </p>

            <div 
              style={{
                display: "flex",
                gap: "1.2rem",
                justifyContent: "center",
                flexWrap: "wrap"
              }}
            >
              <a 
                href="#cursos" 
                onClick={handleScrollToCursos}
                className="btn btn-blanco"
              >
                <BookOpen size={18} />
                Explorar Cursos Gratuitos
              </a>
              <a 
                href={CONFIG_GLOBAL.redes.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primario"
                style={{
                  backgroundColor: "#25D366", // Color oficial de WhatsApp
                  borderColor: "transparent",
                  boxShadow: "0 4px 14px 0 rgba(37, 211, 102, 0.3)"
                }}
              >
                <Send size={16} style={{ transform: "rotate(-45deg) translateY(-1px) translateX(1px)" }} />
                Consultas por WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER GLOBAL */}
      <Footer />

      {/* MODAL DE INSCRIPCIÓN INTERACTIVO */}
      <Modal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        curso={selectedCurso}
      />
    </>
  );
}
