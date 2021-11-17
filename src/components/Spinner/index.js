import { Spinner as BPSpinner, SpinnerSize } from '@blueprintjs/core'
import { Wrapper } from './Spinner.styles'

const Spinner = () => (
  <Wrapper>
    <BPSpinner size={SpinnerSize.STANDARD} intent="success" />
  </Wrapper>
)

export default Spinner
