import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppMain from './App';

const {App, AppClass} = AppMain;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppClass/>
  </React.StrictMode>,
)
