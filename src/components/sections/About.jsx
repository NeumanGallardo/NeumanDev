import { RevealOnScroll } from "../RevealOnScroll";
import logo from '..//..//assets/henry.png'

export const About = () => {
  const languages = ["JavaScript", "C++"];
  const frontendSkills = ["Vite", "React", "Redux", "HTML", "CSS", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express"];
  const database = ["PostgreSQL", "SQL Server", "Sequelize ORM"];
  const tools = ["Visual Studio Code", "Git", "GitHub"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            {" "}
            Sobre mi
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify break-words">
          Desarrollador Web Full  Stack  con experiencia  en tecnologías como JavaScript,
React,  Redux,  Node.js,  Express, Sequelize y  PostgreSQL. En el frontend, 
me apasiona implementar formularios en React, aplicando las mejores prácticas 
para crear interfaces de usuario intuitivas y eficientes. En el backend, 
utilizando Node.js y Express, he desarrollado e implementado rutas, 
configurado bases de datos PostgreSQL y gestionando modelos de datos con Sequelize.
 Estas experiencias me han permitido crear APIs RESTful robustas y eficientes, 
 garantizando una comunicación fluida entre el servidor y el cliente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500"> Lenguajes</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500"> Base de Datos</h3>
                <div className="flex flex-wrap gap-2">
                  {database.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500"> Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500"> 🏫 Educación </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                <strong className="text-l font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500"> Academia SOY HENRY  </strong><br/>
                Full Stack Web Development<br/>Graduado 2024
                <a href="https://www.soyhenry.com/"   
                target="_blank" 
                rel="noopener noreferrer">
                <img src={logo} alt="Logo" className="w-10 h-auto p-1"  /> 
                </a>
                
                </li>
                <li>
                <strong className="text-l font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-purple-500"> Colegio JOSE ANTONIO ZAMPA</strong><br/>
                 Sucre-Bolivia <br/>Bachiller Graduado 2013
                </li>
              </ul>
            </div>
            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at ABC Corp (2020 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
