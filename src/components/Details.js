import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.load(this.props.match.params.id, () => this.setState({ loading: false }))
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({ loading: true })
      this.props.load(this.props.match.params.id, () => this.setState({ loading: false }))
    }
  }

  render() {
    return (
      <main className={`details ${this.state.loading ? 'loading' : ''}`}>
        <pre>{this.props.contents}</pre>
      </main>
    );
  }
}

export default Details;
