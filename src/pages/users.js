import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const UserStyling = styled.div`
  padding: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  input {
    padding: 0.15rem;
    border: 1px solid var(--black);
    height: 1.3rem;
    border-radius: 2px;
    outline: none;
  }
`;
export default function Users() {
  const [username, setUsername] = useState({ username: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setUsername({ [name]: value });
  }

  function handleSubmit(e) {
    console.log("working?");
    axios
      .post("http://localhost:5000/user/add/", username)
      .then((result) => console.log(result))
      .catch((err) => console.log(err + "error"));

    setUsername({ username: "" });
    window.location = "exercises/add";
  }
  return (
    <UserStyling>
      <h2>Add User:</h2>
      <input
        type="text"
        onChange={handleChange}
        value={username.username}
        name="username"
        required
      />
      <button onClick={handleSubmit}>Send</button>
    </UserStyling>
  );
}
