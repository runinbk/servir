"use client";

import { useEffect, useState } from "react";
import { CONFIG_GLOBAL } from "../data/organizaciones";
import { BookOpen, ChevronRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const slides = [
    "/assets/hero/1.jpeg",
    "/assets/hero/2.jpeg",
    "/assets/hero/3.jpeg",
    "/assets/hero/4.jpeg",
    "/assets/hero/5.jpeg",
    "/assets/hero/6.jpeg",
    "/assets/hero/7.jpeg",
    "/assets/hero/8.jpeg"
  ];

  // Temporizador para el carrusel de fondo (cambia cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <section id="hero" className={styles.hero}>
      
      {/* 1. CARRUSEL DE IMÁGENES DE FONDO (CARGA DINÁMICA DE 8 FOTOS DE ACCIÓN SOCIAL) */}
      <div className={styles.carruselContenedor}>
        {slides.map((src, index) => (
          <div 
            key={index}
            className={`${styles.carruselSlide} ${currentSlide === index ? styles.carruselSlideActive : ""}`}
            style={{ backgroundImage: `url('${src}')` }}
          ></div>
        ))}
      </div>

      {/* 2. CAPA DE ATENUACIÓN (OVERLAY CLARO) */}
      <div className={styles.overlay}></div>

      {/* 3. CONTENIDO PRINCIPAL FLOTANTE */}
      <div className="contenedor">
        <div className={styles.contenedor}>
          <div className={styles.texto}>
            
            <div className={`${styles.badge} anim-fade-in-up`}>
              🌿 25 Organizaciones · Cursos 100% Gratuitos
            </div>
            
            <h1 className={`${styles.titulo} anim-fade-in-up`}>
              Construyendo un Futuro <br />
              <span className="acento-italico">Sin Violencia</span> <br />
              con Valores Reales
            </h1>

            <p className={`${styles.subtitulo} anim-fade-in-up`} style={{ animationDelay: "0.12s" }}>
              {CONFIG_GLOBAL.subtituloHero}
            </p>

            <div className={`${styles.acciones} anim-fade-in-up`} style={{ animationDelay: "0.22s" }}>
              <a 
                href="#cursos" 
                onClick={(e) => handleScrollToSection(e, "cursos")} 
                className="btn btn-primario"
              >
                <BookOpen size={18} />
                {CONFIG_GLOBAL.ctaHeroPrimario}
              </a>
              <a 
                href="#sobre-nosotros" 
                onClick={(e) => handleScrollToSection(e, "sobre-nosotros")} 
                className="btn btn-secundario"
              >
                {CONFIG_GLOBAL.ctaHeroSecundario}
                <ChevronRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Ola Decorativa Inferior */}
      <div className={styles.ola}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 1080,40 1440,15 L1440,40 Z"></path>
        </svg>
      </div>

    </section>
  );
}
