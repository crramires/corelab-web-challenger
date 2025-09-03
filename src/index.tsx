import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import TodosPage from './pages/Todos';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodosPage />
  </React.StrictMode>
);

reportWebVitals();
