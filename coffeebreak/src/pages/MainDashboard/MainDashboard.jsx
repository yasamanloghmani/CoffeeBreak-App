import React from "react";
import './MainDashboard.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
import GroupView from '../../components/GroupView/GroupView';

function MainDashboard() {
    return(
        <div className='MainDashboard'>
            <MainHeader></MainHeader>
            <Dashboard></Dashboard>
            <GroupView></GroupView>
        </div>
    )
}

export default MainDashboard;