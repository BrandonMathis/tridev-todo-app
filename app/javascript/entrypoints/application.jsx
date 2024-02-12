import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'components/App.jsx';

const root = ( <App /> );

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = createRoot(document.querySelector('#react-root'));
  reactRoot.render(root);
});

