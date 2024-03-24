import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/navbar.css";
import logo from "../../assets/logo/unimate_logo.png";
import { useRef } from 'react';
import {auth} from "../../services/firebase"
import {onAuthStateChanged } from "firebase/auth";
import {Menu, AccountCircle} from '@mui/icons-material';

export const Navbar = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
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

    useEffect (() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true)
            }
            else {
                setIsAuthenticated(false)
            }
        });
    });
    
    return (
    <>
    <nav>
        <div className='nav-container'>
            <Link to='/'><div className='item logo' style={{backgroundImage: `url(${logo})`}}></div></Link>
            <div className='item tablist'>
                <div className='tab'><Link to='/home'>HOME</Link></div>
                <div className='tab'><Link to='/mentors'>MENTORS</Link></div>
                <div className='tab'><Link to='/about'>ABOUT</Link></div>
            </div>
            <div className='item login'>
                {isAuthenticated ? (
                <div className='icon'><AccountCircle/></div>
                ) : (
                <>
                    <div className='icon'><AccountCircle/></div>
                    <Link to='/signup'>LOGIN</Link>
                </>
                )}
                </div>
            <div className='item-v2'>
                <div className='burger' onClick={openMenu}><Menu/></div>
            </div>
        </div>
        {/*Menu for mobile*/}
        <div className='menu' ref={menu}>
        <Link to='/'><div className='option' onClick={openMenu}>Home</div></Link>
        <Link to='/mentors'><div className='option' onClick={openMenu}>Mentors</div></Link>
        <Link to='/about'><div className='option' onClick={openMenu}>About</div></Link>
    </div>
    </nav>
    </>
    );
};

export default Navbar