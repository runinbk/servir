import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset: number = 100): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Buscar cuál sección está en la pantalla
      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const element = document.getElementById(id);

        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveId(id);
            return;
          }
        }
      }

      // Si estamos muy arriba, no activar nada o activar la primera
      if (scrollPosition < 300 && ids.length > 0) {
        setActiveId(ids[0]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Ejecución inicial para fijar el estado correcto al cargar la página
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}
