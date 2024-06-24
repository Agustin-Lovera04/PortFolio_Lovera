import './footer.css';
import githubIcon from '/images/github.png';
import whatsappIcon from '/images/whatsapp.png';
import gmailIcon from '/images/gmail.png';
import linkedinIcon from '/images/linkedin.png';
import { useEffect } from 'react';
import Aos from 'aos';

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="footer__Container">
      <div className='btns--footer'>
        <a href="https://github.com/Agustin-Lovera04" target='_blank' rel='noopener noreferrer' className="btn--SocialsMedia" data-aos="zoom-in" data-aos-duration="1200">
          <img src={githubIcon} alt="Github" className="social-icon" />
          Github
        </a>
        <a href="https://wa.me/543424076088?text=Buenos%20dias!%20Quiero%20solicitar%20mas%20informacion%20acerca%20de%20nuestro%20Proyecto%20Juntos!" target='_blank' rel='noopener noreferrer' className="btn--SocialsMedia" data-aos="zoom-in" data-aos-duration="1200">
          <img src={whatsappIcon} alt="Whatsapp" className="social-icon" />
          Whatsapp
        </a>
        <a href="https://www.linkedin.com/in/agustin-lovera-5b1576274/" target='_blank' rel='noopener noreferrer' className="btn--SocialsMedia" data-aos="zoom-in" data-aos-duration="1200">
          <img src={linkedinIcon} alt="Linkedin" className="social-icon" />
          Linkedin
        </a>
        <a href="mailto:agusslovera04@gmail.com" className="btn--SocialsMedia" data-aos="zoom-in" data-aos-duration="1200">
          <img src={gmailIcon} alt="Gmail" className="social-icon" />
          Gmail
        </a>
      </div>
      <p className='copy-text text-light m-0'>TODOS LOS DERECHOS RESERVADOS Ⓡ 2024</p>
    </div>
  );
}

export default Footer;
