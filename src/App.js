import About from './components/About';
import './App.css';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import DarkModeSwitch from './components/DarkModeSwitch';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(true);
  const toggleMode = () => {
    setTheme((theme) => !theme);
  }
  return (
      <div className='whole_container' data-theme={theme ? 'light' : 'dark'}>
        <div className='darkmode_switch'>
        <div className='slider'>
          <Slider/>
        </div>
        <div className='switch_wrapper'>
          <DarkModeSwitch toggleMode={toggleMode} theme={theme}/>
        </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
