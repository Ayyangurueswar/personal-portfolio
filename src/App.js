import About from './About';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import Slider from './Slider';

function App() {
  const [theme, setTheme] = useState(true);
  const toggleMode = () => {
    setTheme((theme) => !theme);
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
          <Route path='/projects' element={<Projects/>} exact/>
          <Route path='/skills' element={<Skills/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
