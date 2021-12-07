import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

import { GlobalStyle } from './GlobalStyle'

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:movieID" element={<Movie />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>

    <GlobalStyle />
  </Router>
)

export default App
