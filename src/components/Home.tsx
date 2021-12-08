// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
// components
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
// import Spinner from './Spinner'
import Search from './Search'
import Button from './Button'

// hooks
import { useHomeFetch } from '../hooks/useHomeFetch'
// images
import NoImage from '../images/no_image.jpg'

const Home:React.FC = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setSsLoadingMore } =
    useHomeFetch()

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
      {/* {loading && <SpinnerWrapper />} */}
      {loading && <Button loading />}
      {state.page < state.total_pages && !loading ? (
        <Button text="Load more" callback={() => setSsLoadingMore(true)} />
      ) : null}
    </>
  )
}

export default Home