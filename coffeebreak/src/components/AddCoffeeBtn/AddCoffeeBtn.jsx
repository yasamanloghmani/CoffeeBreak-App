import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './AddCoffeeBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AddCoffeeBtn(props){
    return (
        <div>
            <button className='addBtn'>
            <FontAwesomeIcon icon={ faPlus } className='icons ' />
            </button>
        </div>
    )
}