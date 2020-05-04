import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './MainHeader.css';

export default function MainHeader(props){
    return(
        <div className='headerbox fixed'>
            <h1>CoffeeBreak</h1>
        <p>Hello {props.user.name}, your limit of cost of today is {props.user.limitOfExpense} and you can have just {props.user.limitOfCoffee}L per day.</p>
        <p>Good Luck</p>
        <img src='images/main.png' className='HeaderImg mainImg'/>
        </div>
    )
}