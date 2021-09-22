import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./styles.scss";
import Airtable from "airtable";

const handleSubmit = (event) => {
  event.preventDefault();
}

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return [value, handleChange];
}


const Subscriber = () => {
  const [ firstName, handleChangeFirstName ] = useInput();
  const [ emailLogin, handleChangeEmailLogin ] = useInput();

  async function AddSubscriberToTable(){

    const data = ([
      {fields: {'Email': firstName}},
      {fields: {'Name': emailLogin}},
      {fields: {'CreatedAt': new Date()}},
    ]);

    const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}/${process.env.REACT_APP_CAMPAIGN_TABLE_NAME}`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
  }

  const { register } = useForm();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>First name</label>
      <input
        className="form__input" id="firstName"
        {...register("firstName")}
        autoComplete="off"
        handleChange={handleChangeFirstName}
      ></input>

      <label>E-mail login</label>
      <input
        className="form__input" id="email"
        {...register("E-mailLogin")}
        autoComplete="off"
        handleChange={handleChangeEmailLogin}
      ></input>

      <button className="form__button" type="submit" onClick={AddSubscriberToTable}>
        Submit
      </button>
    </form>
  );
};

export default Subscriber;