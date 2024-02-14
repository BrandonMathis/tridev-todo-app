import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { NavLink, useParams } from 'react-router-dom';

import { gql, useQuery } from '@apollo/client';

const CREATE_TODO = gql`
  mutation CreateTodo($text: String!, $todoListId: ID!) {
    createTodoItem(text: $text, todoListId: $todoListId) {
      todoList {
        id
        todoItems {
          id
          text
          done
        }
      }
    }
  }
`;

const GET_TODO_LISTS = gql`
  query GetTodoList($id: ID!) {
    todoList(id: $id) {
      id
      title
      todoItems {
        id
        text
        done
      }
    }
  }
`;

export default function TodoList() {
  const { id } = useParams();
  const { data } = useQuery(GET_TODO_LISTS, { variables: { id } });
  const [createTodo] = useMutation(CREATE_TODO);

  const todoList = data?.todoList || {};

  const handleCreateTodo = useCallback(
    (event) => {
      event.preventDefault();
      createTodo({
        variables: {
          text: event.target.text.value,
          todoListId: id,
        },
      });
      event.target.text.value = '';
    },
    [id]
  );

  return (
    <div>
      <h1>{todoList.title}</h1>

      <form onSubmit={handleCreateTodo}>
        <label>New Todo</label>
        <br />
        <input type="text" name="text" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {data?.todoList?.todoItems.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.text} - {todoItem.done ? 'Completed' : 'Not completed'}
          </li>
        ))}
      </ul>
      <NavLink to="/">&lt; Back</NavLink>
    </div>
  );
}
