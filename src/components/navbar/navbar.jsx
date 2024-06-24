import { Link } from 'react-router-dom';
import logosF from '/images/LogoS-F.png';
import flagES from '/images/FLAG-ES.png';
import flagEU from '/images/FLAG-EEUU.png';
import './navbar.css';

const NavBar = ({ scrollToMain, scrollToSobreMi, scrollToConocimientos, scrollToProyectos, scrollToContacto }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid navbar p-2">
        <Link to='/#' className="navbar-brand">
          <button className="logo--btn" onClick={scrollToMain}>
            <img src={logosF} alt="Logo" className='logo--Nav__Style' />
          </button>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" onClick={scrollToSobreMi}>Sobre Mí</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={scrollToConocimientos}>Estudios</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={scrollToProyectos}>Proyectos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={scrollToContacto}>Contacto</button>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ES/EN
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className='li-dropdown-item'><Link className="dropdown-item" to="/"><img className='flags' src={flagES} alt="ESPAÑOL" /></Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li className='li-dropdown-item'><p className=' fw-bold p-dropdown-item'>PROXIMAMENTE</p><Link className="dropdown-item" to="/"><img className='flags' src={flagEU} alt="INGLES" /></Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;