import React, { Component } from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './ChatBox.css';
import postService from '../../utils/postService';


class ChatBox extends Component{
    state = {
        formData : {
            content : '',
        },
    };
    formRef = React.createRef();
    handleSubmitPost = e => {
        e.preventDefault();
        this.props.handleAddPost(this.state.formData, this.props.lastGroup._id);
    };
    handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
        formData
    });
    };
    
   
    render(){
        return(
            <div className="ChatBox">
                <h1>Chatbox</h1>
                <section id="chat" class="boxshadow">
        {this.props.posts.slice(-5,).map(post => <div><p>{post.content}</p></div>)}
                </section>
                <section id="user" class="boxshadow">
                    <form className="form-horizontal" onSubmit={this.handleSubmitPost}>
                        <textarea id="message" className="form-control" onChange={this.handleChange} name="content"></textarea>
                        <button type="submit" className="btn">Send</button>
                    </form>
                    
                </section>
            </div>
        )

    }
  
    
}

export default ChatBox;