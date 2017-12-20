import React, { Component } from 'react'
import Routes from './routes'
import Nav from './components/Nav'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import './App.css'

const initialState = {
  tree: {}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk), applyMiddleware(middleware))
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Nav />
            <Routes />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
