import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

type Props = {
  rating: number
}

export const Badge = styled.div<Props>`
  position: absolute;
  width: 3rem;
  height: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background: black;
  margin: 0 auto;
  transform: translateY(calc(100% - 1px));
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid black;
  /* box-shadow: 0px 2px 4px 2px black; */
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ rating }) =>
    rating < 5 ? 'red' : rating < 8 ? 'var(--lightGrey)' : 'green'};
`
