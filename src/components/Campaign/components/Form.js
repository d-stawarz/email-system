import React, {useState} from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

const Form = () => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const onInputChange = (type, value) => type === "subject" ? setSubject(value) : setMessage(value);
    console.log(message);

    return (
        <form>
            <Input type="text" label="subject" value={subject} onChange={onInputChange}/>
            <Textarea label="message" value={message} onChange={onInputChange}/>
            <div>
                <Button label="save" />
                <Button label="send" />
            </div>
        </form>
    )
};

export default Form;