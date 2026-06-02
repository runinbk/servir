"use client";

import { CONFIG_GLOBAL } from "../data/organizaciones";
import styles from "./About.module.css";

interface PilarProps {
  numero: string;
  titulo: string;
  descripcion: string;
}

function PilarCard({ numero, titulo, descripcion }: PilarProps) {
  return (
    <div className={styles.pilarCard}>
      <div className={styles.pilarHeader}>
        <span className={styles.pilarNumero}>{numero}</span>
        <h4 className={styles.pilarTitulo}>{titulo}</h4>
      </div>
      <p className={styles.pilarDesc}>{descripcion}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="sobre-nosotros" className={styles.aboutSection}>
      <div className={styles.contenedorFull}>
        
        {/* BLOQUE 1: DECLARACIÓN DE MISIÓN ASIMÉTRICA */}
        <div className={styles.misionBloque}>
          
          <div className={styles.misionIzquierda}>
            <span className={styles.etiqueta}>Nuestra Misión</span>
            <h2 className={styles.tituloGigante}>
              Somos el cambio <br />
              que la <span className="acento-italico">comunidad</span> <br />
              necesita
            </h2>
          </div>

          <div className={styles.misionDerecha}>
            <p className={styles.textoDestacado}>
              <strong>SERVIR</strong> es una sólida organización paraguas que nuclea y coordina de forma activa a <strong>25 organizaciones civiles sin fines de lucro</strong> en toda Bolivia.
            </p>
            <p className={styles.textoCuerpo}>
              Trabajamos conjuntamente promoviendo principios y valores humanos esenciales como la herramienta más eficaz para la prevención integral del delito, las conductas de riesgo y la violencia. Canalizamos esfuerzos para inspirar un cambio de vida real y duradero en la juventud boliviana de manera <span className="acento-italico">100% gratuita</span>.
            </p>
            
            {/* Indicador de Red */}
            <div className={styles.redBadge}>
              <span className={styles.redBadgeEmoji}>🤝</span>
              <div className={styles.redBadgeTextos}>
                <strong>25 Organizaciones Civiles</strong>
                <span>Unidas bajo una misma visión nacional</span>
              </div>
            </div>
          </div>

        </div>

        {/* BLOQUE 2: BENTO GRID DE PILARES FUNDAMENTALES */}
        <div className={styles.pilaresBloque}>
          
          <div className={styles.pilaresIntro}>
            <span className={styles.etiqueta}>Valores Corporativos</span>
            <h3 className={styles.tituloPilares}>Pilares Fundamentales</h3>
            <p className={styles.subtituloPilares}>
              Guiamos nuestro accionar diario a través de cuatro bases conceptuales inquebrantables.
            </p>
          </div>

          <div className={styles.pilaresGrid}>
            <PilarCard 
              numero="01"
              titulo="Prevención"
              descripcion="Actuamos de forma proactiva antes de que surjan las problemáticas sociales, forjando el carácter y la resiliencia en niños y jóvenes."
            />
            <PilarCard 
              numero="02"
              titulo="Comunidad"
              descripcion="Coordinamos a 25 instituciones aliadas que operan bajo una visión unificada para alcanzar a cada rincón de la sociedad."
            />
            <PilarCard 
              numero="03"
              titulo="Gratuidad"
              descripcion="Creemos firmemente que el acceso al conocimiento y al liderazgo transformador no debe tener precio ni barreras financieras."
            />
            <PilarCard 
              numero="04"
              titulo="Transformación"
              descripcion="Impulsamos el desarrollo integral de las personas de adentro hacia afuera, inspirando cambios conductuales sostenibles en el tiempo."
            />
          </div>

        </div>

        {/* BLOQUE 3: ALIANZAS ESTRATÉGICAS BRUTALISTAS */}
        <div className={styles.alianzasBloque}>
          
          <div className={styles.alianzasHeader}>
            <span className={styles.etiquetaAlianza}>Alianzas</span>
            <h4 className={styles.alianzasTitulo}>Respaldados por Alianzas de Prestigio Internacional</h4>
          </div>

          <div className={styles.alianzasGrid}>
            {CONFIG_GLOBAL.alianzas.map((alianza, idx) => (
              <div key={idx} className={styles.alianzaCard}>
                <div className={styles.alianzaLogoBox}>
                  {alianza.abreviatura}
                </div>
                <div className={styles.alianzaInfo}>
                  <span className={styles.alianzaNombre}>{alianza.nombre}</span>
                  <span className={styles.alianzaDesc}>{alianza.descripcion}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
