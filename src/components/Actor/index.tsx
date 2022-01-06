import { Wrapper, Image } from './Actor.styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  name: string
  character?: string
  imageUrl?: string
}

const Actor: React.FC<Props> = ({ id, name, character, imageUrl }) => (
  <Wrapper>
    <Link to={`/person/${id}`}>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      {character && <p>{character}</p>}
    </Link>
  </Wrapper>
)

export default Actor
