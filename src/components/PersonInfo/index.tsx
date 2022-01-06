import { Wrapper, Content, Text } from './PersonInfo.styles'

import Thumb from '../Thumb'
import Rate from '../Rate'
import Favorite from '../Favorite'
import API, { Person } from '../../API'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import NoImage from '../../images/no_image.jpg'
import Actor from '../Actor'
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

  return (
    <Wrapper>
      <Content>
        <div>
          <Actor
            name={person.name}
            id={person.id}
            imageUrl={
              person.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`
                : NoImage
            }
          />
        </div>
        <Text>ddd</Text>
      </Content>
    </Wrapper>
  )
}

export default PersonInfo
