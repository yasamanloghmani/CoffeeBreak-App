import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupDashboard.css';
// import GroupChart from '../GroupChart/GroupChart';
import MemberView from '../MemberView/MemberView';

export default function GroupDashboard(props){
    console.log(props.lastGroup)
    return(
        <div className='dashboardbox'>
            <h1>Channel Tips</h1>
            
            <div className='gridtips'>
            {props.lastGroup.tips.map((tip) => <p> {tip} </p>)}
            </div>
            
            
            <MemberView></MemberView>
        </div>
    )
}