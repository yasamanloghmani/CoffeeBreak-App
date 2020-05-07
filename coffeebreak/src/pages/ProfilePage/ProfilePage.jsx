import React, { Component } from "react";
import userService from "../../utils/userService";
import { Redirect } from "react-router-dom";
import './ProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub } from "@fortawesome/free-brands-svg-icons"


export class ProfilePage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false
        };
    }

    // handleChange = evt => {
    //     this.setState({
    //         [evt.target.name]: evt.target.value
    //     });
    // };

    // handleSubmit = async evt => {
    //     evt.preventDefault();
    //     try {
    //         await userService.updateUser(this.state);
    //         this.props.history.push("/profile");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    handleDelete = async evt => {
        evt.preventDefault();
        try {
            console.log(this.props.user)
            await userService.deleteUser(this.props.user);
            this.setState({ isDeleted: true });
            this.props.handleDeleteProfile();
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        if (this.state.isDeleted) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="ProfilePage">
                    <div className="">
                         <header>
                             <h2 className="basic-title font-weight-bold profile-title">
                                 {this.props.user.name}'s Profile
                             </h2>
                         </header>
                                <h4 className="headermargin">Do you want to delete your account ?</h4>
                                <button
                                    className="btn btn-default"
                                    onClick={this.handleDelete}
                                >
                                    Yes , Delete Account!
                                </button>
                        
                    </div>
                    <div className='about'>
                    <h5>Developed by <span>Yasaman Loghmani</span></h5>
                    <a href='https://linkedin.com/in/yasamanloghmani' className='Menu-link'><FontAwesomeIcon className='icons' icon={faLinkedin} /></a>
                    <a href='https://https://github.com/yasamanloghmani' className='Menu-link'><FontAwesomeIcon className='icons' icon={faGithub} /></a>

                    </div>
                    
                </div>
                
            );
        }
    }
}

export default ProfilePage;