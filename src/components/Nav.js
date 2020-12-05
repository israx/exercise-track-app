import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hamburger from "./Hamburger";

const NavStyled = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin-bottom: 2rem;
  background: var(--grey);

  ul {
    flex-grow: 1;
    /* max-width: 800px; */
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    gap: 2rem;
    li {
      font-size: 1.2rem;
    }
  }
  a {
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      color: var(--red);
    }
  }

  @media screen and (min-width: 1200px) {
    ul {
      justify-content: center;
    }
  }
`;
export default function Nav() {
  return (
    <NavStyled>
      <h1>
        <Link to="/exercises">LOGO</Link>
      </h1>
      <Hamburger />
    </NavStyled>
  );
}
