"use client";

import { CONFIG_GLOBAL } from "../data/organizaciones";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  
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
    <footer className={styles.footer}>
      <div className="contenedor">
        <div className={styles.grid}>
          {/* Columna 1: Marca & Redes */}
          <div className={styles.marcaCol}>
            <div className={styles.logo}>
              <span className={styles.logoIcono} role="img" aria-label="Logo SERVIR">🌿</span>
              <span>{CONFIG_GLOBAL.nombreInstitucion}</span>
            </div>
            <p className={styles.descripcion}>
              {CONFIG_GLOBAL.misionTexto}
            </p>
            
            {/* Alianzas estratégicas */}
            <div className={styles.alianzasSubt}>Alianzas Estratégicas</div>
            <div className={styles.alianzasFooter}>
              {CONFIG_GLOBAL.alianzas.map((alianza, idx) => (
                <span key={idx} className={styles.alianzaBadge} title={alianza.descripcion}>
                  {alianza.abreviatura}
                </span>
              ))}
            </div>

            {/* Redes Sociales (SVG inline oficiales nativos para compatibilidad absoluta) */}
            <div className={styles.redes}>
              <a href={CONFIG_GLOBAL.redes.facebook} target="_blank" rel="noopener noreferrer" className={styles.redIcono} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={CONFIG_GLOBAL.redes.instagram} target="_blank" rel="noopener noreferrer" className={styles.redIcono} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="3"/><path d="M17.5 6.5h.01"/></svg>
              </a>
              <a href={CONFIG_GLOBAL.redes.youtube} target="_blank" rel="noopener noreferrer" className={styles.redIcono} aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/></svg>
              </a>
              <a href={CONFIG_GLOBAL.redes.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.redIcono} aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.962-1.418A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Programas */}
          <div>
            <h4 className={styles.tituloCol}>Programas</h4>
            <ul className={styles.listaEnlaces}>
              <li>
                <a href="#cursos" onClick={(e) => handleScrollToSection(e, "cursos")}>
                  Para Adolescentes
                </a>
              </li>
              <li>
                <a href="#cursos" onClick={(e) => handleScrollToSection(e, "cursos")}>
                  Para Jóvenes
                </a>
              </li>
              <li>
                <a href="#cursos" onClick={(e) => handleScrollToSection(e, "cursos")}>
                  Para Mujeres
                </a>
              </li>
              <li>
                <a href="#cursos" onClick={(e) => handleScrollToSection(e, "cursos")}>
                  Para Hombres
                </a>
              </li>
              <li>
                <a href="#cursos" onClick={(e) => handleScrollToSection(e, "cursos")}>
                  Para Profesionales
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Organización */}
          <div>
            <h4 className={styles.tituloCol}>Organización</h4>
            <ul className={styles.listaEnlaces}>
              <li>
                <a href="#sobre-nosotros" onClick={(e) => handleScrollToSection(e, "sobre-nosotros")}>
                  Sobre SERVIR
                </a>
              </li>
              <li>
                <a href="#publico" onClick={(e) => handleScrollToSection(e, "publico")}>
                  ¿A quiénes ayudamos?
                </a>
              </li>
              <li>
                <a href="#nuestra-red" onClick={(e) => handleScrollToSection(e, "nuestra-red")}>
                  Nuestra Red Aliada
                </a>
              </li>
              <li>
                <a href="#cursos" onClick={(e) => handleScrollToSection(e, "cursos")}>
                  Cursos Disponibles
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className={styles.tituloCol}>Contacto</h4>
            <div className={styles.contactoInfo}>
              <div className={styles.contactoItem}>
                <MapPin className={styles.contactoIcono} size={18} />
                <div className={styles.contactoTextos}>
                  <strong>Dirección</strong>
                  <span>{CONFIG_GLOBAL.contacto.direccion}</span>
                </div>
              </div>
              <div className={styles.contactoItem}>
                <Phone className={styles.contactoIcono} size={18} />
                <div className={styles.contactoTextos}>
                  <strong>Llámanos / WhatsApp</strong>
                  <a href={CONFIG_GLOBAL.redes.whatsapp} target="_blank" rel="noopener noreferrer">
                    {CONFIG_GLOBAL.contacto.telefono}
                  </a>
                </div>
              </div>
              <div className={styles.contactoItem}>
                <Mail className={styles.contactoIcono} size={18} />
                <div className={styles.contactoTextos}>
                  <strong>Correo Electrónico</strong>
                  <a href={`mailto:${CONFIG_GLOBAL.contacto.email}`}>
                    {CONFIG_GLOBAL.contacto.email}
                  </a>
                </div>
              </div>
              <div className={styles.contactoItem}>
                <Clock className={styles.contactoIcono} size={18} />
                <div className={styles.contactoTextos}>
                  <strong>Horario de atención</strong>
                  <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.separador} />

        <div className={styles.inferior}>
          <p>© {new Date().getFullYear()} {CONFIG_GLOBAL.nombreInstitucion}. Todos los derechos reservados.</p>
          <p>Organización Civil de Prevención y Valores · Santa Cruz, Bolivia</p>
        </div>
      </div>
    </footer>
  );
}
