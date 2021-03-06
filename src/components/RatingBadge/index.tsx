import { Wrapper, Badge } from './RatingBadge.styles'

type Props = {
  rating: number
}

const RatingBadge: React.FC<Props> = ({ rating, children }) => (
  <Wrapper>
    {children}
    {rating && <Badge rating={rating}>{rating}</Badge>}
  </Wrapper>
)

export default RatingBadge
