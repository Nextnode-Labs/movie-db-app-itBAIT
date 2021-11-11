import { Spinner, SpinnerSize } from '@blueprintjs/core'
import { Wrapper } from './SpinnerWrapper.styles'

const SpinnerWrapper = () => (
  <Wrapper>
    <Spinner size={SpinnerSize.LARGE} intent="danger" />
  </Wrapper>
)

export default SpinnerWrapper
