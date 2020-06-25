import React from 'react'
import { Link } from 'react-router-dom'

import { getData } from '../api'

export class Home extends React.Component {
    state = {
      name: '',
      image: ''
    }

    componentDidMount () {
      getData()
        .then(dbData => {
          console.log('dbData on home page: ', dbData)
        })
    }

    render () {
      return (
        <div>
          <h1>Area for image links</h1>
          <Link to={'/restaurants'}>Link to Restaurant</Link>
        </div>
      )
    }
}

export default Home
