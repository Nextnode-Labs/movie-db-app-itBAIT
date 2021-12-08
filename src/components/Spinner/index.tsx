import { Spinner as BPSpinner, SpinnerSize } from '@blueprintjs/core'
import { Wrapper } from './Spinner.styles'

const Spinner: React.FC = () => (
  <Wrapper>
    <BPSpinner size={SpinnerSize.STANDARD} intent="success" />
  </Wrapper>
)

export default Spinner
