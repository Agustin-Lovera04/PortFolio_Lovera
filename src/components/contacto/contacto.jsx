import './contacto.css';
import { useEffect } from 'react';
import Aos from 'aos';

const Contacto = () => {
    useEffect(() => {
        Aos.init()  
      }, []);
    return (
        <>
            <div className="container-fluid contacto__Container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h5 className='stt--Contacto'><strong>CONTACTO</strong></h5>
                        <h1 className='tt--Contacto text-light'><strong>COORDINEMOS NUESTRA PRIMERA REUNION POR ESTOS CANALES</strong></h1>
                    </div>
                </div>
                <div className="row btn--contacto__Container mt-4">
                    <div className="col-12 col-md-6 mb-3 mb-md-0 text-center">
                        <a href="https://www.linkedin.com/in/agustin-lovera-5b1576274/" target='_blank' rel='noopener noreferrer' className='btn btn-primary btn--Hover__Contacto' data-aos="fade-up" data-aos-duration="1400">IR A MI LINKEDIN</a>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <a href="https://wa.me/543424076088?text=Buenos%20dias!%20Quiero%20solicitar%20mas%20informacion%20acerca%20de%20nuestro%20Proyecto%20Juntos!" target='_blank' rel='noopener noreferrer' className="btn btn-primary btn--Hover__Contacto" data-aos="fade-up" data-aos-duration="1600">ENVIAME UN MENSAJE</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;
