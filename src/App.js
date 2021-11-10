import React from 'react'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import Header from './components/Header'
import { GlobalStyle } from './GlobalStyle'

const App = () => {
  return (
    <div className="App">
      <Header />
      Start here. <GlobalStyle />
    </div>
  )
}

export default App
