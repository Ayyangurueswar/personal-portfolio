import About from './About';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<About/>} exact/>
          <Route path='/projects' element={<Projects/>} exact/>
          <Route path='/skills' element={<Skills/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
