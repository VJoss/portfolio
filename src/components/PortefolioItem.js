import react, { useState, useEffect } from 'react';
import jsonData from '../data/parcours.json';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function PortefolioItem () {
    const [PortefolioData, setPortefolioData] = useState(null);

    useEffect(() => {
        setPortefolioData(jsonData);
    }, []);
    const openSite = (link) => {
        window.open(link, "_blank"); // Ouvre le lien dans une nouvelle fenêtre ou un nouvel onglet
    };

    return (
        <div className="portefolio-item">
            {PortefolioData && (
                <>
                <div id="parcours">
                <h2 className="titre-presentation">{PortefolioData.title}</h2>
                <p className="description-presentation">{PortefolioData.description}</p>
                </div>
                <h3 id="projets">Projets</h3>
                <ul className="bloc-projets">
                    {PortefolioData.projects.map((project, index) => (
                        <li className="carte-projet"key={index} onClick={() => openSite(project.link)}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            
                            <img src={project.image} alt={project.title}/>
                        </li>
                    ))}
                    </ul>
                    </>
            )}

<div className="social-icons">
            <a className="social-icon" onClick={() => openSite("https://www.linkedin.com/in/jossua-verdelet-1052bb257/")}><FaLinkedin /></a>
            <a className="social-icon" onClick={() => openSite("https://github.com/VJoss")}><FaGithub /></a>
        </div>
        </div>
    );
}

export default PortefolioItem;