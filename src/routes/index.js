import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateNew from '../containers/CreateNew'
import Details from '../containers/DetailsContainer'
import ContentManager from '../containers/ContentManagerContainer'

const Routes = () =>
  <Switch>
    <Route path="/" exact={true} component={ContentManager} />
    <Route path="/create" component={CreateNew} />
    <Route path="/details/:id+" render={matchProps => [
      <ContentManager key="nav" {...matchProps} />,
      <Details key="main" {...matchProps} />
    ]} />
  </Switch>

export default Routes
