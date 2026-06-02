"use client";

import { useState, useEffect } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { CONFIG_GLOBAL } from "../data/organizaciones";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Secciones a espiar en la Home
  const secciones = ["hero", "sobre-nosotros", "publico", "nuestra-red", "cursos"];
  const seccionActiva = useScrollSpy(secciones, 120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEnlaceClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura aproximada del navbar
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
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.contenedor}>
        {/* LOGO INSTITUCIONAL */}
        <a href="#hero" onClick={(e) => handleEnlaceClick(e, "hero")} className={styles.logo} aria-label="Volver al inicio">
          <img 
            src="/assets/logo-navbar-servir.png" 
            alt="Logo SERVIR" 
            className={styles.logoImg}
          />
        </a>

        {/* MENÚ DE NAVEGACIÓN */}
        <ul className={`${styles.menu} ${menuOpen ? styles.menuAbierto : ""}`}>
          <li>
            <a 
              href="#sobre-nosotros" 
              onClick={(e) => handleEnlaceClick(e, "sobre-nosotros")}
              className={`${styles.enlace} ${seccionActiva === "sobre-nosotros" ? styles.enlaceActivo : ""}`}
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a 
              href="#publico" 
              onClick={(e) => handleEnlaceClick(e, "publico")}
              className={`${styles.enlace} ${seccionActiva === "publico" ? styles.enlaceActivo : ""}`}
            >
              ¿A Quiénes Ayudamos?
            </a>
          </li>
          <li>
            <a 
              href="#nuestra-red" 
              onClick={(e) => handleEnlaceClick(e, "nuestra-red")}
              className={`${styles.enlace} ${seccionActiva === "nuestra-red" ? styles.enlaceActivo : ""}`}
            >
              Nuestra Red
            </a>
          </li>
          <li>
            <a 
              href="#cursos" 
              onClick={(e) => handleEnlaceClick(e, "cursos")}
              className={`${styles.enlace} ${seccionActiva === "cursos" ? styles.enlaceActivo : ""}`}
            >
              Cursos Gratuitos
            </a>
          </li>
          <li>
            <a 
              href="#contacto" 
              onClick={(e) => handleEnlaceClick(e, "contacto")}
              className={`${styles.enlace} ${styles.cta}`}
            >
              Inscríbete gratis
            </a>
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <button 
          className={`${styles.hamburguesa} ${menuOpen ? styles.hamburguesaActiva : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
