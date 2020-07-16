import React, { Component } from 'react'
import Model from './containers/ModelDisplay/Models'
import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'
import Orders from './containers/Orders/Orders'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    const routes=(
      <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product-models" component={Model} />
    <Route path="/orders" component={Orders}/>
     </Switch>
    );
    return (
  
      <div className="App">
        <BrowserRouter>
        <Layout />
       {routes}
        </BrowserRouter>
      </div>
    )
  }
}

export default App
