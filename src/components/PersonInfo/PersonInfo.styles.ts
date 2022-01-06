import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem 2rem;
`

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
  .person-sidebar {
    display: flex;
    flex-direction: column;
    width: 400px;
    color: var(--white);
    gap: 1rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .person-category {
      font-weight: 600;
    }
    .person-title {
      display: block;
    }
  }
  .person-title {
    display: block;
    &.mobile {
      display: none;
    }
    @media screen and (max-width: 768px) {
      display: none;
      &.mobile {
        text-align: center;
        display: block;
      }
    }
  }
`

export const Text = styled.div`
  width: 100%;
  padding: 0 40px;
  color: var(--white);
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 15px;
  align-self: center;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`
