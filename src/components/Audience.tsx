"use client";

import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Heart, 
  Palette, 
  Trophy, 
  Rocket,
  ArrowRight
} from "lucide-react";
import styles from "./Audience.module.css";

interface Beneficiario {
  id: string;
  nombre: string;
  desc: string;
  icono: React.ReactNode;
  imagenFallback: string;
}

export default function Audience() {
  const [activoIdx, setActivoIdx] = useState<number>(3); // Familias activo por defecto, igual al mockup
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const beneficiarios: Beneficiario[] = [
    {
      id: "colegiales",
      nombre: "Colegiales",
      desc: "Estudiantes escolares en etapa formativa que requieren fortalecer su autoestima, liderazgo e incorporar valores de convivencia para prevenir activamente el bullying y la violencia juvenil.",
      icono: <GraduationCap size={18} />,
      imagenFallback: "/assets/a quienes ayudamos/colegiales.jpeg"
    },
    {
      id: "universitarios",
      nombre: "Universitarios",
      desc: "Jóvenes de educación superior enfocados en encontrar su propósito personal, desarrollar liderazgo ético y generar impacto comunitario en favor de los sectores más vulnerables de Bolivia.",
      icono: <BookOpen size={18} />,
      imagenFallback: "/assets/a quienes ayudamos/universitarios.jpeg"
    },
    {
      id: "profesionales",
      nombre: "Profesionales",
      desc: "Personas activas en el mercado laboral y empresarial que buscan potenciar su liderazgo, networking corporativo y ética profesional para propiciar entornos corporativos más justos y transparentes.",
      icono: <Briefcase size={18} />,
      imagenFallback: "/assets/a quienes ayudamos/profecionales.jpeg" // Mantiene ortografía exacta del archivo físico
    },
    {
      id: "familias",
      nombre: "Familias",
      desc: "Núcleos familiares que desean construir y consolidar hogares sanos basados en el respeto mutuo, el amor y la formación integral en valores humanos para el sano desarrollo de la sociedad.",
      icono: <Heart size={18} />,
      imagenFallback: "/assets/a quienes ayudamos/familias.jpeg"
    },
    {
      id: "artistas",
      nombre: "Artistas",
      desc: "Creadores, músicos y pintores que encuentran en las expresiones artísticas y culturales un canal poderoso de transformación, rescate de valores e inclusión social en sus comunidades.",
      icono: <Palette size={18} />,
      imagenFallback: "/assets/a quienes ayudamos/artistas.jpeg"
    },
    {
      id: "deportistas",
      nombre: "Deportistas",
      desc: "Atletas y jóvenes deportistas que combinan la disciplina física intensiva con el desarrollo de la resiliencia mental, valores competitivos limpios y trabajo en equipo solidario.",
      icono: <Trophy size={18} />,
      imagenFallback: "/assets/a quienes ayudamos/deportistas.jpeg"
    },
    {
      id: "emprendedores",
      nombre: "Emprendedores",
      desc: "Personas con visión empresarial que buscan modelar sus ideas comerciales y construir negocios de impacto social, éticamente responsables y comprometidos con el desarrollo del país.",
      icono: <Rocket size={18} />,
      imagenFallback: "/assets/a quienes ayudamos/emprendedores.jpeg"
    }
  ];

  // Carrusel de autoreproducción (Avanza cada 7 segundos, se pausa al hacer hover)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActivoIdx((prev) => (prev + 1) % beneficiarios.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isHovered, beneficiarios.length]);

  const handleMouseEnter = (idx: number) => {
    setActivoIdx(idx);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const activo = beneficiarios[activoIdx];

  return (
    <section id="publico" className={styles.publicoSection}>
      
      {/* 1. IMAGEN DE FONDO DINÁMICA CON TRANSICIÓN SUAVE */}
      <div 
        className={styles.imagenFondo} 
        style={{ backgroundImage: `url('${activo.imagenFallback}')` }}
      ></div>

      {/* 2. OVERLAY DE GRADIENTE EDITORIAL PARA FUSIONAR IMAGEN CON TEXTOS */}
      <div className={styles.gradienteOverlay}></div>

      {/* 3. CONTENEDOR FLOTANTE ASIMÉTRICO DE ANCHO COMPLETO */}
      <div className={styles.contenedorFull}>
        <div className={styles.publicoGrid}>
          
          {/* PANEL IZQUIERDO: TARJETA BLANCA DE CONTROL E INFORMACIÓN */}
          <div className={styles.panelControl}>
            
            <div className={styles.panelHeader}>
              <span className={styles.etiqueta}>Beneficiarios</span>
              <h2 className={styles.titulo}>¿A quiénes ayudamos?</h2>
              
              {/* DESCRIPCIÓN DINÁMICA DEL PÚBLICO SELECCIONADO */}
              <div className={styles.descripcionBox}>
                <p className={styles.descripcionText}>{activo.desc}</p>
              </div>
            </div>

            {/* MENÚ DE SELECCIÓN VERTICAL INTERACTIVO CON EVENTOS DE HOVER */}
            <div className={styles.menuVertical}>
              {beneficiarios.map((item, idx) => {
                const esActivo = idx === activoIdx;
                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setActivoIdx(idx)}
                    className={`${styles.menuBtn} ${esActivo ? styles.menuBtnActivo : ""}`}
                    aria-label={`Mostrar información para ${item.nombre}`}
                  >
                    <span className={styles.menuBtnIcono}>{item.icono}</span>
                    <span className={styles.menuBtnNombre}>{item.nombre}</span>
                    
                    {esActivo && (
                      <ArrowRight className={styles.flechaActiva} size={15} />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* ESPACIADOR DERECHO: Deja visible la fotografía de las personas */}
          <div className={styles.espacioVisual}></div>

        </div>
      </div>

    </section>
  );
}
