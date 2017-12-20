import * as React from 'react'
import { Route } from 'react-router-dom'
import ListContainer from '../containers/ListContainer'
import CreateNew from '../containers/CreateNew'
import DetailsContainer from '../containers/DetailsContainer'

const Routes = () =>
  <div>
    <Route exact path="/" component={ListContainer} />
    <Route path="/create" component={CreateNew} />
    <Route path="/details/:id" component={DetailsContainer} />
  </div>

export default Routes
