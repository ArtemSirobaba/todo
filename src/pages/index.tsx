import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Link to="/todo" className="flex justify-center">
      <StaticImage
        src="../images/todo.png"
        quality={100}
        className="p-4 w-1/2"
        loading="lazy"
        placeholder="blurred"
        alt="todo"
      />
    </Link>
  </Layout>
)

export default IndexPage
