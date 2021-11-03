import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <>
            <div className="row footer-background">
                <div className="col-md-4" style={{textAlign:'center'}}>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                </div>
                <div className="col-md-4" style={{textAlign:'center'}}>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                </div>
                <div className="col-md-4" style={{textAlign:'center'}}>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                    <NavLink to="/" className="nav-link footer-nav-link" exact href="/#">Designed By</NavLink>
                </div>
            </div>
        </>
    )
}
