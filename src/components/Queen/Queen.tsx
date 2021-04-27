import React, { SyntheticEvent, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useSound from 'use-sound'
import Hotkeys from 'react-hot-keys'

const Queen = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "Queen" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
    }
  `)
  const [beat1] = useSound(data.allFile.edges[0].node.publicURL)
  const [beat2] = useSound(data.allFile.edges[1].node.publicURL)
  const [music, { stop }] = useSound(data.allFile.edges[2].node.publicURL)
  const [isPlay, setIsPlay] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)

  const handleSound = (event: React.MouseEvent<HTMLElement>) => {
    if (!isPlay) {
      music()
      setIsPlay(true)
    } else {
      stop()
      setIsPlay(false)
    }
  }

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay) 
  }
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div>
        <input
          className="p-4 m-2 rounded-xl cursor-pointer border-2 border-red-600 hover:bg-red-600 sm:text-lg hover:text-white sm:px-10 sm:p-8 outline-none"
          value="Beat-1 (V key)"
          type="submit"
          onClick={(event: React.MouseEvent<HTMLElement>) => beat1()}
        />
        <input
          className="p-4 m-2 rounded-xl cursor-pointer hover:bg-blue-600 border-2 border-blue-600 sm:text-lg hover:text-white sm:px-10 sm:p-8 outline-none"
          value="Beat-2 (N key)"
          type="submit"
          onClick={(event: React.MouseEvent<HTMLElement>) => beat2()}
        />
        <Hotkeys keyName="V" onKeyDown={() => beat1()} />
        <Hotkeys keyName="N" onKeyDown={() => beat2()} />
      </div>
      <input
        className="m-6 px-6 py-2 rounded-md cursor-pointer hover:bg-yellow-600 hover:text-white sm:px-10 sm:p-4 sm:text-lg outline-none"
        value={!isPlay ? 'Play' : 'Stop'}
        type="submit"
        onClick={handleSound}
      />
      <input
        className="m-1 px-6 py-2 rounded-md cursor-pointer sm:px-10 sm:p-4 sm:text-lg outline-none"
        type="submit"
        onClick={handleAutoPlay}
        value={`Autoplay ${autoPlay ? '⏸' : '▶'}`}
      />
    </div>
  )
}

export default Queen
