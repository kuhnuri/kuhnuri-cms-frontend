// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Create from '../components/Create'
  
function create() {
    const data = {
      input: this.refs.input.value,
      transtype: this.refs.transtype.value,
      filter: this.refs.filter.value,
      output: this.refs.output.value
    }
    console.log(data)
  }

// const mapStateToProps = state => {
//   return {
//     // notes : state.notes
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     create: () => dispatch({
//       type: 'CREATE'
//     })
//   }
// }

export default connect()(Create);
