import React, { Component } from "react";
import userService from "../../utils/userService";
import { Redirect } from "react-router-dom";


export class ProfilePage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: `${this.props.user.name}`,
            limitOfCoffee: `${this.props.user.limitOfCoffee}`,
            limitOfExpense : `${this.props.user.limitOfExpense}`,
            isDeleted: false
        };
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    handleSubmit = async evt => {
        evt.preventDefault();
        try {
            await userService.updateUser(this.state);
            this.props.history.push("/profile");
        } catch (err) {
            console.log(err);
        }
    };

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
                // <div className="ProfilePage">
                //     <div className="">
                //         <header>
                //             <h2 className="basic-title font-weight-bold profile-title">
                //                 {this.props.user.name}'s Profile
                //             </h2>
                //         </header>
                //         <br />
                //         <form
                //             onSubmit={this.handleSubmit}
                //             className="form-horizontal"
                //         >
                //             <div className="form-group row mx-auto">
                //                 <label
                //                     htmlFor="name"
                //                     className="col-sm-3 col-form-label"
                //                 >
                //                     Name:
                //                 </label>
                //                 <input
                //                     type="text"
                //                     className="form-control col-sm-6 mb-4"
                //                     id="name"
                //                     value={this.state.name}
                //                     name="name"
                //                     onChange={this.handleChange}
                //                 />
                //             </div>
                //             <div className="form-group row mx-auto">
                //                 <label
                //                     htmlFor="limitOfCoffee"
                //                     className="col-sm-3 col-form-label"
                //                 >
                //                     Limit Of Coffee Per Day:
                //                 </label>
                //                 <input
                //                     type="text"
                //                     className="form-control col-sm-6 mb-4"
                //                     id="limitOfCoffee"
                //                     value={this.state.limitOfCoffee}
                //                     name="limitOfCoffee"
                //                     onChange={this.handleChange}
                //                 />
                //             </div>
                //             <div className="form-group row mx-auto">
                //                 <label
                //                     htmlFor="limitOfExpense"
                //                     className="col-sm-3 col-form-label"
                //                 >
                //                     Limit Of Expense Per Day:
                //                 </label>
                //                 <input
                //                     type="text"
                //                     className="form-control col-sm-6 mb-4"
                //                     name="limitOfExpense"
                //                     value={this.state.limitOfExpense}
                //                     onChange={this.handleChange}
                //                 />
                //             </div>
                //             <div className="d-flex justify-content-center">
                //                 <button
                //                     type="submit"
                //                     className="btn"
                //                     onClick={this.handleSubmit}
                //                 >
                //                     Update
                //                 </button>
                //                 <button
                //                     className="btn"
                //                     onClick={this.handleDelete}
                //                 >
                //                     Delete Account
                //                 </button>
                //             </div>
                            
                //         </form>
                //     </div>
                    
                //     <br />
                // </div>
                <p>Hi</p>
            );
        }
    }
}

export default ProfilePage;