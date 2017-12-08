// import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import List from '../components/List'

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    jobs : state.jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    remove : (id) => dispatch({
      type : 'REMOVE',
      id
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
