import React from 'react';
import { createRoot } from 'react-dom/client';
import { HttpLink } from '@apollo/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import AllTodoLists from 'components/AllTodoLists';
import TodoList from 'components/TodoList';

const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content');

const link = new HttpLink({
  uri: "http://localhost:3000/graphql",
    headers: {
    'X-CSRF-Token': csrfToken,
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllTodoLists />
  },
  {
    path: "/todos/:id",
    element: <TodoList />
  },
]);

const root = (
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = createRoot(document.querySelector('#react-root'));
  reactRoot.render(root);
});

