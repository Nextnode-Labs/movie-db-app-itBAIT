import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import Grid from './Grid'
import SpinnerWrapper from './SpinnerWrapper'

import { useMovieFetch } from '../hooks/useMovieFetch'

import NoImage from '../images/no_image.jpg'

import { useParams } from 'react-router'

const Movie = () => {
  const { movieID } = useParams()
  const { state: movie, loading, error } = useMovieFetch(movieID)
  return (
    <>
      <div>Movie</div>
    </>
  )
}

export default Movie
