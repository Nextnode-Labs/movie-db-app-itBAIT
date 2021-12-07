import { useEffect, useState } from 'react'
// API
import API from '../API'
import { isPersistedState } from '../helpers'

export const useMovieFetch = (movieID) => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        setError(false)
        const movie = await API.fetchMovie(movieID)
        const credits = await API.fetchCredits(movieID)
        // Get directors
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        )
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        })
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }

    const sessionState = isPersistedState(movieID)
    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [movieID])

  useEffect(() => {
    sessionStorage.setItem(movieID, JSON.stringify(state))
  }, [movieID, state])

  return { state, loading, error }
}
