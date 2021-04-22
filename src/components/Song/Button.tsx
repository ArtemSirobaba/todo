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
        className="cursor-pointer m-2  pt-1 pb-1 px-2 w-20 h-20 whitespace-normal rounded-md text-xs bg-gray-500 text-white sm:text-xl sm:w-32"
        onClick={(event: React.MouseEvent<HTMLElement>) => play()}
        type="submit"
        value={name}
      />
    </div>
  )
}

export default Button
