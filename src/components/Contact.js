import React, {useState} from 'react';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Contact = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    if(!regex.test(userEmail)){
      setError(true);
      setAlertMessage('Enter a valid email');
      setOpen(true);
      return;
    }
    if(message === ''){
      setAlertMessage('Enter a message');
      setError(true);
      setOpen(true);
      return;
    }
    const feedback = {from_name: userName, reply_to: userEmail, message: message};
    const templateId = 'contact_form';
    setLoading(true);
    window.emailjs.send('contact_mail', templateId, feedback).then(() => {
      setLoading(false);
      setAlertMessage('Message Sent');
      setOpen(true);
      setUserName('');
      setUserEmail('');
      setMessage('');
    }).catch((e) => {
      setLoading(false);
      setAlertMessage("Error, try again");
      setOpen(true);
    });
  }
  return (
    <div className='contact_container mt-5' id='contact'>
      <h3 className='text-center text-decoration-underline'>Connect with me</h3>
      <div className='contacts'>
        <a href='https://www.linkedin.com/in/ayyan-guru-eswar-a64827240/' className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faLinkedin} beat size="2xl"  className='contact_icon'/>
        </a>
        <a href='https://github.com/Ayyangurueswar' className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faGithub} beat size="2xl" className='contact_icon'/>
        </a>
        <a href='mailto:ayyan16.gbps@gmail.com' className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faEnvelope} beat size='2xl' className='contact_icon'/>
        </a>
        <a href="tel:+919600588036" className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faPhone} beat size='2xl' className='contact_icon'/>
        </a>
        <a href='https://www.instagram.com/ayyanguru/' className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faInstagram} beat size='2xl' className='contact_icon'/>
        </a>
      </div>
      <div className='queries mb-5'>
        <p className='fs-5'>
          I am currently open to work in SDE intern or front-end developer intern roles so do
          get in touch if you think I can fit in.
        </p>
      </div>
      <div className='divider mb-5'>
        <Fade left>
          <div className='divider_div'></div>
        </Fade>
        <p className='text-center fs-4 mb-0'>OR</p>
        <Fade right>
          <div className='divider_div'></div>
        </Fade>
      </div>
      <h3 className='text-center mb-5 text-decoration-underline'>Send a message</h3>
      <form className='contact_form'>
        <TextField id='filled-basic' label='Name' variant='filled' placeholder='Your name' 
        color='secondary' type='text' onChange={(e) => {setUserName(e.target.value)}} value={userName}/>
        <TextField id='filled-basic' label='Email' variant='filled' placeholder='Your email' 
        color='secondary' type='email' required onChange={(e) => {setUserEmail(e.target.value)}}
        error={error} value={userEmail}/>
         <TextField required onChange={(e) => {setMessage(e.target.value)}}
          id="filled-basic" error={error} value={message}
          label="Message"
          multiline
          maxRows={6} color='secondary'
          variant="filled"
        />
        <LoadingButton className='send_button' onClick={handleSubmit} loading={loading} type='submit'
          color='secondary'
          endIcon={<SendIcon />}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={alertMessage}
        action={<IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>}
      />
      </form>
    </div>
  )
}

export default Contact
