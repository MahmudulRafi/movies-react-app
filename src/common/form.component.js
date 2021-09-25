import React, { Component } from "react";

class Form extends Component {
    state = {
        data: {},
        errors: {},
    };

    inputValidate = (name, value) => {
        if (name === "username") {
            if (value.trim() === "") return "Username must not be empty.";
        }
        if (name === "password") {
            if (value === "") return "Password must not be empty.";
        }
        return "";
    };

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;

        const errors = { ...this.state.errors };
        const error = this.inputValidate(input.name, input.value);

        if (error) errors[input.name] = error;
        else delete errors[input.name];

        this.setState({ data, errors: errors || {} });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.doSubmit(event);
    };

    render() {
        return;
    }
}

export default Form;
