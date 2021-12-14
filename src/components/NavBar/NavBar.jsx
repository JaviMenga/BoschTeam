import brand from '../../assets/Bosch-Logo.png'
import CartWidget from './CartWidget.jsx';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( <nav className = 'navbar navbar-expand-lg navbar-light bg-light'>
                <div className = 'container-fluid'>
                    <Link className = 'navbar-brand' to={'/'}>
                        <img src={brand} className='brand' alt='brand'/>
                    </Link>
                    <button className = 'navbar-toggler' type = 'button' data-bs-toggle = 'collapse' data-bs-target = 'navbarNav' aria-controls = 'navbarNav' aria-expanded = 'false' aria-label = 'Toggle navigation'>
                        <span className = 'navbar-toggler-icon'> </span>
                    </button>
                    <div className = 'collapse navbar-collapse' id = 'navbarNav'>
                        <ul className = 'navbar-nav ms-5 w-100'>
                            <li className = 'nav-item ms-5'>
                                <Link className = 'nav-link' to={'/category/Servicios'} > Servicios </Link>
                            </li>
                            <li className = 'nav-item ms-5'>
                                <Link className = 'nav-link' to={'/category/Merchandising'} > Merchandising </Link>
                            </li>
                            <div className='d-grid gap-2 d-md-flex justify-content-end w-100'>
                                <button className='btn btn-outline-secondary me-md-2' type='button'>LOGIN</button>
                            </div>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;