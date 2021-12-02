import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`
export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    flex: 1;
    .btn {
      min-width: 200px;
      height: 50px;
      border-radius: 20px;
      background: var(--medGrey);
      color: var(--white);
    }
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    .column {
      margin: 20px 0;
    }
  }
`
