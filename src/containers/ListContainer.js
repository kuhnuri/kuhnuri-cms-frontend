// import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import List from '../components/List'

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    notes : state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    destroyNote : () => dispatch({
      type : 'DESTROY_TODO'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
