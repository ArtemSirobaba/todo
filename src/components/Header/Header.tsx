import React, { useState } from 'react'
import { Link } from 'gatsby'

const Navigation = ({}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <nav className="flex items-center bg-gray-600 justify-center flex-wrap bg-teal-500 p-6">
      <div className="flex items-center cursor-pointer flex-shrink-0 text-white mr-6">
        <Link to="/">
          <h2>My App</h2>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setExpanded(!expanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          expanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/todo"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            ToDo
          </Link>

          <Link
            to="/page-2"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Page Two
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
