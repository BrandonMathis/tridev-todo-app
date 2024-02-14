import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

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
      todoItems {
        id
        text
        completed
      }
    }
  }
`;

export default function AllTodoLists() {
  const [createTodoList] = useMutation(CREATE_TODO_LIST, {
    update(cache, mutationResult) {
      cache.modify({
        fields: {
          todoLists: (previous, { toReference }) => {
            return [
              ...previous,
              toReference(mutationResult.data.createTodoList.todoList),
            ];
          },
        },
      });
    },
  });
  const { data, error } = useQuery(GET_TODO_LISTS);

  const handleCreateTodoList = useCallback((event) => {
    event.preventDefault();
    createTodoList({
      variables: {
        title: event.target.title.value,
      },
    });
    event.target.title.value = '';
  }, []);

  return (
    <div>
      <h1>TODO Lists</h1>
      <div style={{ color: 'red' }}>{error?.message}</div>

      <form onSubmit={handleCreateTodoList}>
        <input type="text" name="title" />
        <button type="submit">Create List</button>
      </form>

      <ul>
        {data?.todoLists.map((todoList) => (
          <li key={todoList.id}>
            <NavLink to={`/todos/${todoList.id}`}>{todoList.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
