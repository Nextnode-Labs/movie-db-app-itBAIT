import { useEffect, useState } from 'react'
// API
import API, { Person } from '../API'
import { isPersistedState } from '../helpers'

export const usePersonFetch = (personId: string) => {
  const [state, setState] = useState<Person>({} as Person)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        setError(false)
        const person = await API.fetchPerson(personId)
        // const credits = await API.fetchCredits(personId)
        // Get directors

        setState(person)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }

    const sessionState = isPersistedState(personId)
    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [personId])

  useEffect(() => {
    sessionStorage.setItem(personId, JSON.stringify(state))
  }, [personId, state])

  useEffect(() => {
    if (error) sessionStorage.removeItem(personId)
  }, [personId, error])

  return { state, loading, error }
}
