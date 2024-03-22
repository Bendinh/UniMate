import {Link} from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../assets/logo/unimate_logo.png";
import { useRef } from 'react';
import {Menu, AccountCircle} from '@mui/icons-material';

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
    <>
    <nav>
        <div className='nav-container'>
            <Link to='/'><div className='item logo' style={{backgroundImage: `url(${logo})`}}></div></Link>
            <div className='item tablist'>
                <div className='tab'><Link to='/home'>HOME</Link></div>
                <div className='tab'><Link to='/mentors'>MENTORS</Link></div>
                <div className='tab'><Link to='/signup1'>SIGN UP</Link></div>
            </div>
            <div className='item login'>
                <div className='icon'><AccountCircle/></div>
                LOGIN
            </div>
            <div className='item-v2'>
                <div className='burger' onClick={openMenu}><Menu/></div>
            </div>
        </div>
        {/*Menu for mobile*/}
        <div className='menu' ref={menu}>
        <Link to='/'><div className='option' onClick={openMenu}>Home</div></Link>
        <Link to='/mentors'><div className='option' onClick={openMenu}>Mentors</div></Link>
        <Link to='/signup1'><div className='option' onClick={openMenu}>Sign Up</div></Link>
    </div>
    </nav>
    </>
    );
};

export default Navbar