import React, { createContext, useState } from 'react'

export const Context = createContext(undefined)

const UserProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(undefined)

  return (
    <Context.Provider value={[state, setState] as any}>
      {children}
    </Context.Provider>
  )
}

export default UserProvider
