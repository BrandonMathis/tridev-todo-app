import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AllTodoLists from 'components/AllTodoLists';
import TodoList from 'components/TodoList';

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

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = createRoot(document.querySelector('#react-root'));
  reactRoot.render( <RouterProvider router={router} />);
});

