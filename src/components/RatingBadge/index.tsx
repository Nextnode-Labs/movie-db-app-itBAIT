import { Wrapper, Badge } from './RatingBadge.styles'

type Props = {
  rating: number
  children: React.ReactNode
}

const RatingBadge: React.FC<Props> = ({ rating, children }) => (
  <Wrapper>
    {children}
    {rating && <Badge rating={rating}>{rating.toFixed(1)}</Badge>}
  </Wrapper>
)

export default RatingBadge
