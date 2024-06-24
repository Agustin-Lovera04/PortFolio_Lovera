import flagIT from '/images/italia.png'
import flagES from '/images/FLAG-ES.png'
import './idiomas.css'; // Asegúrate de tener este archivo con los estilos CSS necesarios
import { useEffect } from 'react';
import Aos from 'aos';

const Idiomas = () => {
    useEffect(() => {
        Aos.init()  
      }, []);
    return (
        <div className='cards__Container'>
            <div className="card" data-aos="flip-left" data-aos-duration="2200">
                <div className="card2">
                    <img className='img--Card' src={flagES} alt="" />
                    <h1 className='title--Card text-light p-4'>ESPAÑOL</h1>
                    <h3 className='subTT-Card text-primary'>Nivel: Nativo</h3>
                </div>
            </div>
            <div className="card" data-aos="flip-left" data-aos-duration="2200">
                <div className="card2">
                    <img className='img--Card' src={flagIT} alt="" />
                    <h1 className='title--Card text-light p-4'>ITALIANO</h1>
                    <h3 className='subTT-Card text-primary'>Nivel: A1</h3>
                </div>
            </div>
        </div>
    );
}

export default Idiomas;
