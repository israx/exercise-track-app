import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const AddExercisesStyling = styled.div`
  padding: 2rem;
  form {
    display: grid;
    justify-content: center;
    gap: 0.5rem;
    button {
      width: 4.5rem;
      justify-self: center;
      margin-top: 0.5rem;
    }
    input[type="number"],
    input[type="text"],
    select,
    button {
      height: 1.4rem;
      font-family: inherit;
    }
    select {
      height: 2rem;
    }
  }
`;

export default function AddExercises() {
  const [users, setUsers] = useState([]);
  const [exercise, setExercise] = useState({
    username: " ",
    description: " ",
    duration: "",
    date: new Date(),
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log({ [name]: value });

    setExercise((prev) => ({ ...prev, [name]: value }));
  }
  function handleDate(date) {
    setExercise((prev) => ({ ...prev, date: date }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "https://exercise-tracker-mernstack.herokuapp.com/exercise/add",
        exercise
      )
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    setExercise({
      username: " ",
      description: " ",
      duration: "",
      date: new Date(),
    });

    window.location = "/exercises";
  }
  useEffect(() => {
    axios
      .get("https://exercise-tracker-mernstack.herokuapp.com/user/")
      .then((result) => {
        console.log(result.data);
        setUsers((prev) => [...result.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const { username, duration, date, description } = exercise;
  return (
    <AddExercisesStyling>
      <form action="">
        <label htmlFor="username">Username:</label>
        <select
          name="username"
          id="username"
          value={username}
          onChange={handleChange}
        >
          {users.map((user) => (
            <option key={user._id} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
        <label htmlFor="duration">Duration: </label>
        <input
          type="number"
          value={duration}
          onChange={handleChange}
          name="duration"
        />
        <label htmlFor="">Description: </label>
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="">Date: </label>
        <ReactDatePicker onChange={handleDate} selected={date} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </AddExercisesStyling>
  );
}

export { AddExercisesStyling };
