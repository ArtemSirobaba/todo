import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Link to="/todo">
      <StaticImage
        src="../images/todo.jpeg"
        quality={100}
        style={{
          height: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        loading="lazy"
        placeholder="blurred"
        alt="A Gatsby astronaut"
      />
    </Link>
  </Layout>
)

export default IndexPage
