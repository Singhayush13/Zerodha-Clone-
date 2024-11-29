import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#FFF" }}>
            <div className="container p-2">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" style={{ width: "120px" }} alt="logo" />
                </Link>

                {/* Toggler for mobile view */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
