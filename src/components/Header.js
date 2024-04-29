import DarkModeSwitch from './DarkModeSwitch';
import Slider from './Slider';
import { useEffect, useState } from 'react';

const Header = ({toggleMode, theme}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = currentScrollPos < 10 || (prevScrollPos > currentScrollPos);
    console.log(isVisible);
    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
    return (
        <div className={`container-fluid h-25 p-3 d-flex flex-row justify-content-between ${visible ? '' : 'sticky'}`} id='header'>
            <div className='slider'>
                <Slider/>
            </div>
            <div className={`mx-auto d-md-flex d-none flex-md-row  gap-5 align-items-center`}>
              <a href='#about' className='text-decoration-none text-light nav_link'>About</a>
              <a href='https://drive.google.com/file/d/1W61_9sepqxg73_tN0wOCB2NPnsc-6Y0D/view?usp=sharing' className='text-decoration-none text-light nav_link'>View resume</a>
              <a href='#skills' className='text-decoration-none text-light nav_link'>Skills and certifications</a>
              <a href='#projects' className='text-decoration-none text-light nav_link'>Projects</a>
              <a href='#contact' className='text-decoration-none text-light nav_link'>Contact</a>
            </div>
            <div className='switch_wrapper'>
                <DarkModeSwitch toggleMode={toggleMode} theme={theme}/>
            </div>
        </div>
    )
}

export default Header