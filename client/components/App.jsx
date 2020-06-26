import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Title from './Title'
import View from './View'

const App = () => {
  return (
    <>
      <Route path='/' component={Title} />
      <Route exact path='/' component={Home} />

      <Route path='/restaurants/:id' component={View} />

    </>
  )
}

export default App
