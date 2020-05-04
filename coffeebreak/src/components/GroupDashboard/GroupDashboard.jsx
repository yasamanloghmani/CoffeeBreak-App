import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupDashboard.css';
import GroupChart from '../GroupChart/GroupChart';
import MemberView from '../MemberView/MemberView';

export default function GroupDashboard(props){
    return(
        <div>
            <h1>Group dashboard</h1>
            <GroupChart></GroupChart>
            <MemberView></MemberView>
        </div>
    )
}