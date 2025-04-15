import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleClick = (e, target) => {
    e.preventDefault();
    const el = e.currentTarget;

    // Cambios de color secuenciales
    el.style.transition = "color 0.5s ease";

    el.style.color = "rgb(135,206,235)"; // Celeste
    setTimeout(() => {
      el.style.color = "rgb(65,105,225)"; // Azul
    }, 1000);

    // Después de 2s: cierra el menú y hace scroll
    setTimeout(() => {
      setMenuOpen(false);
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }, 2000);
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
                   transition duration-300 active:text-transparent active:bg-clip-text active:bg-[linear-gradient(to_right,_rgb(135,206,235),_rgb(65,105,225),_rgb(147,112,219))]"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Enlaces con animación de color al hacer click */}
      {[
        { label: "Inicio", href: "#home" },
        { label: "Sobre Mi", href: "#about" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
      ].map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={(e) => handleClick(e, href)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          {label}
        </a>
      ))}
    </div>
  );
};
