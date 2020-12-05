import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const Ham = styled.div`
  --height: 0.35rem;
  --gap: 4px;
  position: fixed;
  top: calc(45.5px - (var(--height) * 3 + 2 * var(--gap)) / 2);
  right: 15px;
  z-index: 111;
  display: grid;
  gap: var(--gap);
  div {
    border-radius: 3px;
    width: 2rem;
    height: var(--height);
    background-color: ${({ open }) => (open ? "#ff4444" : "#333")};
    transition: all 0.3s ease;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: 1px;
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: 3px;
    }
  }
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Ham onClick={() => setOpen(!open)} open={open}>
        <div />
        <div />
        <div />
      </Ham>
      <RightNav open={open} />
    </>
  );
}
