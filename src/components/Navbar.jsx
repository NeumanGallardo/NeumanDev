import { useEffect } from "react";
import logo from '..//assets/NeumanDEV.png'

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/500 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white
          flex items-center justify-between p-4 bg-gray-80">
            {" "}
            <img src={logo} alt="Logo" className="w-20 h-auto p-1"  />
            <span className="text-2xl font-bold text-transparent 
            bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500 
            transition-transform duration-300 hover:scale-110">NeumanDev</span>{" "}
            
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500 
             transition-transform duration-300 hover:scale-110">
              {" "}
              Inicio
            </a>
            <a
              href="#about"
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500 
             transition-transform duration-300 hover:scale-110">
              {" "}
              Sobre Mi{" "}
            </a>
            <a
              href="#projects"
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500 
             transition-transform duration-300 hover:scale-110">
              {" "}
              Proyectos{" "}
            </a>
            <a
              href="#contact"
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500 
             transition-transform duration-300 hover:scale-110">
              {" "}
              Contacto{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
