import styled from 'styled-components'
import { Colors } from '@blueprintjs/core'

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 999px;
  height: 100%;
  background: ${Colors.DARK_GRAY5};

  .results {
    margin-top: 20px;
    z-index: 10;
    position: absolute;
    padding: 3px;
    min-height: 1rem;
    width: 100%;
    background: red;
  }

  .bp4-input {
    width: 0;
    padding-right: 0 !important;
    transition: width 0.2s;
  }
  .bp4-icon {
    pointer-events: none;
  }
  .bp4-input:focus,
  &.expanded .bp4-input {
    width: 300px;
    padding-right: 15px;
  }
`
