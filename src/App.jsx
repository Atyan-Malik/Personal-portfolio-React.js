import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero.jsx/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import { Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (  
  <>
    <div className="mainpage">
      <main>
        <section id="home">
      <Header />

          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
          <Footer />

        </section>
      </main>
      {/* <Footer /> */}
    </div>
    
  </>
  )
}

export default App;
