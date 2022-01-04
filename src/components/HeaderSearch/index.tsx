import { InputGroup } from '@blueprintjs/core'
import { useState } from 'react'
import { Content } from './HeaderSearch.style'

type Props = {
  temp?: boolean
}

const HeaderSearch: React.FC<Props> = ({ temp }) => {
  const _d = temp
  const [state, setState] = useState('')
  //const initial = useRef(true)

  // useEffect(() => {
  //   if (initial.current) {
  //     initial.current = false
  //     return
  //   }
  //   const timer = setTimeout(() => {
  //     setSearchTerm(state)
  //   }, 1000)
  //   return () => clearTimeout(timer)
  // }, [setSearchTerm, state])
  return (
    <Content className="bp4-dark">
      <InputGroup
        //   asyncControl={true}
        //   disabled={disabled}
        large
        type="search"
        leftIcon="search"
        placeholder="Search movie..."
        onChange={(e) => setState(e.currentTarget.value)}
        onFocus={(e) => {
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }}
        value={state}
      />
    </Content>
  )
}

export default HeaderSearch
