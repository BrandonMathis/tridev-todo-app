import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";

import { gql, useMutation, useQuery } from '@apollo/client';

const CREATE_TODO_LIST = gql`
mutation CreateTodoList($title: String!) {
  createTodoList(title: $title) {
    todoList {
      id
      title
    }
  }
}
`;

const GET_TODO_LISTS = gql`
query GetTodoLists {
  todoLists {
    id
    title
    todos {
      id
      text
      completed
    }
  }
}
`;


export default function AllTodoLists() {
  const [ createTodoList ] = useMutation(CREATE_TODO_LIST);
  const { data, error } = useQuery(GET_TODO_LISTS);

  const handleCreateTodoList = useCallback((event) => {
    event.preventDefault();
    createTodoList({
      variables: {
        title: event.target.title.value
      }
    });
  }, []);


  return (
    <div>
      <h1>TODO Lists</h1>
      <div style={{color: 'red'}}>{error?.message}</div>

      <form onSubmit={handleCreateTodoList}>
        <input type="text" name="title" />
        <button type="submit">Create List</button>
      </form>

      {data?.todoLists.map((todoList) => (
        <NavLink to={`/todos/${todoList.id}`}>{todoLists.title}</NavLink>
      ))}
    </div>
  );
}
