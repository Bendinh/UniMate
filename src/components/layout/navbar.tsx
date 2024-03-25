import {Link, useLocation} from "react-router-dom";
import { useEffect, useState} from "react";
import "../../styles/navbar.css";
import logo from "../../assets/logo/unimate_logo.png";
import { useRef } from 'react';
import {auth} from "../../services/firebase"
import {onAuthStateChanged } from "firebase/auth";
import {Avatar} from "@mui/material"
import {Menu, AccountCircle} from '@mui/icons-material';

export const Navbar = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [name,setName] = useState("");
    const menu = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const hideNavbarPaths = ["/login", "/signup", "/signup1", "/signup2"];


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
                setName(user.displayName || "");
            }
            else {
                setIsAuthenticated(false)
            }
        });
    });

    
    // function stringToColor(string: string) {
    //     let hash = 0;
    //     let i;
    
    //     /* eslint-disable no-bitwise */
    //     for (i = 0; i < string.length; i += 1) {
    //     hash = string.charCodeAt(i) + ((hash << 5) - hash);
    //     }
    
    //     let color = '#';
    
    //     for (i = 0; i < 3; i += 1) {
    //     const value = (hash >> (i * 8)) & 0xff;
    //     color += `00${value.toString(16)}`.slice(-2);
    //     }
    //     /* eslint-enable no-bitwise */
    //     return color;
    // }
  
    // function stringAvatar(name: string) {
    //     return {
    //     sx: {
    //         bgcolor: stringToColor(name),
    //     },
    //     children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    //     };
    // }

    if (hideNavbarPaths.includes(location.pathname)) {
        return null; // Do not render the navbar for the specified paths
    }
    
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
                    <div>
                        {/*<Avatar {...stringAvatar(name)}/>*/}
                        <AccountCircle sx={{marginTop: '40%'}}/>
                    </div>
                ) : (
                <>
                    <Link to='/login'>LOGIN</Link>
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