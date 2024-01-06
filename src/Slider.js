import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ListGroup, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

const Slider = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  }
  return (
    <>
        <FontAwesomeIcon icon={faBars} onClick={toggleShow} className='slider_btn'/>
        <Offcanvas show={show} onHide={toggleShow}>
            <Offcanvas.Header closeButton closeVariant='white' className='offcanvas_header'>
                <Fade left>
                    <Offcanvas.Title className='offcanvas_title'>Ayyan's portfolio</Offcanvas.Title>
                </Fade>
            </Offcanvas.Header>
            <Offcanvas.Body as='div' className='offcanvas_body'>
                <ListGroup variant='flush' as='ul'>
                    <ListGroup.Item action as='li' style={{background:'none'}} className='li1'>
                        <Link to={'/projects'} className='side_menu'>Projects</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action as='li' style={{background:'none'}} className='li2'>
                        <Link to={'/skills'} className='side_menu'>Skills and Certifications</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action as='li' style={{background:'none'}} className='li3'>
                        <a href='https://drive.google.com/file/d/1TrVMXYO4QXPp_m-kd_qUEmZOlw2Ktgs4/view?usp=sharing' className='side_menu'>View Resume</a>
                    </ListGroup.Item>
                    <ListGroup.Item action as='li' style={{background:'none'}} className='li4'>
                        <Link to={'/contact'} className='side_menu'>Contact me</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action as='li' style={{background:'none'}} className='li5'>
                        <Link to={'/'} className='side_menu'>About</Link>
                    </ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Slider
