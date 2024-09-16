import rugbyShopREACT from '/images/rugbyShopREACT.png';
import logoÑaku from '/images/logo ñacu.png';
import rugbyShopJS from '/images/rugbyShopJS.png';
import logoBackEnd from '/images/logoBackEnd.png';
import logoBzPrint from '/images/BZPrint-Logo.png'
import './proyectos.css';
import { useEffect } from 'react';
import Aos from 'aos';

const Proyectos = () => {
    useEffect(() => {
        Aos.init()  
      }, []);
    return (
        <div className="container-fluid proyectos__Container">
            <h1 className="tt--Proyectos text-light"><strong>PROYECTOS</strong></h1>

            <div className='cards__Container'>
                <div className="card" data-aos="flip-left" data-aos-duration="1800">
                    <div className="card2" >
                        <img className='img--Card' src={logoÑaku} alt="Proyecto Ñaku" />
                        <h1 className='title--Card text-light p-4'>PROYECTO DESARROLLO WEB: ÑAKURTU</h1>
                        <div className="btn--card__Proyectos">
                            <a href="https://github.com/Agustin-Lovera04/PF-Lovera" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al repositorio</button>
                            </a>
                            <a href="https://agustin-lovera04.github.io/PF-Lovera/" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al proyecto</button>
                            </a>
                            <h1 className='title--Card text-danger p-4'>PROYECTO DE PRUEBA EDUCACIONAL</h1>
                        </div>
                    </div>
                </div>
                <div className="card" data-aos="flip-left" data-aos-duration="1800">
                    <div className="card2">
                        <img className='img--Card' src={rugbyShopJS} alt="Proyecto Rugby Shop JS" />
                        <h1 className='title--Card text-light p-4'>PROYECTO JAVASCRIPT: RUGBY SHOP</h1>
                        <div className="btn--card__Proyectos">
                            <a href="https://github.com/Agustin-Lovera04/ProyectoFInal-Lovera" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al repositorio</button>
                            </a>
                            <a href="https://agustin-lovera04.github.io/ProyectoFInal-Lovera/" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al proyecto</button>
                            </a>
                            <h1 className='title--Card text-danger p-4'>PROYECTO DE PRUEBA EDUCACIONAL</h1>
                        </div>
                    </div>
                </div>
                <div className="card" data-aos="flip-left" data-aos-duration="1800">
                    <div className="card2">
                        <img className='img--Card' src={rugbyShopREACT} alt="Proyecto Rugby Shop React" />
                        <h1 className='title--Card text-light p-4'>PROYECTO REACT: RUGBY SHOP</h1>
                        <div className="btn--card__Proyectos">
                            <a href="https://github.com/Agustin-Lovera04/ProyectoFinal-Lovera-React" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al repositorio</button>
                            </a>
                            <a href="https://agustin-lovera04.github.io/ProyectoFinal-Lovera-React/" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al proyecto</button>
                            </a>
                            <h1 className='title--Card text-danger p-4'>PROYECTO DE PRUEBA EDUCACIONAL</h1>
                        </div>
                    </div>
                </div>
                <div className="card" data-aos="flip-left" data-aos-duration="1800">
                    <div className="card2">
                        <img className='img--Card' src={logoBackEnd} alt="Proyecto Back End Ecommerce" />
                        <h1 className='title--Card text-light p-4'>PROYECTO BACK END: ECOMMERCE</h1>
                        <div className="btn--card__Proyectos">
                            <a href="https://github.com/Agustin-Lovera04/PF-BackEnd_LOVERA" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al repositorio</button>
                            </a>
                            <a href="https://proyectofinal-backend-lovera.onrender.com" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al proyecto</button>
                            </a>
                            <h1 className='title--Card text-danger p-4'>PROYECTO DE PRUEBA EDUCACIONAL</h1>
                        </div>
                    </div>
                </div>
                <div className="card" data-aos="flip-left" data-aos-duration="1800">
                    <div className="card2">
                        <img className='img--Card' src={logoBzPrint} alt="Proyecto BZ PRINT" />
                        <h1 className='title--Card text-light p-4'>BZ PRINT</h1>
                        <div className="btn--card__Proyectos">
                            <a href="https://github.com/Agustin-Lovera04/BZ-PRINT" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al repositorio</button>
                            </a>
                            <a href="https://agustin-lovera04.github.io/BZ-PRINT" target='_blank' rel="noopener noreferrer">
                                <button className="btn btn-outline-primary m-1 btn-card_Proyectos">Ir al proyecto</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyectos;
