import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupPage.css';
import GroupHeader from '../../components/GroupHeader/GroupHeader';
import GroupDashboard from '../../components/GroupDashboard/GroupDashboard';
import ChatBox from '../../components/ChatBox/ChatBox';

export default function GroupPage(props){
    return(
        <div className='GroupPage'>
            <div className='flexLeft'>
            <GroupHeader></GroupHeader>
            <GroupDashboard></GroupDashboard>
            </div>
            <div className='flexRight'>
            <ChatBox></ChatBox>
            </div>
            
           
        </div>
    )
}