import React from 'react'
import stronger from './songs/stronger1.mp3'
import after from './songs/after1.mp3'
import better from './songs/better1.mp3'
import doit from './songs/doit1.mp3'
import ever from './songs/ever1.mp3'
import faster from './songs/faster1.mp3'
import harder from './songs/harder1.mp3'
import hour from './songs/hour1.mp3'
import makeit from './songs/makeit1.mp3'
import makesus from './songs/makesus1.mp3'
import morethan from './songs/morethan1.mp3'
import never from './songs/never1.mp3'
import our from './songs/our1.mp3'
import over from './songs/over1.mp3'
import workis from './songs/workis1.mp3'
import workit from './songs/workit1.mp3'
import Button from './Button'

const Song = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-between w-54">
        <Button name="WORK IT" sound={workit} />
        <Button name="MAKE IT" sound={makeit} />
        <Button name="DO IT" sound={doit} />
        <Button name="MAKES US" sound={makesus} />
      </div>
      <div className="flex justify-between">
        <Button name="HARDER" sound={harder} />
        <Button name="BETTER" sound={better} />
        <Button name="FASTER" sound={faster} />
        <Button name="STRONGER" sound={stronger} />
      </div>
      <div className="flex justify-between">
        <Button name="MORE THAN" sound={morethan} />
        <Button name="HOUR" sound={hour} />
        <Button name="OUR" sound={our} />
        <Button name="NEVER" sound={never} />
      </div>
      <div className="flex justify-between">
        <Button name="EVER" sound={ever} />
        <Button name="AFTER" sound={after} />
        <Button name="WORK IS" sound={workis} />
        <Button name="OVER" sound={over} />
      </div>
    </div>
  )
}

export default Song
