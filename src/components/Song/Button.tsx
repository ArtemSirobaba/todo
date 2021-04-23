import React, { useState } from 'react'
import useSound from 'use-sound'

type ButtonProps = {
  sound: string
  name: string
  num: number
  playbackRate: number
}

const Button = ({ sound, name, num, playbackRate }: ButtonProps) => {
  const [play] = useSound(sound, { playbackRate })

  return (
    <div
      className={`flex justify-center ${num >= 8 && num < 12 ? 'pt-10' : ''}`}
    >
      <input
        className="cursor-pointer m-2  pt-1 pb-1 px-2 w-20 h-16 whitespace-normal rounded-md text-xs bg-gray-800 text-white sm:text-xl sm:w-32 sm:h-24"
        onClick={(event: React.MouseEvent<HTMLElement>) => play()}
        type="submit"
        value={name}
      />
    </div>
  )
}

export default Button
