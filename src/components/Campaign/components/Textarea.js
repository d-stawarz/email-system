import React from 'react';

const Textarea = ({type, label, register, required}) => {
    return (
    <p>
        <label>{label}</label>
        <textarea type={type} {...register(label, { required })}></textarea>
    </p>
    )
};

export default Textarea;