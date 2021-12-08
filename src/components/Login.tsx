import { useNavigate } from 'react-router-dom'
import API from '../API'
import Button from './Button'
import { Wrapper } from './Login.styles'
import { Context } from '../context'
import { useContext, useState } from 'react'

const Login: React.FC = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const [_user,setuser]: any = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setError(false)
    try {
      const requestToken = await API.getRequestToken()
      const sessionId = await API.authenticate(requestToken, userName, password)
      setuser({ sessionId: sessionId.session_id, userName })
      navigate('/')
    } catch {
      setError(true)
    }
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value

    if (name === 'username') setUserName(value)
    if (name === 'password') setPassword(value)
  }

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
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  )
}

export default Login
