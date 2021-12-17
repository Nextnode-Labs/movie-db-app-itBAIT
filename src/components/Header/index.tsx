import { Link } from 'react-router-dom'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'
import { Context } from '../../context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const [user, setUser, , , removeCookie]: any = useContext(Context)
  const navigate = useNavigate()
  const logout = () => {
    setUser(undefined)
    removeCookie('user')
    removeCookie('session_id')
    removeCookie('account_id')
    navigate('/')
  }
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <span>
            <Link to="/favorites">
              <span>Logged as: {user.userName}</span>
            </Link>
            <span className='logout' onClick={logout}>Logout</span>
          </span>
        ) : (
          <Link to="/login">
            <span>Log in</span>
          </Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  )
}

export default Header
