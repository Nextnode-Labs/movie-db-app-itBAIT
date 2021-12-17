import { useCallback, useEffect, useState } from 'react'
// API
import API, { Movie } from '../API'
import { Context } from '../context'
import { useContext } from 'react'

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0,
}

export const useFavoritesFetch = () => {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isLoadingMore, setSsLoadingMore] = useState(false)
  const [user]: any = useContext(Context)

  const fetchFavoriteMovies = useCallback(
    async (page: number) => {
      try {
        setError(false)
        setLoading(true)
        const movies = await API.fetcFavoritehMovies(
          user.sessionId,
          user.accountId
        )
        setState((prev) => ({
          ...movies,
          results:
            page > 1
              ? [...prev.results, ...movies.results]
              : [...movies.results],
        }))
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    },
    [user]
  )

  // Initial
  useEffect(() => {
    fetchFavoriteMovies(1)
  }, [user, fetchFavoriteMovies])
  // Search

  // load more
  useEffect(() => {
    if (!isLoadingMore) return
    fetchFavoriteMovies(state.page + 1)
    setSsLoadingMore(false)
  }, [isLoadingMore, state.page, user, fetchFavoriteMovies])

  return { state, loading, error, setSsLoadingMore }
}
