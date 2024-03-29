import { useEffect, useState, useCallback } from 'react'
// API
import API, { Movie, Cast, Crew } from '../API'
import { isPersistedState } from '../helpers'

export type MovieState = Movie & { actors: Cast[]; directors: Crew[] }

export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<MovieState>({} as MovieState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      const movie = await API.fetchMovie(movieId)
      const credits = await API.fetchCredits(movieId)

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
  }, [movieId])

  useEffect(() => {
    const sessionState = isPersistedState('movie-' + movieId)
    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [movieId, fetchMovie])

  useEffect(() => {
    if (Object.keys(state).length !== 0)
      sessionStorage.setItem('movie-' + movieId, JSON.stringify(state))
  }, [movieId, state])

  useEffect(() => {
    if (error) sessionStorage.removeItem('movie-' + movieId)
  }, [movieId, error])

  return { state, loading, error }
}
