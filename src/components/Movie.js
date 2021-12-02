import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'

import { useMovieFetch } from '../hooks/useMovieFetch'

import NoImage from '../images/no_image.jpg'

import { useParams } from 'react-router'

const Movie = () => {
  const { movieID } = useParams()
  const { state: movie, loading, error } = useMovieFetch(movieID)

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  )
}

export default Movie
