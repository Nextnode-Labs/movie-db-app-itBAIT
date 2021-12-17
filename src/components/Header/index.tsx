import { Link } from 'react-router-dom'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'
import { Context } from '../../context'
import { useContext } from 'react'

const Header: React.FC = () => {
  const [user]: any = useContext(Context)
  console.log(user)
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <Link to="/favorites">
            <span>Logged as: {user.userName}</span>
          </Link>
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
