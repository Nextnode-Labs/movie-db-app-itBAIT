import { InputGroup } from '@blueprintjs/core'
import { useState, useEffect } from 'react'
import { Content } from './HeaderSearch.style'
import API, { Movies, Movie } from '../../API'

const HeaderSearch: React.FC = () => {
  const [state, setState] = useState('')
  const [results, setResults] = useState<Movie[]>([])

  //const initial = useRef(true)

  useEffect(() => {
    if (state?.trim()) {
      API.searchMovie(state).then((data: Movies) => {
        setResults(data.results)
      })
    }
  }, [state])

  return (
    <Content
      className={'bp4-dark' + (state.length > 0 ? ' expanded' : ' expanded')}
    >
      <InputGroup
        //   asyncControl={true}
        //   disabled={disabled}
        large
        type="search"
        leftIcon="search"
        placeholder="Search..."
        onChange={(e) => setState(e.currentTarget.value)}
        onFocus={(e) => {
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }}
        value={state}
      />
      {results.length > 0 && (
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
