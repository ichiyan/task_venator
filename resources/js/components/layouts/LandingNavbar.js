import React from "react";
import {Link} from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="">About</Link></li>
                <li><Link to="">Features</Link></li>
                <li><Link to="">FAQs</Link></li>
                <li><Link to="">Pricing</Link></li>
                <li><Link to="">Contact</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
}

export default LandingNavbar;
