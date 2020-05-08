import React, { Component } from "react";

class GroupHeader extends Component{

    render(){
        return(
            <div className='headerbox fixed'>
            <h1>{this.props.lastGroup.name} Channel</h1>
            <img src='images/group.png' className='HeaderImg'/>
            <p></p>
        <ul>
            <li>
                <h5>{this.props.lastGroup.slogan}</h5>
            </li>
        </ul>

        <p className='pspan'><span>Channel Password</span>{this.props.lastGroup._id}</p>
        
        </div>
        )
    }
    
}


export default GroupHeader;