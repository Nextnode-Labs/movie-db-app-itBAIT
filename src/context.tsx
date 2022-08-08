import React, { createContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import API from './API'

export const Context = createContext(undefined)

type Props = {
  children: React.ReactNode
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, setState]: any = useState(undefined)
  const [cookies, setCookie, removeCookie] = useCookies([
    'user',
    'session_id',
    'account_id',
  ])

  useEffect(() => {
    if (cookies.user && cookies.session_id && cookies.account_id) {
      API.getAccountDetails(cookies.session_id).then((data) => {
        if (
          data?.status_code !== 3 &&
          data?.username === cookies.user &&
          data?.id.toString() === cookies.account_id
        ) {
          setState({
            sessionId: cookies.session_id,
            userName: cookies.user,
            accountId: cookies.account_id,
          })
        } else {
          setState(undefined)
          removeCookie('user')
          removeCookie('session_id')
          removeCookie('account_id')
        }
      })
    }
  }, [cookies, removeCookie])

  return (
    <Context.Provider
      value={[state, setState, cookies, setCookie, removeCookie] as any}
    >
      {children}
    </Context.Provider>
  )
}

export default UserProvider
