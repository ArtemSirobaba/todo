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
        className="cursor-pointer m-2  pt-2 pb-2 px-4 w-32 h-12 rounded-md bg-gray-500 text-white"
        onClick={(event: React.MouseEvent<HTMLElement>) => play()}
        type="submit"
        value={name}
      />
    </div>
  )
}

export default Button
