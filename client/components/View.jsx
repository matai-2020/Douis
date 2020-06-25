import React from 'react'
import { Link } from 'react-router-dom'

import { getData } from '../api'

import Map from './Map'

export class View extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurants: []
    }
    console.log(props)
  }

  componentDidMount () {
    getData()
      .then(dbData => {
        //   console.log('dbData on view page: ', dbData)
        this.setState(
          {
            restaurants: dbData
          }
        )
      })
  }

  render () {
    return (
      <div>

        <h2>view</h2>
        <Map />
        <Link to={'/'}>Home</Link>
      </div>
    )
  }
}
export default View
