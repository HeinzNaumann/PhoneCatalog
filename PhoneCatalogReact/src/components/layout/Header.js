
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header({ className }) {

  return (
    <header className={classNames("header", className)}>
      <Link to='/'>
        <div className='header-logo'>
          <img src={logo} height="30px" alt="logo" />
        </div>
      </Link>
      <nav className='header-nav'>
        <NavLink className='myButton2' to='/adverts/new'>
          Nuevo Anuncio{" "}
        </NavLink>
        
      
      </nav>
    </header>
      )
}

export default Header;
