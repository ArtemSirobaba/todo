import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useSound from 'use-sound'

const Beat = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "duft-punk" }) {
        publicURL
      }
    }
  `)

  const [play, { stop }] = useSound(data.file.publicURL)
  const [isPlay, setIsPlay] = useState(false)

  const handleSound = (event: React.MouseEvent<HTMLElement>) => {
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
        className="bg-transparent text-xs sm:text-xl border-2 px-4 p-1 rounded-md text-white"
      />
    </div>
  )
}

export default Beat
