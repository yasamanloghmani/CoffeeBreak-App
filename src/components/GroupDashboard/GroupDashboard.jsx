import React from "react";
import './GroupDashboard.css';
import MemberView from '../MemberView/MemberView';

export default function GroupDashboard(props){
    console.log(props.lastGroup)
    return(
        <div className='dashboardbox'>
            <h1>Channel Tips</h1>
            
            <div className='gridtips'>
            {props.lastGroup.tips.map((tip) => <p> {tip} </p>)}
            </div>
            
            
            <MemberView lastGroup={props.lastGroup}></MemberView>
        </div>
    )
}