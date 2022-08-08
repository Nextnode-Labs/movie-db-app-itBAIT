import { IMAGE_BASE_URL, POSTER_SIZE, SITE_NAME } from '../config'
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar'
import Actor from './Actor'

import { useMovieFetch } from '../hooks/useMovieFetch'

import NoImage from '../images/no_image.jpg'

import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Movie: React.FC = () => {
  let { movieId } = useParams()

  const { state: movie, loading, error } = useMovieFetch(movieId || '')

  useEffect(() => {
    document.title = `${movie.original_title || 'Loading...'} | ${SITE_NAME}`
  }, [movie])

  if (loading && !error) return <Spinner centered />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <BreadCrumb items={['Movies', movie.original_title]} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            id={actor.id}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  )
}

export default Movie
