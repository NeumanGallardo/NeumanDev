import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import './App.css';
import './index.css';

const Home = () => (
  <section className="text-center p-10">
    <h1 className="text-4xl font-bold">¡Hola, soy Erik Neuman Gallardo Castillo</h1>
    <p className="text-lg mt-2">Desarrollador Frontend apasionado por React 🚀</p>
  </section>
);

const About = () => (
  <section className="p-10">
    <h2 className="text-3xl font-bold text-blue-400">Sobre mí</h2>
    <p>🚀 Soy un Desarrollador Fullstack Jr 
    con experiencia en la creación de aplicaciones web dinámicas y escalables. 
    Me especializo en el desarrollo tanto del frontend como del backend, 
    aplicando buenas prácticas de programación y optimización del rendimiento.
</p>
<h3 className="text-2xl font-bold">💻 Tecnologías y habilidades:</h3>
<p>✅ Lenguajes: 📝 JavaScript, 🖥️ C++.</p>
<p>✅ Frontend: 🎨 React, ⚛️ Redux, 🖥️ HTML, CSS.</p>
<p>✅ Backend: 🏗️ Node.js, 🚀 Express.</p>
<p>✅ Bases de datos: 🗄️ PostgreSQL, 🛢️ SQL Server, 🔗 Sequelize ORM.</p>
<p>✅ Buenas prácticas: ✨ Código limpio, 🧪 Testing unitario, 🐞 Debugging, ⚡ Optimización de rendimiento.</p>
<p>✅ Metodologías: 🤝 Trabajo en equipo en entornos Agile/Scrum.</p>
  </section>
);

const Projects = () => (
  <section className="p-10">
    <h2 className="text-3xl font-bold">Proyectos</h2>
    <p className="mt-2">Lista de proyectos en los que has trabajado.</p>
  </section>
);

const Contact = () => (
  <section className="p-10">
    <h2 className="text-3xl font-bold">Contacto</h2>
    <p className="mt-2">Formulario o información de contacto.</p>
  </section>
);

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-green-500 text-black flex justify-around">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

