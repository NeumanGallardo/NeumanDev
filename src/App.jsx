import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

const Home = () => (
  <section className="text-center p-10">
    <h1 className="text-4xl font-bold">¡Hola, soy [Tu Nombre]!</h1>
    <p className="text-lg mt-2">Desarrollador Frontend apasionado por React 🚀</p>
  </section>
);

const About = () => (
  <section className="p-10">
    <h2 className="text-3xl font-bold">Sobre mí</h2>
    <p className="mt-2">Aquí puedes hablar sobre tu experiencia y habilidades.</p>
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
      <nav className="p-4 bg-gray-800 text-white flex justify-around">
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

