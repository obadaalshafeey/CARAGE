import React, { Component } from "react";

import axios from 'axios';

import "./reg.css";

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            phone_number:'',
            isError: {
                name: '',
                email: '',
                password: '',
                phone_number:''
            }
        }
    }


    onSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(this.state.email,"form Valid");
            let user_name=this.state.name
            let email=this.state.email
            let password=this.state.password
            let Phone_number=this.state.phone_number



          axios.post('http://localhost/CARAGE/PHP.PHP/insert.php?name='+user_name+'&email='+email+'&password='+password+'&phone_number='+Phone_number)

          window.location.href = "/Login";

            
        } else {
            console.log("Form is invalid!");
            
        }
    };



    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;

            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;

            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;

                case "phone_number":
                  isError.phone_number =
                      value.length < 9 ? "Atleast 10 characaters required" : "";
                  break;
                
            default:
                break;
                
        }


        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
      console.log("hello regester");
        const { isError } = this.state;

        return (
          <div className="forms" > 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form className="d" onSubmit={this.onSubmit} noValidate>
              <h1>Registration</h1>
                <div className="form-group">
                  <div className="form2">
                    <label>Name</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.formValChange}
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>phone_number</label>
                    <input
                        type="tel"
                        className={isError.phone_number.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="phone_number"
                        onChange={this.formValChange}
                    />
                    {isError.phone_number.length > 0 && (
                        <span className="invalid-feedback">{isError.phone_number}</span>
                        
                    )}
                </div>

                <button type="submit" className="btn btn-block btn-danger">Create User  </button>
                
                </div>
                

            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            
           
        );
    }
}
