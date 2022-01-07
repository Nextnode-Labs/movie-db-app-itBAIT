import { Wrapper, Content, Text, Image } from './PersonInfo.styles'

import { Person } from '../../API'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import NoImage from '../../images/no_image.jpg'
// import { Context } from '../../context'
// import { useContext } from 'react'

type Props = {
  person: Person
}

const PersonInfo: React.FC<Props> = ({ person }) => {
  // const [user]: any = useContext(Context)
  // const handleRating = async (value: string) => {
  //   await API.rateMovie(user.sessionId, movie.id, parseInt(value))
  // }
  const genders = ['Unknown', 'Female', 'Male']
  var last = person.deathday ? new Date(person.deathday) : new Date()
  const birthday = new Date(person.birthday)
  let age = last.getFullYear() - birthday.getFullYear()
  const m = last.getMonth() - birthday.getMonth()
  if (m < 0 || (m === 0 && last.getDate() < birthday.getDate())) age--

  return (
    <Wrapper>
      <Content>
        <div className="person-sidebar">
          <h1 className="person-title mobile">{person.name}</h1>
          <Image
            src={
              person.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`
                : NoImage
            }
          />
          <h3>Personal Info</h3>
          <p>
            <span className="person-category">Known For</span>
            <br />
            <span>{person.known_for_department}</span>
          </p>
          <p>
            <span className="person-category">Gender</span>
            <br />
            <span>{genders[person.gender]}</span>
          </p>
          {person.birthday && (
            <p>
              <span className="person-category">Birthday</span>
              <br />
              <span>
                <span>{person.birthday}</span>{' '}
                {!person.deathday && <span>{`(Age: ${age})`}</span>}
              </span>
            </p>
          )}
          {person.deathday && (
            <p>
              <span className="person-category">Deathday</span>
              <br />
              <span>
                <span>{person.deathday}</span>{' '}
                {person.deathday && <span>{`(At the age: ${age})`}</span>}
              </span>
            </p>
          )}
          <p>
            <span className="person-category">Place of Birth</span>
            <br />
            <span>{person.place_of_birth}</span>
          </p>
        </div>
        <Text>
          <h1 className="person-title">{person.name}</h1>
          <h3>Biography</h3>
          {person.biography.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Text>
      </Content>
    </Wrapper>
  )
}

export default PersonInfo
