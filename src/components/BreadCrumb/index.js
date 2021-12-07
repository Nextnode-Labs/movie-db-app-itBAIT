import { Boundary, Breadcrumbs as BPBreadcrumb } from '@blueprintjs/core'

import { Wrapper, Content } from './BreadCrumb.styles'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const BreadCrumb = ({ movieTitle }) => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  const BREADCRUMBS = [{ onClick: goHome, text: 'Home' }, { text: movieTitle }]
  return (
    <Wrapper className="bp3-dark">
      <Content>
        <BPBreadcrumb collapseFrom={Boundary.END} items={BREADCRUMBS} />
      </Content>
    </Wrapper>
  )
}

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
}

export default BreadCrumb
