import logo from './logonike.png'
import carrito from './carrito.png'
import './navBar.css'

const NavBar = () => {
  return(
    <header>
      <img src={logo} className="logo"></img>
      <nav>
        <ul className='navBar-list'>
          <li className='navBar-item'><a className="list-link" href="#">Productos</a></li>
          <li className='navBar-item'><a className="list-link" href="#">Productos</a></li>
          <li className='navBar-item'><a className="list-link" href="#">Productos</a></li>
          
        </ul>
      </nav>
      <a href='#'><img src={carrito} className="carrito"></img></a>
      
    </header>
  )
}

export default NavBar;