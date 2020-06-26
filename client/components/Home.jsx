import React from 'react'
import { Link } from 'react-router-dom'

import { getData } from '../api'

export class Home extends React.Component {
    state = {
      restaurants: []
    }

    componentDidMount () {
      getData()
        .then(dbData => {
          // console.log('dbData on home page: ', dbData)
          this.setState(
            {
              restaurants: dbData
            }
          )
        })
    }

    render () {
      return (
        <div className='container'>
          <div className='content'>
            {this.state.restaurants.map(el => {
              return (
                <div key={el.id}>
                  <Link to={`restaurants/${el.id}`}>
                    <img src={`images/${el.image}`} />
                    <h3>{el.name}</h3>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
}

export default Home
