import React, { Component } from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './AddCoffeeBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddCoffeeBtn extends Component{
    state = {
        invalidForm: true,
        formData : {
            size : '0',
            price: '0'
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddCoffee(this.state.formData);
      };

      handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
          formData,
          invalidForm: !this.formRef.current.checkValidity()
        });
      };

    render(){
        return (
            <div className='AddCoffeeBtn chart'>
                <form className='coffeeForm' ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="col-auto">
                        <label className="sr-only">Coffee</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">( L )</div>
                            </div>
                            <input className="form-control" 
                            name="size"
                            value={this.state.formData.size}
                            onChange={this.handleChange}
                            required
                             />
                        </div>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only">Cost</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">( $ )</div>
                            </div>
                            <input className="form-control"
                             name="price"
                             value={this.state.formData.price}
                             onChange={this.handleChange}
                            required
                               />
                        </div>
                    </div>
                    <button className='addBtn'
                        type='submit'
                        disabled={this.state.invalidForm}
                    >
                        <FontAwesomeIcon icon={ faPlus } className='icons ' />
                        Add
                    </button>
            
            
                </form>
            
            </div>
            );

    }

}

export default AddCoffeeBtn;