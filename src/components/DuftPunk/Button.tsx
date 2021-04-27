import React, { useState } from 'react'
import useSound from 'use-sound'

interface ButtonProps {
  sound: string
  name: string
  num: number
  playbackRate: number
  color: string
  easterEgg: (name: string) => void;
}

const Button = ({
  sound,
  name,
  num,
  playbackRate,
  color,
  easterEgg,
}: ButtonProps) => {

  const [play] = useSound(sound, { playbackRate })

  return (
    <div
      className={`flex justify-center ${num >= 8 && num < 12 ? 'pt-10' : ''}`}
    >
      <input
        className={`cursor-pointer outline-none m-2 bg-transparent border-2 ${color} border-opacity-100 mn:pt-1 mn:pb-1 mn:px-2 w-20 h-16 whitespace-normal rounded-md text-[10px] text-white sm:text-xl sm:w-32 sm:h-24`}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          play()
          easterEgg(name)
        }}
        type="submit"
        value={name}
      />
    </div>
  )
}

export default Button
