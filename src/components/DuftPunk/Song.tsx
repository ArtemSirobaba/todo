import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, useEffect, useState } from 'react'
import Button from './Button'
import EasterEggModal from './EasterEggModal'
import Mode from './Mode'

const Song: FC = () => {
  const [speed, setSpeed] = useState<number>(1)
  const [nameArray, setNameArray] = useState<string[]>([])
  const [easterEgg, setEasterEgg] = useState<boolean>(false)
  const [color, setColor] = useState<string>('border-green-400')
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

  useEffect(() => {
    const equal =
      '["WORK IT","MAKE IT","DO IT","MAKES US","HARDER","BETTER","FASTER","STRONGER","WORK IT","HARDER","MAKE IT","BETTER","DO IT","FASTER","MAKES US","STRONGER","MORE THAN","EVER","HOUR","AFTER","OUR","WORK IS","NEVER","OVER"]'
    if (JSON.stringify(nameArray) === equal) setEasterEgg(true)
    return () => setEasterEgg(false)
  }, [nameArray])

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
            easterEgg={name => setNameArray([...nameArray, name])}
          />
        ))}
      </div>
      {easterEgg ? (
        <EasterEggModal onClose={() => setEasterEgg(false)} />
      ) : null}
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
