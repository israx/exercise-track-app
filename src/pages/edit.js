import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddExercisesStyling } from "./addExercises";
import { useHistory } from "react-router-dom";

export default function EditExercise() {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
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
        `https://exercise-tracker-mernstack.herokuapp.com/exercise/update/${id}`,
        exercise
      )
      .then((result) => {
        console.log(result);
        history.push("/exercises");
      })
      .catch((err) => console.log(err));

    setExercise({
      username: " ",
      description: " ",
      duration: "",
      date: new Date(),
    });
  }
  useEffect(() => {
    axios
      .get("https://exercise-tracker-mernstack.herokuapp.com/user/")
      .then((result) => {
        console.log(result.data);
        setUsers((prev) => [...result.data]);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://exercise-tracker-mernstack.herokuapp.com/exercise/${id}`)
      .then((result) => {
        console.log(result.data);
        const { username, description, duration, date } = result.data;
        setExercise({ username, description, duration, date: new Date(date) });
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
        <button onClick={handleSubmit}>Edit</button>
      </form>
    </AddExercisesStyling>
  );
}
