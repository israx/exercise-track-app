import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setUsername({ [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("working?");
    axios
      .post(
        "https://exercise-tracker-mernstack.herokuapp.com/user/add/",
        username
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err + "error"));

    history.push("/exercises/add");
  }
  return (
    <UserStyling>
      <h2>Add User:</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={username.username}
          name="username"
          required
        />
        <button>Send</button>
      </form>
    </UserStyling>
  );
}
