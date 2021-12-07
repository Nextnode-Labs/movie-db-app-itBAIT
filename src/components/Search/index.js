import { InputGroup } from '@blueprintjs/core'
import { useEffect, useRef, useState } from 'react'
import { Content, Wrapper } from './Search.style'
import PropTypes from 'prop-types'

const Search = ({ setSearchTerm }) => {
  const [state, setState] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 1000)
    return () => clearTimeout(timer)
  }, [setSearchTerm, state])
  return (
    <Wrapper className="bp3-dark">
      <Content>
        <InputGroup
          //   asyncControl={true}
          //   disabled={disabled}
          large
          type="search"
          leftIcon="search"
          placeholder="Search movie..."
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  )
}

Search.propTypes = {
  setSearchTerm: PropTypes.func,
}

export default Search
