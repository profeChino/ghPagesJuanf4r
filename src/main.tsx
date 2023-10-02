import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter'
import {HashRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AppRouter/>
    </HashRouter>
  </React.StrictMode>,
)
