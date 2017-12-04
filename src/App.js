import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListContainer from './containers/ListContainer'
import Create from './containers/CreateNew'
import Details from './components/Details'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers'

const initialState = {
  notes: [
    {
      id: '120',
      status: 'DONE',
      queueDuration: 1000,
      processDuration: 5000
    },
    {
      id: '121',
      status: 'QUEUE',
      queueDuration: 3000,
      processDuration: undefined
    }
  ]
}

const store = createStore(reducers, initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={ListContainer}/>
            <Route path="/create" component={Create}/>
            <Route path="/details/:id" component={Details}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
