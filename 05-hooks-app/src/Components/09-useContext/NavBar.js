import React from 'react';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">Use Context</Link>
            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeclassname='active' className="nav-link" aria-current="page" to="./home" >Home</NavLink>
                        <NavLink activeclassname='active' className="nav-link" aria-current="page" to="./about" >About</NavLink>
                        <NavLink activeclassname='active' className="nav-link" aria-current="page" to="./login" >Login</NavLink>
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                         */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
