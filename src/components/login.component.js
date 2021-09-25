import React, { Component } from "react";
import Form from "../common/form.component";
import Input from "../common/input.component";

class Login extends Form {
    state = {
        data: { username: "", password: "" },
        errors: { username: "", password: "" },
    };

    doSubmit = (event) => {
        const username = event.target[0].value;
        const password = event.target[1].value;

        if (username === "Rafi" && password === "rafi1234") {
            this.props.history.push("/movies");
        } else {
            const errors = { ...this.state.errors };

            if (username === "Rafi" && password !== "rafi1234") {
                errors.password = "Password may be incorrect.";
            } else {
                errors.username = "Username may be incorrect.";
            }

            this.setState({ ...this.state, errors });
        }
    };

    render() {
        return (
            <div className="container w-50 mx-auto">
                <br />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <Input
                            label="User Name"
                            id="username"
                            type="text"
                            name="username"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.data.username}
                            errors={this.state.errors}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            label="Password"
                            id="password"
                            type="password"
                            name="password"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.data.password}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-success">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
