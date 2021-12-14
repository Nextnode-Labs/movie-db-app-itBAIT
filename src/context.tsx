import React, { createContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

export const Context = createContext(undefined)

const UserProvider: React.FC = ({ children }) => {
  const [state, setState]: any = useState(undefined)
  const [cookies, setCookie] = useCookies(['user', 'session_id'])

  useEffect(() => {
    if (cookies.user && cookies.session_id)
      setState({ sessionId: cookies.session_id, userName: cookies.user })
  }, [])

  return (
    <Context.Provider value={[state, setState, cookies, setCookie] as any}>
      {children}
    </Context.Provider>
  )
}

export default UserProvider
