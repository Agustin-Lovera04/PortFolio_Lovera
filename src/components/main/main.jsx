import { useRef, useState, useEffect } from 'react';
import NavBar from '../navbar/navbar';
import SobreMi from '../sobreMi/sobremi';
import Conocimientos from '../conocimientos/conocimientos';
import Proyectos from '../proyectos/proyectos';
import Contacto from '../contacto/contacto';
import Footer from '../footer/footer';
import Aos from 'aos';
import './main.css';

const Main = () => {
  const mainRef = useRef(null);
  const bienvenidaRef = useRef(null);
  const sobreMiRef = useRef(null);
  const conocimientosRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef = useRef(null);

  const [showNavBar, setShowNavBar] = useState(false);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      const offsetTop = ref.current.offsetTop;
      const offset = -85;
      window.scrollTo({
        top: offsetTop + offset,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= bienvenidaRef.current.offsetTop - 85) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    Aos.init()  
  }, []);
  
  return (
    <>
      <div className="container-fluid" ref={mainRef}>
        <div className='navbar-container'>
          <NavBar
            scrollToMain={() => scrollToRef(mainRef)}
            scrollToSobreMi={() => scrollToRef(sobreMiRef)}
            scrollToConocimientos={() => scrollToRef(conocimientosRef)}
            scrollToProyectos={() => scrollToRef(proyectosRef)}
            scrollToContacto={() => scrollToRef(contactoRef)}
          />
        </div>
        <div className="main__Container" ref={bienvenidaRef}>
          <div className="neon-container nn" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="neon-text">¡BIENVENIDO!<br />SOY AGUSTIN LOVERA <br /><h3 className='subTT--Main'>Desarrollador Full Stack</h3></h1>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center m-2" data-aos="fade-up" data-aos-duration="1500">
            <div className="scroll-button">
              <div className="scroll-circle"></div>
            </div>
            <div className="scroll-arrow"></div>
          </div>

          {/* PONER FLECHITA  y al costado btn flotande de RRSS*/}
          {/*          <div className="btn--Main__Container">
            <button class="buttonpro" onClick={() => scrollToRef(sobreMiRef)}>
              <span> Button </span>
            </button>
          </div> */}
        </div>
        <div className="container" ref={sobreMiRef}>
          <SobreMi />
        </div>
        <div className="container" ref={conocimientosRef}>
          <Conocimientos />
        </div>
        <div className="container" ref={proyectosRef}>
          <Proyectos />
        </div>
        <div className="container" ref={contactoRef}>
          <Contacto />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
