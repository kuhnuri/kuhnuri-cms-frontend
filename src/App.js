import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListContainer from './containers/ListContainer'
import Create from './containers/CreateNew'
import Details from './components/Details'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

const initialState = {
  notes: [
    {
      id: 'f397ec3b-1c66-4cbc-a758-f9db0711ae35',
      input: 'file:/Users/jelovirt/Work/dita-ot/src/main/docsrc/userguide.ditamap',
      output: 'file:/Volumes/tmp/platform/out/',
      transtype: 'pdf',
      params: {},
      status: 'queue',
      priority: 0,
      created: '2017-12-06T11:09:02.418Z',
      processing: null,
      finished: null
    },
    {
      id: 'e508fd4e-1c66-4cbc-a758-f9db0711ae35',
      input: 'file:/Users/jelovirt/Work/dita-ot/src/main/docsrc/userguide.ditamap',
      output: 'file:/Volumes/tmp/platform/out/',
      transtype: 'html5',
      params: {},
      status: 'queue',
      priority: 0,
      created: '2017-12-06T11:09:02.418Z',
      processing: null,
      finished: null
    }
  ]
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
            <Route exact path="/" component={ListContainer} />
            <Route path="/create" component={Create} />
            <Route path="/details/:id" component={Details} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
