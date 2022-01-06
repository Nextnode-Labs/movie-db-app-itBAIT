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
    max-height: 80vh;
    overflow-y: auto;
    margin-top: 20px;
    z-index: 10;
    position: absolute;
    padding: 10px;
    min-height: 1rem;
    width: 100%;
    background: var(--medGrey);
    color: var(--lightGrey);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    box-shadow: 0px 2px 5px 2px #555;
    border: solid 1px rgba(238, 238, 238, 0.3);
    outline: none;
  }
  .result-item {
    cursor: pointer;
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
  .result-item {
    padding: 3px 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    &:hover {
      color: var(--white);
      background: rgba(255, 255, 255, 0.1);
    }
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
    img {
      width: 50px;
      border-radius: 5px;
    }
    .movie-info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .movie-title {
        font-weight: 600;
      }
      .movie-extra {
        display: flex;
        gap: 10px;
        align-items: center;
        .movie-year {
          font-weight: 200;
        }
        .movie-rating {
          font-size: 1.1rem;
          font-weight: 600;
          &.bad {
            color: red;
          }
          &.average {
            color: lightgrey;
          }
          &.good {
            color: green;
          }
        }
      }
    }
  }
`
