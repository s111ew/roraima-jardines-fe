import { useEffect, useState } from 'react';
import logo from '../assets/Logo.svg';
import Button from '../components/Button';

function Navbar() {
  const [scrollValue, setScrollValue] = useState(0)
  
  useEffect(() => {
    function onScroll() {
      setScrollValue(window.scrollY);
      console.log(scrollValue)
    }

    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const logoSize = Math.max(68, 120 - scrollValue)

  return (
    <nav className='navbar'>
      <img src={logo} alt="Roraima Jardines logo" style={{ width: `${logoSize}px`, transition: 'width 0.1s ease-out'  }}/>
      <ul className='links-container'>
        <li className='link'>Productos</li>
        <li className='link'>Haz tu Jardín</li>
        <li className='link'>Nuestra Historia</li>
        <li className='link'>Contacto</li>
        <li className='link'><Button text={'Puntos de venta'} /></li>
      </ul>
    </nav>
  );
}

export default Navbar;