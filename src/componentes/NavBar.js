import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; ;

export default function NavBar() {
  return (
    <div className="navbar">
        <nav>
          <ul>
            <div className="navbarli">
              <li className="navbaritem"><Link to="/" className="navbarlink">Inicio</Link></li>
              <li className="navbaritem"><Link to="/about" className="navbarlink">Acerca de</Link></li>
              <li className="navbaritem"><Link to="/films" className="navbarlink">Films</Link></li>
              <li className="navbaritem"><Link to="/shoppingcart" className="navbarlink"><FaShoppingCart /> </Link></li>      
              <li className="navbaritem"><Link to="/user" className="navbarlink">Contacta con nosotros</Link></li>
              <li className="navbaritem"><Link to="/login" className="navbarlink">Login</Link></li>
              <li className="navbaritem"><Link to="/user" className="navbarlink">PrivateRoute</Link></li>
              <li className="navbaritem"><Link to="/admin" className="navbarlink">PrivateRoute</Link></li>
              <li className="navbaritem"><Link to="/form" className="navbarlink">Encuentra tu película</Link></li>
            </div>
          </ul>
        </nav>
    </div>
  );
}