import { useEffect, useState, useCallback } from 'react'
// API
import API, { Person, PersonCredits } from '../API'
import { isPersistedState } from '../helpers'

export type PersonState = Person & { credits: PersonCredits }

export const usePersonFetch = (personId: string) => {
  const [state, setState] = useState<PersonState>({} as PersonState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      const person = await API.fetchPerson(personId)
      const credits = await API.fetchPersonCredits(personId)

      setState({
        ...person,
        credits: credits,
      })

      setLoading(false)
    } catch (error) {
      setError(true)
    }
  }, [setState, setLoading, setError, personId])

  useEffect(() => {
    const sessionState = isPersistedState('person-' + personId)
    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [personId, fetchMovie])

  useEffect(() => {
    if (Object.keys(state).length !== 0)
      sessionStorage.setItem('person-' + personId, JSON.stringify(state))
  }, [personId, state])

  useEffect(() => {
    // if (error) sessionStorage.removeItem('person-' + personId)
  }, [personId, error])

  return { state, loading, error }
}
