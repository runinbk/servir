"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Stats.module.css";

export default function Stats() {
  const [organizacionesCount, setOrganizacionesCount] = useState<number>(0);
  const [estudiantesCount, setEstudiantesCount] = useState<number>(0);
  const [gratuidadCount, setGratuidadCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Observador para activar los contadores al scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animación numérica fluida
  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 1600; // 1.6 segundos

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // Easing out

      setOrganizacionesCount(Math.floor(easeProgress * 25));
      setEstudiantesCount(Math.floor(easeProgress * 500));
      setGratuidadCount(Math.floor(easeProgress * 100));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section id="estadisticas-impacto" ref={sectionRef} className={styles.statsSection}>
      <div className="contenedor">
        <div className={styles.grid}>
          
          {/* COLUMNA IZQUIERDA: PÁRRAFO DE IMPACTO MINIMALISTA */}
          <div className={styles.colTexto}>
            <span className={styles.subtitulo}>Nuestro Impacto Social</span>
            <p className={styles.textoImpacto}>
              Creemos firmemente que el acceso a un liderazgo ético y una formación robusta en valores no debe tener precio. Canalizamos esfuerzos comunitarios para inspirar un cambio de vida de manera <span className="acento-italico">100% gratuita</span> en todo el país.
            </p>
          </div>

          {/* COLUMNA DERECHA: NÚMEROS MONUMENTALES (BRUTALISTAS) */}
          <div className={styles.colNumeros}>
            
            {/* 1. Organizaciones */}
            <div className={styles.numBlock}>
              <span className={styles.numGigante}>{organizacionesCount}</span>
              <div className={styles.numMeta}>
                <span className={styles.numLabel}>Organizaciones</span>
                <span className={styles.numDesc}>Unidas bajo un mismo propósito</span>
              </div>
            </div>

            {/* 2. Estudiantes */}
            <div className={styles.numBlock}>
              <span className={styles.numGigante}>{estudiantesCount}+</span>
              <div className={styles.numMeta}>
                <span className={styles.numLabel}>Estudiantes Activos</span>
                <span className={styles.numDesc}>Capacitándose en valores hoy</span>
              </div>
            </div>

            {/* 3. Gratuidad */}
            <div className={styles.numBlock}>
              <span className={styles.numGigante}>{gratuidadCount}%</span>
              <div className={styles.numMeta}>
                <span className={styles.numLabel}>Gratuito</span>
                <span className={styles.numDesc}>Acceso libre de matrículas o cobros</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
