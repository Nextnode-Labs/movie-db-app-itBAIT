import { Link } from 'react-router-dom'
import { Image } from './Thumb.styles'

type Props = {
  image: string
  movieId?: number
  clickable?: boolean
  title?: string
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable, title }) => (
  <div>
    {clickable ? (
      <Link to={`/movie/${movieId}`}>
        <Image src={image} alt="movie-thumb" title={title} />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" title={title} />
    )}
  </div>
)

export default Thumb
