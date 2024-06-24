import { Chrono } from "react-chrono";
import "./timeline.css";
import { useEffect } from "react";
import Aos from "aos";

const items = [
  {
    title: "Febrero 2023 - Abril 2023",
    cardTitle: "DESARROLLO WEB",
    cardSubtitle: "CODER HOUSE",
    cardDetailedText: "En este curso, adquirí habilidades para diseñar y desarrollar sitios web desde cero, comenzando con la creación de prototipos en papel. Prácticas del desarrollo web, trabajando con HTML y CSS para construir estructuras y estilos efectivos. Aprendí a utilizar herramientas como GIT para el versionado de código y a emplear preprocesadores como SASS para optimizar mis proyectos. Además, adquirí conocimientos sobre la aplicación de Bootstrap para mejorar la experiencia de usuario y la importancia del SEO en el posicionamiento web. Subir un sitio a un servidor y a interactuar con diferentes servicios. Por último, desarrollé habilidades para presentar presupuestos y brindar un servicio completo a mis clientes finales.",
  },
  {
    title: "Mayo 2023 - Julio 2023",
    cardTitle: "JAVASCRIPT",
    cardSubtitle: "CODER HOUSE",
    cardDetailedText: "En este curso, adquirí los fundamentos de JAVASCRIPT, que permite crear una amplia variedad de aplicaciones. Exploré las herramientas esenciales del lenguaje y analicé casos prácticos de aplicación. También comprendí el uso de las librerías al estudiar jQuery y aprendí a aplicar técnicas de desarrollo para crear aplicaciones modernas utilizando AJAX. Al finalizar el curso, desarrollé la capacidad de crear soluciones web interactivas y pude aplicar los conocimientos adquiridos a cualquier framework de JavaScript.",
  },
  {
    title: "Julio 2023 - Septiembre 2023",
    cardTitle: "REACT JS",
    cardSubtitle: "CODER HOUSE",
    cardDetailedText: "En este curso, el tercer nivel de la carrera de programación, adquirí habilidades para programar por componentes utilizando JavaScript, JS y ES6 (REACT JS). También exploré las ventajas de trabajar con flujos de datos y aprendí a manejar rutas utilizando Firebase. Además, comprendí la utilidad del virtual DOM a través de los desarrollos en React JS. Al finalizar el curso, desarrollé la capacidad de crear aplicaciones de página única (SPA) y adquirí los conocimientos necesarios para trabajar con uno de los frameworks más populares y avanzados en la actualidad.",
  },
  {
    title: "Octubre 2023 - Abril 2024",
    cardTitle: "PROGRAMACION BACKEND",
    cardSubtitle: "CODER HOUSE",
    cardDetailedText: "En este curso, adquirí habilidades para desarrollar aplicaciones modernas utilizando Node.js y MongoDB. Aprendí a programar en JavaScript del lado del servidor, aplicando técnicas asincrónicas para optimizar el rendimiento. Dominé diferentes técnicas de comunicación, manejo de procesos distribuidos, control de grandes volúmenes de datos y despliegue en distintas plataformas web.",
  },
  {
    title: "Abril 2024 - Junio 2024",
    cardTitle: "FUNDAMENTOS DE PYTHON 1",
    cardSubtitle: "CISCO NETWORKING ACADEMY",
    cardDetailedText: "Aprendi los conceptos fundamentales de la programación informática y comience a desarrollar habilidades de codificación con el lenguaje de programación Python.",
    
  },
];

const VerticalAlternatingTimeline = () => {
  useEffect(() => {
    Aos.init()  
  }, []); 
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="chrono-container p-4" data-aos="flip-left" data-aos-duration="2200">
            <Chrono
              items={items}
              mode="VERTICAL_ALTERNATING"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalAlternatingTimeline;
