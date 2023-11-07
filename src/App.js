import logo from './logo.svg';
import About from './About';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<About/>} exact/>
          <Route path='/projects' element={<Projects/>} exact/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
