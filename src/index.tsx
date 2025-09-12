import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/twconf.css'
import HomePage from './Pages/HomePage/HomePage'
import {BaseLayout} from './app/layouts/baseLayout'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
