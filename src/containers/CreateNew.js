import {connect} from 'react-redux'
import Create from '../components/Create'
import {create} from '../actions'
import { push } from 'react-router-redux'
import {create as createAction} from '../actions'

const API_URL = 'http://localhost:9000'

const mapStateToProps = state => {
  return {
    notes : state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    create: (data) => {
      console.log('start submit')
      fetch(`${API_URL}/api/v1/job`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      }).then((created) => {
        console.log('got created back', created)
        dispatch(createAction(created))
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
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
