// ScrollHideShow.js
import { useEffect } from 'react';

function ScrollHideShow({ handleScroll }) {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return null;
}

export default ScrollHideShow;
