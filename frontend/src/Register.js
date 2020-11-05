import React, { useState, useContext } from "react";
import "./App.css";
import YodlrAPI from "./YodlrAPI";
import UserContext from "./UserContext";

const Register = () => {
  const INITIAL_VALUE =  {
    email: "",
    firstName: "",
    lastName: ""
  }
  const [formData, setFormData] = useState(INITIAL_VALUE);

  async function handleSubmit(e) {
        e.preventDefault();
        const userResults = await YodlrAPI.registerUser(formData);
        setFormData(INITIAL_VALUE);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(data => ({
      ...data,
      [name] : value
    }))
  }

  return (
    <div>
    <h3>Register</h3>
    <form onSubmit={handleSubmit}>
    <label htmlFor="firstName">First Name:</label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      value={formData.firstName}
      onChange={handleChange}
    />
    <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
    <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Register;