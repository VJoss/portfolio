// Header.js

import React, { useState } from 'react';
import ScrollHideShow from './ScrollHideShow';


function Header() {

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); // Déclaration de prevScrollPos et setPrevScrollPos

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  const visible = currentScrollPos < prevScrollPos || currentScrollPos < 100; // Détermine si la barre doit être visible lors du défilement vers le haut
  const scrolledDown= currentScrollPos < prevScrollPos; // Vérifie si le défilement est vers le haut
  const scrolledUp= currentScrollPos > prevScrollPos; // Vérifie si le défilement est vers le bas
  
  // Détermine si la barre doit être visible en fonction de la direction du défilement
  setIsVisible(visible || (scrolledUp && currentScrollPos > 600));
 

  setPrevScrollPos(currentScrollPos);

};




  return (
    <header>
      <ScrollHideShow handleScroll={handleScroll} />
      <div className="filter">
      <nav className='navigation' style={{ display: isVisible ? 'block' : 'none' }}>
        <ul>
          <li><a href="#accueil">// Accueil</a></li>
          <li><a href="#portfolio">// Portfolio</a></li>
          <li><a href="#apropos">// À propos</a></li>
          <li><a href="#contact">// Contact</a></li>
        </ul>
      </nav>
      <div className="profile">
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
