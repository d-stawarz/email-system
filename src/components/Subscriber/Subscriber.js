import React from "react";
import { useForm } from "react-hook-form";
import "./styles.scss";

const Subscriber = () => {
  const { register } = useForm();
  return (
    <form className="form">
      <label>First name</label>
      <input
        className="form__input"
        {...register("firstName")}
        autoComplete="off"
      ></input>

      <label>E-mail login</label>
      <input
        className="form__input"
        {...register("E-mailLogin")}
        autoComplete="off"
      ></input>

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Subscriber;