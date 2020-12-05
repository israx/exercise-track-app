import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  @media screen and (max-width: 700px) {
    transition: all 0.25s ease-in;
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "initial" : "none")};
    flex-flow: column nowrap;
    position: fixed;
    align-items: center;
    justify-content: center !important;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    z-index: 1;
    background: var(--grey);
  }
`;
export default function RightNav({ open }) {
  return (
    <Ul open={open}>
      <li>
        <Link to="/exercises">Exercises</Link>
      </li>
      <li>
        <Link to="/exercises/add">Add Exercises</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </Ul>
  );
}
