import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Button from './Button'
import nameArray from './nameArray'

const Song = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "mp3" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
    const newData = data.allFile.edges.sort(
      (a: any, b: any) => a.node.publicURL - b.node.publicURL
    )
    console.log(newData)
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-4">
        {newData.map((file: any, index: number) => (
          <Button
            key={file.node.publicURL}
            num={index}
            name={nameArray[index]}
            sound={file.node.publicURL}
          />
        ))}
      </div>
    </div>
  )
}

export default Song
