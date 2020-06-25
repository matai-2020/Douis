import React from 'react'
import { Link } from 'react-router-dom'

import Map from './Map'

const View = () => {
  return (
    <div>
      <h2>view</h2>
      <Map />
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default View
