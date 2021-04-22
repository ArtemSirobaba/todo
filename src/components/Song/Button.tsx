import React from 'react'
import useSound from 'use-sound'

type ButtonProps = {
  sound: string
  name: string
}

const Button = ({ sound, name }: ButtonProps) => {
  const [play] = useSound(sound)

  return (
    <div>
      <input
      className='cursor-pointer m-2 p-2 '
        onClick={(event: React.MouseEvent<HTMLElement>) => play()}
        type="submit"
        value={name}
      />
    </div>
  )
}

export default Button
