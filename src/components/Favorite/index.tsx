import { useEffect, useState } from 'react'
import { Button } from '@blueprintjs/core'
import { Icon } from '@blueprintjs/core'
import { Context } from '../../context'
import { useContext } from 'react'
import API from '../../API'

type Props = {
  movieId: number
}

const Favorite: React.FC<Props> = ({ movieId }) => {
  const handleInfo = async () => {
    const data = await API.getMovieState(user.sessionId, movieId)
    setFavorite(data.favorite)
  }
  const handleFavorite = async () => {
    const data = await API.favorite(
      user.sessionId,
      movieId,
      user.accountId,
      favorite
    )
    if (data.status_code === 1) setFavorite(true)
    if (data.status_code === 13) setFavorite(false)
  }
  const [user]: any = useContext(Context)
  const [favorite, setFavorite] = useState(false)
  useEffect(() => {
    handleInfo()
  }, [movieId])
  return (
    <>
      {' '}
      <Button
        onClick={handleFavorite}
        title="Favorite"
        icon={<Icon icon="bookmark" intent={favorite ? 'danger' : undefined} />}
      />
    </>
  )
}

export default Favorite
