import { IMAGE_BASE_URL, POSTER_SIZE, SITE_NAME } from '../config'
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import PersonInfo from './PersonInfo'
import Actor from './Actor'

import { usePersonFetch } from '../hooks/usePersonFetch'

import NoImage from '../images/no_image.jpg'

import { useParams } from 'react-router'
import { useEffect } from 'react'

const Person: React.FC = () => {
  let { personId } = useParams()

  const personIdP = personId ? personId : ''

  const { state: person, loading, error } = usePersonFetch(personIdP)

  useEffect(() => {
    document.title = `${person.name || 'Loading...'} | ${SITE_NAME}`
  }, [person])

  if (loading && !error) return <Spinner centered />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <BreadCrumb movieTitle={person.name} />
      <PersonInfo person={person} />
      {/* <Grid header="Actors">
        {person.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            id={actor.id}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid> */}
    </>
  )
}

export default Person
