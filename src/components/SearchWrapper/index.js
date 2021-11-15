import { Icon, IconSize, InputGroup } from '@blueprintjs/core'
import { useEffect, useRef, useState } from 'react'
import { Wrapper } from './SearchWrapper.style'

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
    <Wrapper>
      <InputGroup
        //   asyncControl={true}
        //   disabled={disabled}
        className="bp3-round"
        large="true"
        leftIcon="search"
        placeholder="Search movie..."
        onChange={(e) => setState(e.currentTarget.value)}
        value={state}
      />
    </Wrapper>
  )
}

export default SearchWrapper
