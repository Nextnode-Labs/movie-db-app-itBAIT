import { InputGroup } from '@blueprintjs/core'
import { useState, useEffect } from 'react'
import { Content } from './HeaderSearch.style'
import API, { Movies, Movie } from '../../API'

const HeaderSearch: React.FC = () => {
  const [state, setState] = useState('')
  const [results, setResults] = useState<Movie[]>([])
  const [showResults, setShowResults] = useState(false)

  //const initial = useRef(true)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (state?.trim()) {
      timer = setTimeout(() => {
        API.searchMovie(state).then((data: Movies) => {
          setResults(data.results)
        })
      }, 500)
    } else setResults([])
    return () => clearTimeout(timer)
  }, [state])

  return (
    <Content className={'bp4-dark' + (state.length > 0 ? ' expanded' : '')}>
      <InputGroup
        //   asyncControl={true}
        //   disabled={disabled}
        large
        type="search"
        leftIcon="search"
        placeholder="Search..."
        onChange={(e) => setState(e.currentTarget.value)}
        onFocus={(e) => {
          setShowResults(true)
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }}
        onBlur={() => {
          setShowResults(false)
        }}
        value={state}
      />
      {showResults && results.length > 0 && (
        <div className="results">
          {results.map((movie) => (
            <div key={movie.id} className="result-item">
              {movie.title}
            </div>
          ))}
        </div>
      )}
    </Content>
  )
}

export default HeaderSearch
