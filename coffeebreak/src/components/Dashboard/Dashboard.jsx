import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './Dashboard.css';
import AddCofeeBtn from '../AddCoffeeBtn/AddCoffeeBtn';
import CostChart from '../CostChart/CostChart';
import CoffeeChart from '../CoffeeChart/CoffeeChart';

export default function Dashboard(props){
    return(
        <div className='dashboardbox'>
            <h1>Dashboard</h1>
            
            <CostChart></CostChart>
            <CoffeeChart></CoffeeChart>
            <AddCofeeBtn></AddCofeeBtn>
        </div>
    )
}