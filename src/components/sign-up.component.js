import React, { Component } from "react";
import Input from "../common/input.component";

class SignUp extends Component {
    state = {
        user: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            mobileNo: "",
            password: "",
            retypePassword: "",
        },

        errors: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            mobileNo: "",
            password: "",
            retypePassword: "",
        },
        signUpError: {
            error: "",
        },
    };

    validateInput = (name, value) => {
        const password = this.state.user.password;

        if (name === "firstName") {
            if (value.trim() === "") return "First name can't be empty";
        }
        if (name === "lastName") {
            if (value.trim() === "") return "Last name can't be empty";
        }
        if (name === "userName") {
            if (value.trim() === "") return "User name can't be empty";
        }
        if (name === "email") {
            if (value.trim() === "") return "Email can't be empty";
        }
        if (name === "mobileNo") {
            if (value.trim() === "") return "Mobile No can't be empty";
        }
        if (name === "password") {
            if (value === "") return "Password can't be empty";
        }
        if (name === "retypePassword") {
            if (value === "") return "Retype Password";
            else if (value !== password) return "Password doesn't match";
        }
    };

    handleChange = (event) => {
        const name = event.currentTarget.name;
        const value = event.target.value;

        const error = this.validateInput(name, value);
        const errors = { ...this.state.errors };
        errors[name] = error;

        const user = { ...this.state.user };
        user[name] = value;

        this.setState({ user, errors });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const firstName = event.target[0].value;
        const lastName = event.target[1].value;
        const userName = event.target[2].value;
        const email = event.target[3].value;
        const mobileNo = event.target[4].value;
        const password = event.target[5].value;
        const retypePassword = event.target[6].value;

        if (
            firstName !== "" &&
            lastName !== "" &&
            userName !== "" &&
            email !== "" &&
            mobileNo !== "" &&
            password !== "" &&
            password === retypePassword
        ) {
            this.props.history.push("/login");
        } else {
            const signUpError = { ...this.state.signUpError };
            signUpError.error = "Sign up error. Check all fields";
            this.setState({ ...this.state, signUpError });
        }
    };

    render() {
        return (
            <div className="container w-50">
                <br />
                {this.state.signUpError.error && (
                    <div className="alert alert-danger">
                        {this.state.signUpError.error}
                    </div>
                )}
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                        <Input
                            label="First Name"
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.user.firstName}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="Last Name"
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.user.lastName}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="User Name"
                            type="text"
                            id="userName"
                            name="userName"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.user.userName}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="Email"
                            type="text"
                            id="email"
                            name="email"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.user.email}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="Mobile No."
                            type="text"
                            id="mobileNo"
                            name="mobileNo"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.user.mobileNo}
                            errors={this.state.errors}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            name="password"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.user.password}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="Retype Password"
                            type="password"
                            id="retypePassword"
                            name="retypePassword"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.user.retypePassword}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-dark">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUp;
