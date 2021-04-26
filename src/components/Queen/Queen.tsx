import React, { SyntheticEvent, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useSound from 'use-sound'
import Hotkeys from 'react-hot-keys'

const Queen = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "Queen" } }) {
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

  const handleSound = (event: React.MouseEvent<HTMLElement>) => {
    if (!isPlay) {
      music()
      setIsPlay(true)
    } else {
      stop()
      setIsPlay(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div>
        <input
          className="p-4 m-2 rounded-xl cursor-pointer border-2 border-red-600 hover:bg-red-600 sm:text-lg hover:text-white sm:px-10 sm:p-8 outline:none"
          value="Beat-1 (V key)"
          type="submit"
          onClick={(event: React.MouseEvent<HTMLElement>) => beat1()}
        />
        <input
          className="p-4 m-2 rounded-xl cursor-pointer hover:bg-blue-600 border-2 border-blue-600 sm:text-lg hover:text-white sm:px-10 sm:p-8 outline:none"
          value="Beat-2 (N key)"
          type="submit"
          onClick={(event: React.MouseEvent<HTMLElement>) => beat2()}
        />
        <Hotkeys keyName="V" onKeyUp={() => beat1()} />
        <Hotkeys keyName="N" onKeyUp={() => beat2()} />
      </div>
      <input
        className="px-4 p-1 m-6 rounded-md cursor-pointer hover:bg-yellow-600 hover:text-white sm:px-10 sm:p-4 sm:text-lg outline:none"
        value={!isPlay ? 'Play' : 'Stop'}
        type="submit"
        onClick={handleSound}
      />
    </div>
  )
}

export default Queen
