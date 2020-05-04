import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupHeader.css';

export default function GroupHeader(props){
    return(
        <div className='headerbox fixed'>
        <h1>CoffeeBreak</h1>
        <img src='images/group.png' className='HeaderImg'/>
    </div>
    )
}