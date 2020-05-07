import React, { Component } from "react";
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
                    <CostChart costpercent={this.props.costpercent} costdata={this.props.costdata}></CostChart>
                    <CoffeeChart sizepercent={this.props.sizepercent} sizedata={this.props.sizedata}></CoffeeChart>
                    <AddCofeeBtn handleAddCoffee={this.props.handleAddCoffee}></AddCofeeBtn>
                </div>

            </div>
        );
    }
    
}

export default Dashboard;