import React from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/NavBar.css'

function NavBar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <h3 className="title">Survey App</h3>
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="btn btn-info m-1">
                            Questionnaire
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin" className="btn btn-info m-1" >
                            Admin
                        </NavLink>
                    </li>
                </div>
            </div>

        </nav>
    )
}

export default NavBar;
