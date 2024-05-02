import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppMain from './App.tsx'

const {App, AppClass} = AppMain;
// const {Friend, FriendClass} = FriendMain;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppClass/>
  </React.StrictMode>,
)
