import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './Dashboard.css';
import AddCofeeBtn from '../AddCoffeeBtn/AddCoffeeBtn';
import CostChart from '../CostChart/CostChart';
import CoffeeChart from '../CoffeeChart/CoffeeChart';

export default function Dashboard(props){
    return(
        <div>
            <h1>Dashboard</h1>
            <AddCofeeBtn></AddCofeeBtn>
            <CostChart></CostChart>
            <CoffeeChart></CoffeeChart>
        </div>
    )
}