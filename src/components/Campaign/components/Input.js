import React from 'react';

const Input = ({type, label, register, required}) => {
    return (
    <p>
        <label>{label}</label>
        <input type={type} {...register(label, { required })}></input>
    </p>
    )
};

export default Input;