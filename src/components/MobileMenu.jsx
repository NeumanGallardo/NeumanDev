import { useEffect, useState } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [clickedLabel, setClickedLabel] = useState(null);

  const handleClick = (e, target, label) => {
    e.preventDefault();
    setClickedLabel(label); // Activa la animación

    // Cierra el menú y hace scroll suave después de la animación
    setTimeout(() => {
      setMenuOpen(false);
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      setClickedLabel(null); // Reinicia el estado para futuras animaciones
    }, 500); // Esperamos 0.5s para que se vea la animación
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {/* Botón de cierre */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-[48px] leading-none cursor-pointer z-50
                   transition duration-300 active:text-transparent active:bg-clip-text active:bg-gradient-to-r active:from-sky-400 active:via-blue-600 active:to-purple-500"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Enlaces del menú con gradiente y animación al hacer click */}
      {[
        { label: "Inicio", href: "#home" },
        { label: "Sobre Mi", href: "#about" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
      ].map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={(e) => handleClick(e, href, label)}
          className={`text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500 my-4
            transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            ${clickedLabel === label ? "scale-110" : ""}
          `}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

