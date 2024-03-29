import { Wrapper, Content } from './Grid.styles'

type Props = {
  header: string
  children: React.ReactNode
}

const Grid: React.FC<Props> = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
)

export default Grid
