import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import main from './App';

const {App, AppClass} = main;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppClass/>
  </React.StrictMode>,
)
