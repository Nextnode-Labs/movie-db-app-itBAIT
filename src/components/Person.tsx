import { IMAGE_BASE_URL, POSTER_SIZE, SITE_NAME } from '../config'
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import PersonInfo from './PersonInfo'
import Thumb from './Thumb'
import RatingBadge from './RatingBadge'
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
  const notAdultCast = person.credits.cast.filter((cast) => !cast.adult)
  return (
    <>
      <BreadCrumb items={['Persons', person.name]} />
      <PersonInfo person={person} />
      {notAdultCast.length > 0 && (
        <Grid header={'Known for'}>
          {notAdultCast.map((cast) => (
            <RatingBadge key={cast.id} rating={cast.vote_average}>
              <Thumb
                clickable
                title={cast.original_title}
                image={
                  cast.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + cast.poster_path
                    : NoImage
                }
                movieId={cast.id}
              />
            </RatingBadge>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Person
