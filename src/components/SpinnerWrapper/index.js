import { Spinner, SpinnerSize } from '@blueprintjs/core'
import { Wrapper } from './SpinnerWrapper.styles'

const SpinnerWrapper = () => (
  <Wrapper>
    <Spinner size={SpinnerSize.STANDARD} intent="success" />
  </Wrapper>
)

export default SpinnerWrapper
