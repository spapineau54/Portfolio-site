import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './bootstrap.min.css'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
