// config
import { POSTER_SIZE, IMAGE_BASE_URL, SITE_NAME } from '../config'
import { useEffect } from 'react'
// components
import Grid from './Grid'
import Thumb from './Thumb'
import BreadCrumb from './BreadCrumb'
import Spinner from './Spinner'
// import Button from './Button'
import RatingBadge from './RatingBadge'

// hooks
import { useFavoritesFetch } from '../hooks/useFavoritesFetch'
// images
import NoImage from '../images/no_image.jpg'

const Favorites: React.FC = () => {
  const { state, loading, error } = useFavoritesFetch()

  useEffect(() => {
    document.title = `Favorites | ${SITE_NAME}`
  }, [])

  if (error) return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb items={['Favorites']} />
      <Grid header={'My favorite movies'}>
        {state.results.map((movie) => (
          <RatingBadge key={movie.id} rating={movie.vote_average}>
            <Thumb
              key={movie.id}
              clickable
              title={movie.original_title}
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          </RatingBadge>
        ))}
      </Grid>
      {loading && <Spinner />}
      {/* {loading && <Button loading />} */}
      {/* {state.page < state.total_pages && !loading ? (
        <Button text="Load more" callback={() => setSsLoadingMore(true)} />
      ) : null} */}
    </>
  )
}

export default Favorites
