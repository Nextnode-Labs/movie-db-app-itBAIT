import { Breadcrumbs as BPBreadcrumb } from '@blueprintjs/core'

import { Wrapper, Content } from './BreadCrumb.styles'
import { useNavigate } from 'react-router-dom'

const BreadCrumb = ({ movieTitle }) => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  
  const BREADCRUMBS = [{ onClick: goHome, text: 'Home' }, { text: movieTitle }]
  return (
    <Wrapper>
      <Content>
        <BPBreadcrumb items={BREADCRUMBS} />
      </Content>
    </Wrapper>
  )
}

export default BreadCrumb
