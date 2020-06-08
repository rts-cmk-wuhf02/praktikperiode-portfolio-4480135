import React from "react";
import { Link } from "@reach/router";

const Header = () => {
    return (
        <header>
            <span>MadCreativity</span>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/creations">Creations</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
