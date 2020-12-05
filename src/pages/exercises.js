import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ExercisesStyled = styled.div`
  padding: 0 2rem;
  table {
    margin: 0 auto;
    width: 100%;
    th {
      padding: 0.2rem 0.5rem;
    }
    tbody {
      th {
        font-weight: 200;
        border-right: 1px solid var(--grey);

        &:last-child {
          border-right: none;
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    .options {
      display: grid;
      gap: 0.3rem;
    }
  }

  @media screen and (min-width: 900px) {
    table {
      width: 850px;
    }
  }
`;

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  function handleDelete(id) {
    axios
      .delete(`https://exercise-tracker-mernstack.herokuapp.com/exercise/${id}`)
      .then((result) => {
        console.log(result);
        setExercises(exercises.filter((exercise) => exercise._id !== id));
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get("https://exercise-tracker-mernstack.herokuapp.com/exercise")
      .then((result) => setExercises([...result.data]))
      .catch((err) => console.log(err));
  }, []);

  const listExercises = exercises.map((exercise) => {
    return (
      <tr key={exercise._id}>
        <th>{exercise.username}</th>
        <th>{exercise.description}</th>
        <th>{exercise.duration}</th>
        <th>{exercise.date.split("T")[0]}</th>
        <th className="options">
          <button onClick={() => handleDelete(exercise._id)}>Delete</button>{" "}
          <Link to={`exercise/update/${exercise._id}`}>Edit</Link>
        </th>
      </tr>
    );
  });
  return (
    <ExercisesStyled>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{listExercises}</tbody>
      </table>
    </ExercisesStyled>
  );
}
