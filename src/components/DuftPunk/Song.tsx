import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Button from './Button'
import Mode from './Mode'

const Song = () => {
  const [speed, setSpeed] = useState(1)
  const [color, setColor] = useState('border-green-400')
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { extension: { eq: "mp3" }, name: { regex: "/[0-9]/" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)
  return (
    <div className="flex mt-10 flex-col items-center">
      <div className="grid grid-cols-4">
        {data.allFile.edges.map((file: any, index: number) => (
          <Button
            playbackRate={speed}
            key={file.node.name}
            num={index}
            name={file.node.name.split('-').join(' ').slice(3)}
            sound={file.node.publicURL}
            color={color}
          />
        ))}
      </div>
      <Mode
        changeSpeed={(speed: number, color: string) => {
          setSpeed(speed)
          setColor(color)
        }}
        speed={speed}
      />
    </div>
  )
}

export default Song
