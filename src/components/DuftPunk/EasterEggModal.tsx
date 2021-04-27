import React, { useState } from 'react'
import ReactPlayer from 'react-player'

interface EasterEggModal {
  onClose: () => void
}

const EasterEggModal = ({ onClose }: EasterEggModal) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">BOOOM!</h3>
          </div>
          <div className="w-56 h-32 mn:w-96 mn:h-56 sm:h-[350px] sm:w-[600px]">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=9sjWU5dGcGI"
              width="100%"
              height="100%"
              playing={true}
              controls={true}
            />
          </div>
          <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => onClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EasterEggModal
