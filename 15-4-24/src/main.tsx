import React from 'react'
import ReactDOM from 'react-dom/client'
import AppMain from './App.tsx'
import './index.css'

const {App, AppClass} = AppMain;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppClass/>
  </React.StrictMode>,
)
