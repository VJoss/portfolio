import react, { useState, useEffect } from 'react';
import jsonData from '../data/parcours.json';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function PortefolioItem () {
    const [PortefolioData, setPortefolioData] = useState(null);

    useEffect(() => {
        setPortefolioData(jsonData);
    }, []);

    return (
        <div className="portefolio-item">
            {PortefolioData && (
                <>
                <div className="bloc-presentation">
                <h2 className="titre-presentation">{PortefolioData.title}</h2>
                <p className="description-presentation">{PortefolioData.description}</p>
                </div>
                <h3 className="Titre-projets">Projets</h3>
                <ul className="bloc-projets">
                    {PortefolioData.projects.map((project, index) => (
                        <li className="carte-projet"key={index}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link}>voir sur Github</a>
                            <img src={project.image} alt={project.title}/>
                        </li>
                    ))}
                    </ul>
                    </>
            )}

<div className="social-icons">
            <a href="https://www.linkedin.com/in/jossua-verdelet-1052bb257/"><FaLinkedin /></a>
            <a href="https://github.com/VJoss"><FaGithub /></a>
        </div>
        </div>
    );
}

export default PortefolioItem;