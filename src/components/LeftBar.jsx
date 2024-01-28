import { Link } from "react-router-dom";

function LeftBar(){
    return(
        <ul className="navbar-nav" id="accordionSidebar">
            <Link className="sidebar-brand" to="/">
                <div className="sidebar-brand">
                    <h2>Ninna Regalería</h2>
                </div>
            </Link>
            <li className="nav-item">
                <Link className="nav-link home" to="/">
                    <span>Dashboard - Ninna</span>
                </Link>
            </li>
            <hr className="sidebar-divider" />
            <ul><span className="nav-link">Productos</span>
                <ul className="nav-item">
                    <Link className="nav-link" to='/products/list?page=1'>
                        <span>Listado</span>
                    </Link>
                </ul>
                <ul className="nav-item">
                    <Link className="nav-link" to='/products/create'>
                        <span>Crear nuevo producto</span>
                    </Link>
                </ul>
                <ul className="nav-item">
                    <Link className="nav-link" to='/products/lastAdedd'>
                        <span>Último producto agregado</span>
                    </Link>
                </ul>
            </ul>
            <hr className="sidebar-divider" />
            <ul><span className="nav-link">Usuarios</span>
                <ul className="nav-item">
                    <Link className="nav-link" to='/users/list?page=1'>
                        <span>Listado</span>
                    </Link>
                </ul>
                <ul className="nav-item">
                    <Link className="nav-link" to='/users/lastAdedd'>
                        <span>Último usuario registrado</span>
                    </Link>
                </ul>
            </ul>
            <hr className="sidebar-divider" />
        </ul>
    )
}

export default LeftBar;