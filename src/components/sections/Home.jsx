import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500">
            Hola, Soy Erik Neuman
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          🚀 Full Stack Web Developer<br/>
💻 Experiencia en la creación de aplicaciones web dinámicas y escalables<br/>
🎯 Especializado en desarrollo Front-End y Back-End<br/>
✅ Aplico buenas prácticas, foco en la optimización del rendimiento<br/>
📚 Siempre en constante aprendizaje y evolución tecnológica<br/>
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              class="text-black text-lg font-bold py-3 px-6 rounded-md bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500 shadow-[0_0_15px_rgba(147, 197, 253, 0.8)] hover:shadow-[0_0_25px_rgba(147, 197, 253, 0.8)] hover:-translate-y-1 transition-all"
            >
              Ver Proyectos
            </a>

            <a
              href="#contact"
             class="text-black text-lg font-bold py-3 px-6 rounded-md bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500 shadow-[0_0_15px_rgba(147, 197, 253, 0.8)] hover:shadow-[0_0_25px_rgba(147, 197, 253, 0.8)] hover:-translate-y-1 transition-all"
            >
              Contacto
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
