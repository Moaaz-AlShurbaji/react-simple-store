import './navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react'
function Navbar()
{
    return(
        <>
            <nav className="navbar navbar-expand-lg" style={{"backgroundColor":"#333"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to={'/'}>Shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/cart'}><ShoppingCart size={32}/></Link>
                    </li>

                </ul>
                
                </div>
            </div>
            </nav>
        </>
    );
}

export default Navbar;