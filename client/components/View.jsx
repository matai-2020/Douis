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
    // console.log(props)
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
    const paramsId = Number(this.props.match.params.id)

    const restaurant = this.state.restaurants.find(el => el.id === paramsId)

    console.log('restaurant props', restaurant)
    return (

      <div>
        {restaurant &&
        <>
                <div className='description'>
                  <h2>{restaurant.name}</h2>
                  <p>Restaurant Rating: {restaurant.rating}</p>
                  <p>Price Range: {restaurant.priceRange}</p>
                  <p>Type: {restaurant.kind}</p>
                  <p>Description: {restaurant.description}</p>
                </div>

        <div>
          <Map data={restaurant} />
        </div>
        </>
        }
        <div className='homebutton'>
          <Link to={'/'}>Home</Link>
        </div>

      </div>

    )
  }
}
export default View
