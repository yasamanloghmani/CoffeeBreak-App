import React, { Component } from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './Dashboard.css';
import AddCofeeBtn from '../AddCoffeeBtn/AddCoffeeBtn';
import CostChart from '../CostChart/CostChart';
import CoffeeChart from '../CoffeeChart/CoffeeChart';

class Dashboard extends Component{
    render(){
        return(
            <div className='dashboardbox'>
                <h1>Dashboard</h1>
                <div className='gridchart'>
                    <CostChart user={this.props.user}></CostChart>
                    <CoffeeChart></CoffeeChart>
                    <AddCofeeBtn handleAddCoffee={this.props.handleAddCoffee}></AddCofeeBtn>
                </div>

            </div>
        );
    }
    
}

export default Dashboard;