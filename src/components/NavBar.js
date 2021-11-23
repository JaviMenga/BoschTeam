import brand from './multimedia/Bosch-Logo.png';
import 'bootstrap/dist/css/bootstrap.css'

const NavBar = () => {
    return ( <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                <div className = "container-fluid">
                    <a className = "navbar-brand" href = "#">
                        <img src={brand} className="brand" />
                    </a>
                    <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse" data-bs-target = "navbarNav" aria-controls = "navbarNav" aria-expanded = "false" aria-label = "Toggle navigation">
                        <span className = "navbar-toggler-icon"> </span>
                    </button>
                    <div className = "collapse navbar-collapse" id = "navbarNav">
                        <ul className = "navbar-nav ms-5">
                            <li className = "nav-item ms-5">
                                <a className = "nav-link active" aria-current = "page" href = "#"> Inicios </a>
                            </li>
                            <li className = "nav-item ms-5">
                                <a className = "nav-link" href = "#" > Servicios </a>
                            </li>
                            <li className = "nav-item ms-5">
                                <a className = "nav-link" href = "#" > Merchandising </a>
                            </li>
                            <li className = "nav-item ms-5">
                                <a className = "nav-link disabled"> LOGIN </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;