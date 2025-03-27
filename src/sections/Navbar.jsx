import logo from '../assets/Logo.svg'
import Button from '../components/Button'

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={ logo } alt="Roraima Jardines logo" />
      <ul className='links-container'>
        <li className='link'>Productos</li>
        <li className='link'>Haz tu Jardín</li>
        <li className='link'>Nuestra Historia</li>
        <li className='link'>Contacto</li>
        <li className='link'><Button text={'Puntos de venta'}/></li>
      </ul>
    </nav>
  )
}

export default Navbar