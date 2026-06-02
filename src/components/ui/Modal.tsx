"use client";

import { useEffect, useState } from "react";
import { Curso } from "../../types";
import { X, Send, CheckCircle } from "lucide-react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  curso: Curso | null;
}

export default function Modal({ isOpen, onClose, curso }: ModalProps) {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);

  // Manejo de scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Tecla Escape para cerrar modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Resetear estados al cerrar/abrir
  useEffect(() => {
    if (isOpen) {
      setEnviado(false);
      setLoading(false);
      setNombre("");
      setEmail("");
      setTelefono("");
      setEdad("");
    }
  }, [isOpen]);

  if (!isOpen || !curso) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de envío API (1.5 segundos)
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
    }, 1500);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Cerrar solo si se hace clic exactamente en el fondo, no dentro del modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        
        {/* Botón cerrar */}
        <button 
          className={styles.cerrarBtn} 
          onClick={onClose}
          aria-label="Cerrar modal de inscripción"
        >
          <X size={18} />
        </button>

        <div className={styles.cuerpo}>
          {!enviado ? (
            <>
              {/* ENCABEZADO FORMULARIO */}
              <h3 id="modal-titulo" className={styles.titulo}>
                <span>🎓</span> Inscripción Gratuita
              </h3>
              <p className={styles.subtitulo}>
                Completa tus datos para reservar tu lugar en este programa. ¡No tiene ningún costo!
              </p>

              {/* CURSO SELECCIONADO */}
              <div className={styles.cursoInfoBox}>
                <h4 className={styles.cursoNombre}>{curso.nombre}</h4>
                <div className={styles.cursoDetalles}>
                  <span>🌿 Impartido por {curso.organizacion}</span>
                  <span style={{ margin: "0 0.5rem" }}>·</span>
                  <span>📅 {curso.dias} ({curso.horario})</span>
                </div>
              </div>

              {/* FORMULARIO DE CAPTACIÓN */}
              <form onSubmit={handleSubmit} className={styles.form}>
                
                {/* Nombre */}
                <div className={styles.campo}>
                  <label htmlFor="modal-nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="modal-nombre"
                    className={styles.input}
                    placeholder="Ej. María García"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    disabled={loading}
                  />
                </div>

                {/* Correo */}
                <div className={styles.campo}>
                  <label htmlFor="modal-email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="modal-email"
                    className={styles.input}
                    placeholder="Ej. maria.garcia@correo.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>

                {/* Celular / WhatsApp */}
                <div className={styles.campo}>
                  <label htmlFor="modal-telefono">Celular / WhatsApp (Bolivia) *</label>
                  <input
                    type="tel"
                    id="modal-telefono"
                    className={styles.input}
                    placeholder="Ej. +591 71234567"
                    required
                    pattern="^\+?[0-9\s-]{7,15}$"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    disabled={loading}
                  />
                </div>

                {/* Rango de edad */}
                <div className={styles.campo}>
                  <label htmlFor="modal-edad">Rango de Edad *</label>
                  <select
                    id="modal-edad"
                    className={styles.select}
                    required
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    disabled={loading}
                  >
                    <option value="">Selecciona tu rango de edad</option>
                    <option value="12-15">12 a 15 años (Colegiales)</option>
                    <option value="16-19">16 a 19 años (Escolares/Pre-universitarios)</option>
                    <option value="20-25">20 a 25 años (Jóvenes universitarios)</option>
                    <option value="26-35">26 a 35 años (Jóvenes profesionales)</option>
                    <option value="36+">36 años en adelante (Adultos/Hogares)</option>
                  </select>
                </div>

                {/* Botón de Enviar */}
                <button 
                  type="submit" 
                  className={styles.btnEnviar}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className={styles.spinner}></div>
                      <span>Simulando registro en base de datos...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Confirmar Inscripción 100% Gratuita</span>
                    </>
                  )}
                </button>

              </form>
            </>
          ) : (
            /* COMPONENTE DE ÉXITO ANIMADO (POST-ENVÍO) */
            <div className={styles.exitoBox}>
              <div className={styles.exitoIconoWrapper}>
                <CheckCircle size={36} />
              </div>
              <h3 className={styles.exitoTitulo}>¡Registro Exitoso!</h3>
              
              <div className={styles.cursoInfoBox} style={{ width: "100%" }}>
                <strong style={{ color: "var(--color-brand-primary)", fontSize: "0.95rem" }}>
                  {curso.nombre}
                </strong>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "0.2rem" }}>
                  Reserva confirmada de manera 100% gratuita.
                </p>
              </div>

              <p className={styles.exitoDesc}>
                Hola <strong>{nombre}</strong>, hemos registrado tu postulación de forma exitosa. Nos pondremos en contacto contigo vía WhatsApp al <strong>{telefono}</strong> o al correo <strong>{email}</strong> con los detalles de inicio y el enlace al aula.
              </p>
              
              <button 
                onClick={onClose}
                className="btn btn-primario"
                style={{ width: "100%", padding: "0.75rem", marginTop: "1rem" }}
              >
                Cerrar Ventana
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
