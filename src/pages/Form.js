import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="container">
      <h1>Register the user</h1>
      <form>
        <label>Name: </label>
        <input required type="text" id="username" name="username" />
        <label>Email : </label>
        <input required type="text" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
