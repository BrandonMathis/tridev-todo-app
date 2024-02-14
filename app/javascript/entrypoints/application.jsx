import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import AllTodoLists from 'components/AllTodoLists';
import TodoList from 'components/TodoList';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
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

