import { Button } from '@blueprintjs/core'
import { Wrapper } from './ButtonWrapper.styles'

const ButtonWrapper = ({ text, callback, loading }) => (
  <Wrapper>
    <Button large fill intent="success" onClick={callback} loading={loading}>
      {text}
    </Button>
  </Wrapper>
)

export default ButtonWrapper
