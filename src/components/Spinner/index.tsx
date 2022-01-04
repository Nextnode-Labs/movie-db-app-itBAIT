import { Spinner as BPSpinner, SpinnerSize } from '@blueprintjs/core'
import { Wrapper } from './Spinner.styles'

type Props = {
  centered?: boolean
}

const Spinner: React.FC<Props> = ({ centered }) => (
  <Wrapper centered={centered}>
    <BPSpinner size={SpinnerSize.STANDARD} intent="success" />
  </Wrapper>
)

export default Spinner
