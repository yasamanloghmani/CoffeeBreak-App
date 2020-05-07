import React, { Component } from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupPage.css';
import GroupHeader from '../../components/GroupHeader/GroupHeader';
import GroupDashboard from '../../components/GroupDashboard/GroupDashboard';
import ChatBox from '../../components/ChatBox/ChatBox';
import userService from '../../utils/userService';
import groupService from '../../utils/groupService';

class GroupPage extends Component{
    state = {
        groups: [],
        lastGroup : {tips : [] , users : []}
    }
    
    handleLastGroup = async (groupId) => {
        const lastGroup = await groupService.getGroup(groupId);
        this.setState({lastGroup});
        
        
    }
    async componentDidMount() {
        const groups = await userService.getAllGroups(this.props.user.id);
        this.setState({groups});
        this.handleLastGroup(groups[groups.length-1]) 
    }
    
    render(){
        return(
            <div className='GroupPage'>
                <div className='flexLeft'>
                <GroupHeader lastGroup={this.state.lastGroup}></GroupHeader>
                <GroupDashboard lastGroup={this.state.lastGroup}></GroupDashboard>
                </div>
                <div className='flexRight'>
                <ChatBox></ChatBox>
                </div>
                
               
            </div>
        );

    }
    
}


export default GroupPage;