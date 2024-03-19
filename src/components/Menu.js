import React, { useState, useEffect }  from "react";
import { FaBars } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import'../menu.css';
import gsap from 'gsap';

function Menu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMenu = () => {
      if (!isAnimating) {
        // Vérifie si l'animation est en cours
        setIsAnimating(true);
      setIsMenuOpen(!isMenuOpen);
      }
    };

    const closeMenu = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    useEffect(() => {
      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => setIsAnimating(false), // Met à jour l'état de l'animation une fois terminée
      });

      if (isMenuOpen) {
        timeline.to(".sep", { duration: 0.75,height:`100%`, delay:0.5 });
        timeline.to(".sep_icon", { duration: 0.25,opacity: 1,delay: -0.5 });
        timeline.from('.menu_left_inner_item',{ y:40, opacity:0, stagger:0.25, delay: -0.55 })
        timeline.from('.menu_right_inner_item',{ y:40, opacity:0, stagger:0.25, delay: -0.55 })
                
      } else {
        timeline.to(".sep", { duration: 0,height:`0` });
        timeline.to(".sep_icon", { duration: 0,opacity: 0});
      }
  
      timeline.play();
    }, [isMenuOpen]);
  
    
    return(
      <header>
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <div className='toggle' onClick={toggleMenu}>
          <i className='fas fa-bars ouvrir'><FaBars></FaBars></i>
          <i className='fas fa-times fermer'><FaRegCircleXmark></FaRegCircleXmark></i>
        </div>
        <div className='menu'>
            <div className="menu_left">
              <div className="menu_left_inner">
                <div className="menu_left_inner_item">
                <a href="#accueil" onClick={closeMenu}>Accueil <span className='menu_left_inner_item_small'>#01</span></a>
                </div>
                <div className="menu_left_inner_item">
                <a href="#parcours" onClick={closeMenu}>Parcours <span className='menu_left_inner_item_small'>#02</span></a>
                </div>
                <div className="menu_left_inner_item">
                <a href="#projets" onClick={closeMenu}>Projets <span className='menu_left_inner_item_small'>#03</span></a>
                </div>
                <div className="menu_left_inner_item">
                <a href="#contact" onClick={closeMenu}>Contact <span className='menu_left_inner_item_small'>#04</span></a>
                </div>
              </div>
            </div>
            <div className="menu_right">
              <div className="menu_right_inner">
                <div className='menu_right_inner_item'>
                  <div className='menu_right_inner_item_title'>
                    Contact
                  </div>
                  <ul>
                    <li>
                      <a href="mailto:contact@website.com" onClick={closeMenu}>contact@website.com</a>
                    </li>
                  </ul>
                </div>
                <div className='menu_right_inner_item'>
                  <div className='menu_right_inner_item_title'>
                    Socials
                    </div>
                    <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/jossua-verdelet-1052bb257/" onClick={closeMenu}>Linkedin</a>
                    </li>
                    <li>
                      <a href="https://github.com/VJoss" onClick={closeMenu}>Github</a>
                    </li>
                    </ul>
                    </div>
              </div>
            </div>
            <div className="sep"></div>
            <div className="sep_icon">#VJ</div>
        </div>
      </nav>
      </header>
    );
}
export  default Menu;