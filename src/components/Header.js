// Header.js

import React, { useState } from 'react';
import ScrollHideShow from './ScrollHideShow';


function Header() {

  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Cache le menu lorsque la position de défilement est entre 100 et 600 pixels
    setIsVisible(currentScrollPos < 100 || currentScrollPos > 900);

    setIsAtTop(currentScrollPos <= 900);
  };
  




  return (
    <header>
      <ScrollHideShow handleScroll={handleScroll} />
      <div className="filter">
        <div className="menu">
      <nav className='navigation' style={{ display: isVisible ? 'block' : 'none',
       backgroundColor: isAtTop ? 'transparent' : '#141c24',
        borderRadius: isAtTop ?'transparent' : '25px',
          marginTop: isAtTop ? '0px': '15px', 
           boxShadow: isAtTop ? '':'rgba(255, 255, 255, 0.11) 0px 0px 5px,  rgba(255, 255, 255, 0.27) 0px 0px 30px',
            textAlign: isAtTop ? '':'center',
            }}>
        <ul>
          <li><a href="#accueil">// Accueil</a></li>
          <li><a href="#parcours">// Parcours</a></li>
          <li><a href="#projets">// Projets</a></li>
          <li><a href="#contact">// Contact</a></li>
        </ul>
      </nav>
      </div>
      <div id="accueil">
        <img src="https://media.licdn.com/dms/image/D4D03AQHw6VWue72D_w/profile-displayphoto-shrink_800_800/0/1699292195270?e=2147483647&v=beta&t=N3E0EgcJNcoF0dhf4mMEiWjfHonaA1N-MvxjGlx4HW0" alt="Portrait de mon profile" />
        <div className="title-header">
          <h1>Verdelet Jossua</h1>
          <p>Développeur | Passionné par la technologie.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
