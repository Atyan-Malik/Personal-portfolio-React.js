import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import { Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mainpage">
        <Header />

        <Hero />

        <About />

        <Projects />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
