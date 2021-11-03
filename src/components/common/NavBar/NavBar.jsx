import React from 'react'
import {NavLink} from 'react-router-dom';

export const NavBar = () => {

    return(
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/react" className="nav-link" activeClassName="active" exact href="/#">React</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/angular" className="nav-link" activeClassName="active" exact href="/#">Angular Js/2+</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/redux" className="nav-link" activeClassName="active" exact href="/#">Redux/Hooks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/rxjs" className="nav-link" activeClassName="active" exact href="/#">Rxjs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jquery" className="nav-link" activeClassName="active" exact href="/#">Jquery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/javascript" className="nav-link" activeClassName="active" exact href="/#">Javascript</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/typescript" className="nav-link" activeClassName="active" exact href="/#">Typescript</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/spectrum" className="nav-link" activeClassName="active" exact href="/#">Adobe React Spectrum</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="skills/bootstrap" className="nav-link" activeClassName="active" exact href="/#">Bootstrap</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="skills/htmlcssless" className="nav-link" activeClassName="active" exact href="/#">Html/Css/Less</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="skills/analytics" className="nav-link" activeClassName="active" exact href="/#">Google Analytics</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}