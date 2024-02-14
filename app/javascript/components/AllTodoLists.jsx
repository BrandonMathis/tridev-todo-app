import React from "react";
import { NavLink } from "react-router-dom";

export default function AllTodoLists() {
  return (
    <div>
      <h1>TODO Lists</h1>
      <NavLink to="/todos/1">List 1</NavLink>
    </div>
  );
}
