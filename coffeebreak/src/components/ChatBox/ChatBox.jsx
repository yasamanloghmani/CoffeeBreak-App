import React, { Component } from "react";
import './ChatBox.css';


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
                <section >
                    {this.props.posts.slice(-3,).map(post => <div className="post"><p>{post.content}</p></div>)}
                </section>
                <section id="user" class="boxshadow">
                    <form className="text-cenetr" onSubmit={this.handleSubmitPost}>
                        <textarea id="message" className="form-control" onChange={this.handleChange} name="content"></textarea>
                        <div class="container">
                        <div class="row">
                            <div class="col text-center">
                            <button type="submit" className="btn btn-default">Send</button>
                            </div>
                        </div>
                        </div>
                        
                    </form>
                    
                </section>
            </div>
        )

    }
  
    
}

export default ChatBox;