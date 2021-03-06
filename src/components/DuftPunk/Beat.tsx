import React, {FC, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useSound from 'use-sound'

const Beat: FC = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "duft-punk" }) {
        publicURL
      }
    }
  `)

  const [play, { stop }] = useSound(data.file.publicURL)
  const [isPlay, setIsPlay] = useState<boolean>(false)

  const handleSound = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isPlay) {
      play()
      setIsPlay(true)
    } else {
      stop()
      setIsPlay(false)
    }
  }

  return (
    <div className="relative left-12 sm:left-24 flex items-center">
      <input
        type="submit"
        value="Beat"
        onClick={handleSound}
        className={`bg-transparent outline-none cursor-pointer text-xs sm:text-xl border-2 px-4 p-1 rounded-md text-white ${
          isPlay ? 'border-yellow-600' : ''
        }`}
      />
    </div>
  )
}

export default Beat
