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
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
