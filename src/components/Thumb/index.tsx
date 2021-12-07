import { Link } from 'react-router-dom'
import { Image } from './Thumb.styles'

type Props = {
  image: string
  movieId: number
  clickable: boolean
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="mivie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="mivie-thumb" />
    )}
  </div>
)

export default Thumb
