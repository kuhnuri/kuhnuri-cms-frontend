import { connect } from 'react-redux'
import Create from '../components/Create'
import { push } from 'react-router-redux'
import { create as createAction } from '../actions'
import { withRouter } from "react-router-dom"
import config from '../config'

const mapStateToProps = state => {
  return {
    job: state.job
  }
}

const mapDispatchToProps = dispatch => {
  return {
    create: (data) => {
      // dispatch(requestCreate(body))
      return setTimeout(() => fetch(`${config.api.url}/api/v1/job`, {
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
        }), 3000)
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Create))
