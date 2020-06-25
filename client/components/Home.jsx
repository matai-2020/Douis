import React from 'react'
import { Link } from 'react-router-dom'

import View from './View'

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to={'/restaurants'}>Link to Restaurant</Link>
    </div>
  )
}

export default Home
