import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
// Context
import UserProvider from './context'

import Header from './components/Header'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Movie from './components/Movie'
import Person from './components/Person'
import NotFound from './components/NotFound'
import Login from './components/Login'

import { GlobalStyle } from './GlobalStyle'

const App: React.FC = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/movie/:movieId" element={<Movie />}></Route>
        <Route path="/person/:personId" element={<Person />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
)

export default App
