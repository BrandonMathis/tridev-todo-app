import React from 'react';
import { NavLink } from "react-router-dom";

export default function TodoList() {
  return (
    <div>
      <h1>TODO List</h1>
      <NavLink to="/">&lt; Back</NavLink>
    </div>
  );
}
