import React, { Component } from "react";
import './MainDashboard.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
import GroupView from '../../components/GroupView/GroupView';
import { PromiseProvider } from "mongoose";

class MainDashboard extends Component{
    render(){
        return(
            <div className='MainDashboard'>
                <div className='flexLeft'>
                <MainHeader user={this.props.user}></MainHeader>
                <Dashboard ></Dashboard>
                </div>
                <div className='flexRight'>
                <GroupView></GroupView>
                </div>
                
                
            </div>
        );
    }
}

export default MainDashboard;