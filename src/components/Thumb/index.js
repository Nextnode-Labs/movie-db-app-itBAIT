import { Link } from 'react-router-dom'
import { Image } from './Thumb.styles'

const Thumb = ({ image, movieId, clickable }) => (
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
