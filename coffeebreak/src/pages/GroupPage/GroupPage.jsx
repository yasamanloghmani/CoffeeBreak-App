import React, { Component } from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupPage.css';
import GroupHeader from '../../components/GroupHeader/GroupHeader';
import GroupDashboard from '../../components/GroupDashboard/GroupDashboard';
import ChatBox from '../../components/ChatBox/ChatBox';
import userService from '../../utils/userService';
import groupService from '../../utils/groupService';
import postService from '../../utils/postService';

class GroupPage extends Component{
    state = {
        posts : [],
        groups: [],
        lastGroup : {tips : [] , users : [], posts : []}
    }
    handleLastGroup = async (groupId) => {
        const lastGroup = await groupService.getGroup(groupId);
        this.setState({lastGroup});
        this.handlePosts(lastGroup._id);
        
    }
    handlePosts = async (groupId) => {
        const posts = await postService.getAllPosts(groupId);
        this.setState({posts})
    }
    handleAddPost = async (newPostData, groupId) => {
        const posts = await postService.createPost(newPostData, groupId);
        this.setState({posts})
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
                <ChatBox lastGroup={this.state.lastGroup} handleAddPost={this.handleAddPost} posts={this.state.posts}></ChatBox>
                </div>
                
               
            </div>
        );

    }
    
}


export default GroupPage;