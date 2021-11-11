import { Image } from './Thumb.styles'

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="mivie-thumb" />
  </div>
)

export default Thumb
