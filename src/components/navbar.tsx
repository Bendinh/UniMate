import React, {useState} from "react";
import {NavLink,Link} from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/unimate_logo.png";
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
    <nav>
        <Link to="/" className="title"><img src={logo} alt="UniMate Logo" style={{height: '80px'}} /></Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/mentors"><button className="book-button">Book Mentors</button></NavLink>
            </li>
        </ul>
        <div className = 'menuDropDownContent' style = {{display: menuOpen ? "block": "none"}}>
                <NavLink className="book-option" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink className="book-option" to="/mentors" onClick={() => setMenuOpen(false)}>Book Mentors</NavLink>
        </div>
    </nav>
    );
};

export default Navbar