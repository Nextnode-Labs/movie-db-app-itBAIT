import { useEffect, useState } from 'react'
// API
import API, { Person, PersonCredits } from '../API'
import { isPersistedState } from '../helpers'

export type PersonState = Person & { credits: PersonCredits }

export const usePersonFetch = (personId: string) => {
  const [state, setState] = useState<PersonState>({} as PersonState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
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
