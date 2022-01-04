import styled from 'styled-components'
import { Colors } from '@blueprintjs/core'

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 999px;
  height: 100%;
  background: ${Colors.DARK_GRAY5};
  .bp4-input-group {
    .bp4-input {
      width: 0;
      padding-right: 0 !important;
      transition: width .2s;
    }
    .bp4-icon {
      pointer-events: none;
    }
  }
  .bp4-input-group {
    .bp4-input:focus {
      width: 300px;
      padding-right: 15px;
    }
  }
`
