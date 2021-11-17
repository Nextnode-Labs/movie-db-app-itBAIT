import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'

import { useMovieFetch } from '../hooks/useMovieFetch'

import NoImage from '../images/no_image.jpg'

import { useParams } from 'react-router'

const Movie = () => {
  const { movieID } = useParams()
  const { state: movie, loading, error } = useMovieFetch(movieID)
  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <div>Movie</div>
    </>
  )
}

export default Movie
