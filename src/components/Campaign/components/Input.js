import React from 'react';

const Input = ({type, label, onChange}) => {
    return (
    <p>
        <label>{label}</label>
        <input type={type} onChange={(e) => onChange(label, e.target.value)}></input>
    </p>
    )
};

export default Input;