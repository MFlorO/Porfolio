"use client";
import { useEffect, useState } from "react";
import { Seccion } from "@/interfaces";
import ThemeToggle from "./ThemeToggle";
import LanguagesToggle from "./LanguagesToggle";

const sections = [
  { label: "Sobre mí", id: Seccion.SOBRE_MI },
  { label: "Proyectos", id: Seccion.PROYECTOS },
  { label: "Chat & Backend", id: Seccion.CHAT },
  { label: "Contacto", id: Seccion.CONTACTO }
];

export default function SideBar() {

  const [active, setActive] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const middleScreen = window.innerHeight / 2;

      // Control de sección activa
      const newActive = sections.findIndex((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= middleScreen && rect.bottom >= middleScreen;
      });
      if (newActive !== -1 && newActive !== active) {
        setActive(newActive);
      }

      // Mostrar u ocultar sidebar según FrontPage
      const front = document.getElementById(Seccion.PORTADA);
      if (front) {
        const rect = front.getBoundingClientRect();
        setShowSidebar(rect.bottom < 0); // oculto si FrontPage está visible
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ejecutar al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const scrollToSection = (idx: number, id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(idx); // activa el nodo al hacer click
  };

  return (
    <div 
      className={`fixed top-1/4 left-6 h-1/2 flex flex-col items-center z-50 transition-opacity duration-300`}
    >
      {
        sections.map((sec, idx) => (
          <div
            key={sec.id}
            onClick={() => scrollToSection(idx, sec.id)}
            className={`cursor-pointer mb-6 flex flex-col items-center relative group ${
              showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === active
                  ? "bg-[var(--color-accent-light)] scale-125 shadow-lg dark:bg-[var(--color-accent-dark)]"
                  : "bg-gray-300 dark:bg-gray-600 group-hover:bg-[var(--color-accent-light)] dark:group-hover:bg-[var(--color-accent-dark)]"
              }`}
            />


            <span
              className={`absolute w-12 left-6 text-[10px] font- font-semibold text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)] transition-opacity duration-300
                ${idx === active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
              `}
            >
              {sec.label}
            </span>
          </div>
        ))
      }

      <div className="flex flex-col items-center gap-5">
        <ThemeToggle />
        <LanguagesToggle />
      </div>
    </div>
  );
}
