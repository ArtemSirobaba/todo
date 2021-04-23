import React from "react"
import Header from "./Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-500 min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
