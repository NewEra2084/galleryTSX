import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/twconf.css'
import HomePage from './Pages/HomePage/HomePage'
import {BaseLayout} from './app/layouts/baseLayout'
import { BrowserRouter, Route, Routes } from 'react-router'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path='gallery' element={<HomePage/>}>

          </Route>
          <Route path='favorites' element={<HomePage/>}>
            
          </Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
