import styled from 'styled-components'

type Props = {
  centered?: boolean
}

export const Wrapper = styled.div<Props>`
  margin: ${({ centered }) =>
    centered ? 'calc(100vh / 2 - 90px) auto' : 'unset'};
`
