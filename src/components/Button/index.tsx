import { Button as BPButton } from '@blueprintjs/core'
import { Wrapper } from './Button.styles'

type Props = {
  text?: string
  callback?: () => void
  loading?: boolean
}

const Button: React.FC<Props> = ({ text, callback, loading }) => (
  <Wrapper>
    <BPButton large fill intent="success" onClick={callback} loading={loading}>
      {text}
    </BPButton>
  </Wrapper>
)

export default Button
