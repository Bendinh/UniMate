import {Link} from "react-router-dom";
import "../components/navbar.css";
import logo from "../assets/unimate_logo.png";
import login from "../assets/login.svg"
import burger from "../assets/burger.svg"
import { useRef } from 'react';

export const Navbar = () => {
    const menu = useRef<HTMLDivElement>(null);
    const openMenu = () =>{
        if (menu.current) {
            if (menu.current.className == "menu"){
                menu.current.className = "menu close"
            }else{
                menu.current.className = "menu"
            }
        }
    }
    return (
    <nav>
        <div className='nav-container'>
            <Link to='/'><div className='item logo' style={{backgroundImage: `url(${logo})`}}></div></Link>
            <div className='item tablist'>
                <div className='tab'><Link to='/home'>HOME</Link></div>
                <div className='tab'><Link to='/mentors'>MENTORS</Link></div>
                <div className='tab'><Link to='/about'>ABOUT</Link></div>
            </div>
            <div className='item login'>
                <div className='icon' style={{backgroundImage: `url(${login})`}}></div>
                LOGIN
            </div>
            <div className='item-v2'>
                <div className='burger' style={{backgroundImage: `url(${burger})`}} onClick={openMenu}></div>
            </div>
        </div>
        {/*Menu for mobile*/}
        <div className='menu' ref={menu}>
            <Link to='/home'><div className='option' onClick={openMenu}>Home</div></Link>
            <Link to='/mentors'><div className='option' onClick={openMenu}>Mentors</div></Link>
            <Link to='/about'><div className='option' onClick={openMenu}>About</div></Link>
        </div>
    </nav>
    );
};

export default Navbar