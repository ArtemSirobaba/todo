import React from 'react'
import Beat from './Beat'

type ModeProps = {
  speed: number
  changeSpeed: any
}

const Mode = ({ speed, changeSpeed }: ModeProps) => {
  return (
    <div className="flex">
      <div className="relative right-14 sm:right-[102px]">
        <input
          className={`bg-transparent outline-none text-xs sm:text-xl border-2 m-2 text-white p-1 rounded-md cursor-pointer ${
            speed === 1 ? 'border-green-400' : ''
          }`}
          type="submit"
          value="Speed 1"
          onClick={() => changeSpeed(1, 'border-green-400')}
        />
        <input
          className={`bg-transparent outline-none text-xs sm:text-xl border-2 m-2 text-white p-1 rounded-md cursor-pointer ${
            speed === 1.1 ? 'border-red-400' : ''
          }`}
          type="submit"
          value="Speed 2"
          onClick={() => changeSpeed(1.1, 'border-red-400')}
        />
        <input
          className={`bg-transparent outline-none text-xs sm:text-xl border-2 m-2 text-white p-1 rounded-md cursor-pointer ${
            speed === 1.2 ? 'border-blue-400' : ''
          }`}
          type="submit"
          value="Speed 3"
          onClick={() => changeSpeed(1.2, 'border-blue-400')}
        />
      </div>

      <Beat />
    </div>
  )
}

export default Mode
