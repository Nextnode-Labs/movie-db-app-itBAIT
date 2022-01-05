import { InputGroup } from '@blueprintjs/core'
import { useState, useEffect } from 'react'
import { Content } from './HeaderSearch.style'
import API, { Movies, Movie } from '../../API'
import { SEARCH_THUMB_SIZE, IMAGE_BASE_URL } from '../../config'
import NoImage from '../../images/no_image.jpg'
import Thumb from '../Thumb'
import { Link } from 'react-router-dom'

const HeaderSearch: React.FC = () => {
  const [state, setState] = useState('')
  const [results, setResults] = useState<Movie[]>([])
  const [showResults, setShowResults] = useState(0)

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
  useEffect(() => {}, [showResults])

  return (
    <Content className={'bp4-dark' + (state.length > 0 ? ' expanded' : '')}>
      <InputGroup
        large
        type="search"
        leftIcon="search"
        placeholder="Search..."
        onChange={(e) => setState(e.currentTarget.value)}
        onFocus={(e) => {
          setShowResults((prev) => prev + 1)
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }}
        onBlur={() => {
          setTimeout(() => {
            setShowResults((prev) => prev - 1)
          })
        }}
        value={state}
      />
      {showResults > 0 && results.length > 0 && (
        <div
          className="results"
          tabIndex={0}
          onClick={() => {
            setShowResults(0)
          }}
          onFocus={() => {
            setShowResults((prev) => prev + 1)
          }}
          onBlur={() => {
            setTimeout(() => {
              setShowResults((prev) => prev - 1)
            })
          }}
        >
          {results.map((movie) => (
            <Link to={`/${movie.id}`}>
              <div key={movie.id} className="result-item">
                <Thumb
                  image={
                    movie.poster_path
                      ? IMAGE_BASE_URL + SEARCH_THUMB_SIZE + movie.poster_path
                      : NoImage
                  }
                />
                <span>{movie.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Content>
  )
}

export default HeaderSearch
