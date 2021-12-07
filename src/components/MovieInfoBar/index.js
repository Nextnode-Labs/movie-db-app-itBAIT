import { Wrapper, Content } from './MovieInfoBar.styles'

import { calcTime, convertMoney } from '../../helpers'
import { Button } from '@blueprintjs/core'
import PropTypes from 'prop-types'

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <Button className="btn">Running time: {calcTime(time)}</Button>
      </div>
      <div className="column">
        <Button className="btn">Budget: {convertMoney(budget)}</Button>
      </div>
      <div className="column">
        <Button className="btn">Revenue: {convertMoney(revenue)}</Button>
      </div>
    </Content>
  </Wrapper>
)

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
}

export default MovieInfoBar
