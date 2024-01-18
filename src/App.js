import About from './About';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import Slider from './Slider';
import Footer from './Footer';

function App() {
  const [theme, setTheme] = useState(true);
  const toggleMode = () => {
    setTheme((theme) => !theme);
  }
  return (
    <HashRouter>
      <div className='whole_container' data-theme={theme ? 'light' : 'dark'}>
        <div className='darkmode_switch'>
        <div className='slider'>
          <Slider/>
        </div>
        <div className='switch_wrapper'>
          <DarkModeSwitch toggleMode={toggleMode} theme={theme}/>
        </div>
        </div>
        <Routes>
          <Route path='/' element={<About/>} exact/>
          <Route path='projects' element={<Projects/>} exact/>
          <Route path='skills' element={<Skills/>} exact/>
          <Route path='contact' element={<Contact/>} exact/>
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
