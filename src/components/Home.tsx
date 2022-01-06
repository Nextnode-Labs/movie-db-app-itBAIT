import { useEffect, useCallback } from 'react'
// config
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  SITE_NAME,
} from '../config'
// components
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
// import Spinner from './Spinner'
import Search from './Search'
// import Button from './Button'
import Spinner from './Spinner'

// hooks
import { useHomeFetch } from '../hooks/useHomeFetch'
// images
import NoImage from '../images/no_image.jpg'

const Home: React.FC = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch()

  const scrollHandler = useCallback(() => {
    const posY = window.scrollY ? window.scrollY : window.pageYOffset
    if (document.body.clientHeight - window.innerHeight - posY < 100) {
      if (state.page < state.total_pages && !loading) {
        document.removeEventListener('scroll', scrollHandler)
        setIsLoadingMore(true)
      }
    }
  }, [state, loading, setIsLoadingMore])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollHandler])

  useEffect(() => {
    document.title = `Homepage | ${SITE_NAME}`
  }, [])

  if (error) return <div>Something went wrong...</div>

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Search setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search result' : 'Popular movies'}>
        {state.results.map((movie) => (
          // <div key={movie.id}>{movie.title}</div>
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {/* {loading && <Button loading />} */}
      {/* {state.page < state.total_pages && !loading ? (
        <Button text="Load more" callback={() => setIsLoadingMore(true)} />
      ) : null} */}
    </>
  )
}

export default Home
