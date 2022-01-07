import { useNavigate } from 'react-router-dom'
import API from '../API'
import Button from './Button'
import { Wrapper } from './Login.styles'
import { Context } from '../context'
import { useContext, useState, useEffect } from 'react'
import { SITE_NAME } from '../config'

const Login: React.FC = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [_user, setuser, _cookies, setCookie]: any = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setError(false)
    setLoading(true)
    try {
      const requestToken = await API.getRequestToken()
      const session = await API.authenticate(requestToken, userName, password)
      const account = await API.getAccountDetails(session.session_id)
      setuser({
        sessionId: session.session_id,
        userName: account.username,
        accountId: account.id,
      })
      setCookie('user', account.username)
      setCookie('session_id', session.session_id)
      setCookie('account_id', account.id)
      navigate('/')
    } catch {
      setError(true)
      setLoading(false)
    }
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value

    if (name === 'username') setUserName(value)
    if (name === 'password') setPassword(value)
  }

  useEffect(() => {
    document.title = `Login | ${SITE_NAME}`
  }, [])

  return (
    <Wrapper>
      {error && <div className="error">Something went wrong...</div>}
      <label>Username:</label>
      <input
        type="text"
        value={userName}
        name="username"
        onChange={handleInput}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" loading={loading} callback={handleSubmit} />
    </Wrapper>
  )
}

export default Login
