import { useState } from 'react'
import { Button } from '@blueprintjs/core'

type Props = {
  callback: (value: string) => void
}

const Rate: React.FC<Props> = ({ callback }) => {
  const [value, setvalue] = useState('5')
  return (
    <>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setvalue(e.currentTarget.value)}
      />
      {value}{' '}
      <Button text="Rate" onClick={() => callback(value)} />
    </>
  )
}

export default Rate
