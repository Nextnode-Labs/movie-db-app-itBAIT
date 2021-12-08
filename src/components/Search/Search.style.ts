import styled from 'styled-components'
import { Colors } from '@blueprintjs/core'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--darkGrey);
  padding: 10px 20px;
`
export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 999px;
  height: 100%;
  background: ${Colors.DARK_GRAY5};
`
