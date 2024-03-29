import { Wrapper, Content, Text } from './MovieInfo.styles'

import Thumb from '../Thumb'
import Rate from '../Rate'
import Favorite from '../Favorite'
import API from '../../API'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import NoImage from '../../images/no_image.jpg'
import { MovieState } from '../../hooks/useMovieFetch'
import { Context } from '../../context'
import { useContext } from 'react'

type Props = {
  movie: MovieState
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const [user]: any = useContext(Context)
  const handleRating = async (value: string) => {
    await API.rateMovie(user.sessionId, movie.id, parseInt(value))
  }

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average.toFixed(1)}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 's' : ''}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {user && (
            <div>
              <br />
              <Rate callback={handleRating} />
              <Favorite movieId={movie.id} />
            </div>
          )}
        </Text>
      </Content>
    </Wrapper>
  )
}

export default MovieInfo
