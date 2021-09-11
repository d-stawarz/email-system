import React from 'react';

const Textarea = ({type, label, onChange}) => {
    return (
    <p>
        <label>{label}</label>
        <textarea type={type} onChange={(e) => onChange(label, e.target.value)}></textarea>
    </p>
    )
};

export default Textarea;