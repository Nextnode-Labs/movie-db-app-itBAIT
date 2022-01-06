import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  border-bottom: 1px solid var(--medGrey);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);
  gap: 10px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  a {
    color: var(--white);
    text-decoration: none;
  }

  .logout {
    cursor: pointer;
  }
  .logout::before {
    content: ' | ';
  }
  .right {
    display: flex;
    gap: 1em;
  }
`

export const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`

export const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`
