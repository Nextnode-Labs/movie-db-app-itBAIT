import { Wrapper, Content } from './MovieInfoBar.styles'

import { calcTime, convertMoney } from '../../helpers'
import { Button } from '@blueprintjs/core'

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <Button>Running time: {calcTime(time)}</Button>
      </div>
      <div className="column">
        <Button>Budget: {convertMoney(budget)}</Button>
      </div>
      <div className="column">
        <Button>Revenue: {convertMoney(revenue)}</Button>
      </div>
    </Content>
  </Wrapper>
)

export default MovieInfoBar
