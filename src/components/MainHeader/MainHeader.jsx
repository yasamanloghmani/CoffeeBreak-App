import React, { Component } from "react";
import './MainHeader.css';

class MainHeader extends Component{
    render(){
        return(
            <div className='headerbox fixed'>
                <h1>CoffeeBreak</h1>
            <p>Hello {this.props.user.name}, your limit of cost of today is {this.props.user.limitOfExpense} and you can have just {this.props.user.limitOfCoffee}L per day.</p>
            <p>Good Luck</p>
            <img src='images/main.png' className='HeaderImg mainImg'/>
            </div>
        );
    }
}

export default MainHeader;