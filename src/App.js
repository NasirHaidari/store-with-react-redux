import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './containers/Headers'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function App() {
  return (
    <div className='App'>
      <Router>
        {' '}
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route path='/product/:productId' component={ProductDetail} />
          <Route>404 Error</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
