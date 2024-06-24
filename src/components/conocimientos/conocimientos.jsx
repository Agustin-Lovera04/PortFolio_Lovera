import './conocimientos.css';
import Timeline from '../timeline/timeline';
import Idiomas from '../idiomas/idiomas';
import Slider from '../slider/slider';
import { useEffect } from 'react';
import { useState } from 'react';
import Aos from 'aos';

const Conocimientos = () => {

  useEffect(() => {
    Aos.init()  
  }, []); 

  const [mostrarTimeline, setMostrarTimeline] = useState(true);

  const handleMostrarTimeline = () => {
    setMostrarTimeline(true);
  };

  const handleMostrarIdiomas = () => {
    setMostrarTimeline(false);
  };

  return (
    <div className="container-fluid conocimientos__Container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className='tt--Conocimientos text-light'><strong>CONOCIMIENTOS</strong></h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Slider/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="container--btn__Conocimientos col-12 col-md-12 d-flex justify-content-around p-1 m-2">

          <button className='btn--Hover__Conocimientos' onClick={handleMostrarTimeline} data-aos="fade-right" data-aos-duration="1200">Mostrar Timeline</button>

          <button className='btn--Hover__Conocimientos' onClick={handleMostrarIdiomas} data-aos="fade-left" data-aos-duration="1200">Mostrar Idiomas</button>

        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="conocimientos__dinamicContent">
            {mostrarTimeline ? <Timeline /> : <Idiomas />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conocimientos;
