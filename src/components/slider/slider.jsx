import logoBack from '/images/backend.png';
import logoBootstrap from '/images/bootstrap.png';
import logoCss from '/images/css3.png';
import logoGit from '/images/git.png';
import logoGitHub from '/images/Logogithub.png';
import logoHtml from '/images/html5.png';
import logoJs from '/images/js.png';
import logoNodeJS from '/images/NodeJS.png';
import logoPython from '/images/python.png';
import logoSass from '/images/sass.png';
import './slider.css';

const logos = [
    { src: logoBack, title: 'Backend' },
    { src: logoBootstrap, title: 'Bootstrap' },
    { src: logoCss, title: 'CSS3' },
    { src: logoGit, title: 'Git' },
    { src: logoGitHub, title: 'GitHub' },
    { src: logoHtml, title: 'HTML5' },
    { src: logoJs, title: 'JavaScript' },
    { src: logoNodeJS, title: 'NodeJS' },
    { src: logoSass, title: 'SASS' },
    { src: logoPython, title: 'PYTHON' },
];

const Slider = () => {
    return (
        <div className='container-fluid slider'>
            <div className="slide-track">
                {logos.map((logo, index) => (
                    <div className="slide" key={index}>
                        <img className='img-Slider' src={logo.src} alt={logo.title} />
                        <div className="logo-title">{logo.title}</div>
                    </div>
                ))}
                {logos.map((logo, index) => (
                    <div className="slide" key={`duplicate-${index}`}>
                        <img className='img-Slider' src={logo.src} alt={logo.title} />
                        <div className="logo-title">{logo.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
