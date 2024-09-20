import About from './components/About';
import './App.css';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const storedTheme = JSON.parse(localStorage.getItem('theme'));
  const [theme, setTheme] = useState(storedTheme);
  const toggleMode = () => {
    localStorage.setItem('theme', JSON.stringify(!theme));
    setTheme(!theme);
  }
  return (
      <div className='whole_container' data-theme={theme ? 'light' : 'dark'}>
        <Header toggleMode={toggleMode} theme={theme}/>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
