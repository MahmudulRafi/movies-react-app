import React from "react";

const Input = ({ type, id, name, label, onChange, value, errors }) => {
    return (
        <>
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <input
                className="form-control"
                type={type}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
            />
            {errors[name] && (
                <div className="alert alert-danger">{errors[name]}</div>
            )}
        </>
    );
};

export default Input;
