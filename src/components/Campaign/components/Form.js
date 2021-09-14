import React from 'react';
import { useForm } from "react-hook-form";
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

const Form = () => {
    const { register, handleSubmit } = useForm();

    async function postData(data) {
        const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}/${process.env.REACT_APP_CAMPAIGN_TABLE_NAME}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return response.json()
    };

    const formattedData = (data, status) => {
        return  {
            "records": [{
                "fields": {
                    "Subject": `${data.subject}`,
                    "Content": `${data.message}`,
                    "Status": status
                }
            }]
        }
    };
     
    const onSave = (data) => {
        postData(formattedData(data, "Draft"))
            .then(data => {
                console.log(data);
            });
    };

    const onSend = (data) => {
        postData(formattedData(data, "Sent"))
            .then(data => {
                console.log(data);
            });
    };

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
};

export default Form;