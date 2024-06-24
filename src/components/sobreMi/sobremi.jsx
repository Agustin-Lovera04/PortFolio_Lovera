import imgMia from '/images/FotoMia.jpg';
import './sobremi.css';
import { useEffect } from 'react';
import Aos from 'aos';

const SobreMi = () => {
    useEffect(() => {
        Aos.init()  
      }, []);
    return (
        <div className="container-fluid container--Sobremi d-flex align-items-center">
            <div className="row justify-content-center align-items-center w-100">
                <div className="col-12 col-md-7 text-center mb-4 mb-md-0  d-flex flex-column align-items-center">
                        <div className="content--Sobremi d-flex flex-column align-items-center" data-aos="fade-right" data-aos-duration="1000">
                            <h1 className='tt--SobreMi'><strong>¿QUIEN SOY?</strong></h1>
                            <p className='text--SobreMi text-light' >
                                ¡Bienvenido/a! Me llamo Agustín Lovera, soy Argentino, proveniente de la provincia de Santa Fe. <br /> Soy Técnico Químico de profesión, y hace algunos años, después de completar mis estudios, tuve la suerte de adentrarme en el apasionante mundo de la Programación. <br /> Siguiendo el lema de que el mayor riesgo es no arriesgarse, decidí explorar este nuevo camino que me cautivó por completo. <br />
                                Hoy en día, me desempeño como programador junior y me siento orgulloso de mi recorrido hasta el momento. Mi objetivo es seguir creciendo, aprendiendo cada día y trabajando arduamente para mejorar en todos los aspectos de mi vida profesional.
                            </p>
                        </div>
                </div>
                <div className="col-12 col-md-5 text-center"data-aos="fade-left" data-aos-duration="1000">
                        <img src={imgMia} alt="Agustín Lovera" className="img-fluid img--sobreMi" />
                </div>
            </div>
        </div>
    );
}

export default SobreMi;
