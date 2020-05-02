import React from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupPage.css';
import Menu from '../../components/Menu/Menu';
import GroupHeader from '../../components/GroupHeader/GroupHeader';
import GroupDashboard from '../../components/GroupDashboard/GroupDashboard';
import ChatBox from '../../components/ChatBox/ChatBox';

export default function GroupPage(props){
    return(
        <div>
            <h1>Group page</h1>
            <Menu></Menu>
            <GroupHeader></GroupHeader>
            <GroupDashboard></GroupDashboard>
            <ChatBox></ChatBox>
        </div>
    )
}