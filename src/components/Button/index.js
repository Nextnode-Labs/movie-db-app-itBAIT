import { Button as BPButton } from '@blueprintjs/core'
import { Wrapper } from './Button.styles'
import PropTypes from 'prop-types'

const Button = ({ text, callback, loading }) => (
  <Wrapper>
    <BPButton large fill intent="success" onClick={callback} loading={loading}>
      {text}
    </BPButton>
  </Wrapper>
)

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
  loading: PropTypes.bool,
}

export default Button
