import { connect } from 'react-redux'
import Create from '../components/Create'
import { create } from '../actions'
import { push } from 'react-router-redux'
import { create as createAction } from '../actions'
import { withRouter } from "react-router-dom"

const API_URL = 'http://localhost:9000'

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    create: (data) => {
      fetch(`${API_URL}/api/v1/job`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(body => {
          dispatch(createAction(body))
          dispatch(push(`/details/${body.id}`))
        })
    }
  }
}
// this.props.dispatch((dispatch) => {
//   dispatch(loading())
//   console.log('createNew dispatch')
//   setTimeout(() => {
//     console.log('after timeout')
//     dispatch(create(data))
//     this.props.history.push('/')
//   }, 5000)
// })

// }
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Create))
