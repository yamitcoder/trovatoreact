import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'
import {NavLink} from "react-router-dom"

const Navbar = () =>{
    return(
    
        <nav className="nav">

            <NavLink to='/'><img className="logo" src="https://companieslogo.com/img/orig/DESP_BIG-1c252584.png?t=1632685419" alt="Despegar"/></NavLink>

            <div>
            <ul className="nav-li">
                <li className="item-li"><NavLink to='/'>Home</NavLink></li>
                <li className="item-li"><NavLink to='/categories/Paquetes'>Paquetes</NavLink></li>
                <li className="item-li"><NavLink to='/categories/Circuitos'>Circuitos</NavLink></li>
                <li className="item-li"><NavLink to='/categories/Asistencia'>Asistencia</NavLink></li>
            </ul>
            </div>

            <NavLink to="/cart">
                <CartWidget counter={15}/>
            </NavLink>

      </nav>
    );
}

export default Navbar;