import React, { Component } from 'react';
import './App.css';
import ListContainer from './containers/ListContainer'
import CreateNew from './containers/CreateNew'
import DetailsContainer  from './containers/DetailsContainer'
import Nav from './components/Nav'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

const initialState = {
  job: {
    id: null,
    transtype: null,
    input: null
  },
  jobs: [],
  create: null
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk), applyMiddleware(middleware))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Nav />
            <Route exact path="/" component={ListContainer} />
            <Route path="/create" component={CreateNew} />
            <Route path="/details/:id" component={DetailsContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
