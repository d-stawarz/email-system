import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

const Form = () => {
    const { register, handleSubmit } = useForm();

    const onSave = (data) => console.log("saved", data);
    const onSend = (data) => console.log("sent", data);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Input type="text" label="subject" register={register} required/>
            <Textarea label="message" register={register} required/>
            <div>
                <Button label="save" onClick={handleSubmit(onSave)}/>
                <Button label="send" onClick={handleSubmit(onSend)}/>
            </div>
        </form>
    )
    // return (
    //     <form onSubmit={(e) => e.preventDefault()}>
    //         <Input type="text" label="subject" value={subject} onChange={onInputChange}/>
    //         <Textarea label="message" value={message} onChange={onInputChange}/>
    //         <div>
    //             <Button label="save" onClick={onSave}/>
    //             <Button label="send" />
    //         </div>
    //     </form>
    // )
};

export default Form;