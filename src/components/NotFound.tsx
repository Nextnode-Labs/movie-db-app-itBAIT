import { SITE_NAME } from '../config'
import { useEffect } from 'react'

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = `Page not found | ${SITE_NAME}`
  }, [])
  return (
    <div
      style={{
        color: 'white',
        fontSize: '10rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <span>404</span>
    </div>
  )
}

export default NotFound
