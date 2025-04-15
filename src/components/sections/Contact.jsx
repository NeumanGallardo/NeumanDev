import { RevealOnScroll } from "../RevealOnScroll";
import linkedin from '..//..//assets/linkedin.png'
import github from '..//..//assets/github.png'
import gmail from '..//..//assets/gmail.png'

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 text-center">
          {/* Título */}
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500">
          🌐 Conéctate conmigo:
          </h2>

          {/* Texto introductorio */}
          <p className="text-gray-300 mb-8">
          Actualmente, me encuentro explorando nuevas oportunidades para continuar
           mi desarrollo como profesional en el ámbito tecnológico, con el propósito
            de contribuir con soluciones innovadoras y eficientes a proyectos desafiantes.
             Si deseas dialogar sobre posibles colaboraciones, iniciativas o propuestas, contácteme. 
             Estoy disponible a través de las siguientes plataformas y estaré encantado de atender tú solicitud.
          </p>

          {/* Contenedor de íconos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/neumangallardo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-18 h-18 rounded-full bg-gray-300 flex items-center justify-center transition hover:scale-110 hover:bg-gray-200"
            >
              <img
                src={linkedin} // Asegúrate de tener esta imagen en tu proyecto
                alt="LinkedIn"
                className="w-14 h-14"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/neumangallardo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-18 h-18 rounded-full bg-gray-300 flex items-center justify-center transition hover:scale-110 hover:bg-gray-200"
            >
              <img
                src={github} // Asegúrate de tener esta imagen en tu proyecto
                alt="GitHub"
                className="w-15 h-15"
              />
            </a>

            {/* Gmail */}
            <a
              href="mailto:neuman10327033@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-18 h-18 rounded-full bg-gray-300 flex items-center justify-center transition hover:scale-110 hover:bg-gray-200"
            >
              <img
                src={gmail}// Asegúrate de tener esta imagen en tu proyecto
                alt="Gmail"
                className="w-13 h-13"
              />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};