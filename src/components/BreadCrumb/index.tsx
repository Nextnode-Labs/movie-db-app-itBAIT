import { Boundary, Breadcrumbs as BPBreadcrumb } from '@blueprintjs/core'

import { Wrapper, Content } from './BreadCrumb.styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  items: string[]
}

const BreadCrumb: React.FC<Props> = ({ items }) => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  const BREADCRUMBS = [
    { onClick: goHome, text: 'Home' },
    ...items.map((item) => ({ text: item })),
  ]
  return (
    <Wrapper className="bp4-dark">
      <Content>
        <BPBreadcrumb collapseFrom={Boundary.END} items={BREADCRUMBS} />
      </Content>
    </Wrapper>
  )
}

export default BreadCrumb
