import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateNew from '../containers/CreateNew'
import DetailsContainer from '../containers/DetailsContainer'

const Routes = () =>
  <div className="col-8">
    <Switch>
      <Route path="/create" component={CreateNew} />
      <Route path="/details/:id+" component={DetailsContainer} />
    </Switch>
  </div>

export default Routes
