import CartWidget from './CartWidget';

const NavBar = () => {
    return ( <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                <div className = "container-fluid">
                    <a className = "navbar-brand" href = "/#">
                        <img src={'./images/Bosch-Logo.png'} className="brand" alt="brand" />
                    </a>
                    <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse" data-bs-target = "navbarNav" aria-controls = "navbarNav" aria-expanded = "false" aria-label = "Toggle navigation">
                        <span className = "navbar-toggler-icon"> </span>
                    </button>
                    <div className = "collapse navbar-collapse" id = "navbarNav">
                        <ul className = "navbar-nav ms-5 w-100">
                            <li className = "nav-item ms-5">
                                <a className = "nav-link active" aria-current = "page" href = "/#"> Inicios </a>
                            </li>
                            <li className = "nav-item ms-5">
                                <a className = "nav-link" href = "/#" > Servicios </a>
                            </li>
                            <li className = "nav-item ms-5">
                                <a className = "nav-link" href = "/#" > Merchandising </a>
                            </li>
                            <div className="d-grid gap-2 d-md-flex justify-content-end w-100">
                                <button className="btn btn-outline-secondary me-md-2" type="button">LOGIN</button>
                            </div>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;