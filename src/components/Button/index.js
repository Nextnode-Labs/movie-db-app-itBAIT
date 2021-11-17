import { Button as BPButton } from '@blueprintjs/core'
import { Wrapper } from './Button.styles'

const Button = ({ text, callback, loading }) => (
  <Wrapper>
    <BPButton large fill intent="success" onClick={callback} loading={loading}>
      {text}
    </BPButton>
  </Wrapper>
)

export default Button
