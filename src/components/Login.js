import { useNavigate } from 'react-router-dom'
import API from '../API'
import Button from './Button'
import { Wrapper } from './Login.styles'
import { Context } from '../context'

const Login = () => {
  const handleSubmit = (e) => {}
  const handleInput = (e) => {}

  return (
    <Wrapper>
      <label>Username:</label>
      <input
        type="text"
        value="state value"
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        value="state value"
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  )
}

export default Login
