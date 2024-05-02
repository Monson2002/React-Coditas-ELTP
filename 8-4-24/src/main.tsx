import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import main from './App.tsx';

const {AppFunc, AppClass} = main;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <AppFunc /> */}
    <AppClass/>
  </React.StrictMode>,
)
