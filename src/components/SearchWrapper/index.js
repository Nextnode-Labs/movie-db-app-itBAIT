import { Classes, Icon, IconSize, InputGroup, Intent } from '@blueprintjs/core'
import { useEffect, useRef, useState } from 'react'
import { Content, Wrapper } from './SearchWrapper.style'

const SearchWrapper = ({ setSearchTerm }) => {
  const [state, setState] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 500)
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

export default SearchWrapper
