import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'

const Navbar = () =>{
    return(
    
        <nav className="nav">

            <img className="logo" src="https://companieslogo.com/img/orig/DESP_BIG-1c252584.png?t=1632685419" alt="Despegar"/>

            <div>
            <ul className="nav-li">
                <li className="item-li">Home</li>
                <li className="item-li">Paquetes</li>
                <li className="item-li">Asistencias</li>
                <li className="item-li">Circuitos</li>
            </ul>
            </div>

            <CartWidget/>

      </nav>
    );
}

export default Navbar;