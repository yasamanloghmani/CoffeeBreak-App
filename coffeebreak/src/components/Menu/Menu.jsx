import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserCog} from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { faMoon} from '@fortawesome/free-solid-svg-icons';
import { faSun} from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

const Menu = (props) => {
    let nav = props.user ?
      <div>
            <Link to='/' className='Menu-link'><FontAwesomeIcon icon={ faCoffee } className='icons' />Dashboard</Link>
            <Link to='/group' className='Menu-link'><FontAwesomeIcon icon={ faUsers } className='icons' />Channel</Link>
            <Link to='/profile' className='Menu-link'><FontAwesomeIcon icon={ faUserCog } className='icons' />Profile</Link>
            <Link to='' className='Menu-link' onClick={props.handleLogout}><FontAwesomeIcon icon={ faSignOutAlt } className='icons' />LOG OUT</Link>
            <section className='moodSection'>
            <Link onClick={props.toggleTheme} className= {props.theme === 'light' ? 'Menu-link moodLight'  : 'Menu-link moodDark'} >
              {props.theme === 'light' ?  <FontAwesomeIcon icon={ faSun } className='icons' /> :<FontAwesomeIcon icon={ faMoon } className='icons' /> } 
            </Link>
            <p>{props.theme === 'light' ? 'Light'  : 'Dark'} </p>
            </section>
            
      </div>
      :
      <div>
        <Link to='/login' className='Menu-link'>LOG IN</Link>
        <Link to='/signup' className='Menu-link'>SIGN UP</Link>
      </div>;
  
    return (
      <div className='Menu'>
        {nav}
      </div>
    );
  };
export default Menu;
