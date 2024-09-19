import DarkModeSwitch from './DarkModeSwitch';
import Slider from './Slider';
import { useEffect, useState } from 'react';

const Header = ({toggleMode, theme}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = currentScrollPos < 10 || (prevScrollPos > currentScrollPos);
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
              <div className='nav_parent'>
                <a href='#about' className='text-light text-decoration-none'>About</a>
                <div className='nav_link'></div>
              </div>
              <div className='nav_parent'>
                <a href='https://drive.google.com/file/d/138YhbTCPA_22bXhmBCWi9SFp-glAcLDP/view?usp=sharing' className='text-light text-decoration-none'>View resume</a>
                <div className='nav_link'></div>
              </div>
              <div className='nav_parent'>
                <a href='#skills' className='text-light text-decoration-none'>Skills and certifications</a>
                <div className='nav_link'></div>
              </div>
              <div className='nav_parent'>
                <a href='#projects' className='text-light text-decoration-none'>Projects</a>
                <div className='nav_link'></div>
              </div>
              <div className='nav_parent'>
                <a href='#contact' className='text-light text-decoration-none'>Contact</a>
                <div className='nav_link'></div>
              </div>
            </div>
            <div className='switch_wrapper'>
                <DarkModeSwitch toggleMode={toggleMode} theme={theme}/>
            </div>
        </div>
    )
}

export default Header