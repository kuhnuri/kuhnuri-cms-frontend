import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }
  }
  render() {
    return (
      <main className={`create ${this.state.loading ? 'loading' : ''}`}>
        <h1>New Job</h1>
        <dl>
          <dt>
            <label htmlFor="input">Input</label>
          </dt>
          <dd>
            <input id="input" ref={input => { this.input = input }}
              defaultValue="file:/Users/jelovirt/Work/dita-ot/src/main/docsrc/userguide.ditamap"
              type="url" required className="form-control" placeholder="Input file URI" />
          </dd>
          <dt>
            <label htmlFor="transtype">Transtype</label>
          </dt>
          <dd>
            <select id="transtype" ref={transtype => { this.transtype = transtype }} required className="form-control">
              <option value="html5">HTML5</option>
              <option value="pdf">PDF</option>
            </select>
          </dd>
          <dt>
            <label htmlFor="filter">Filter</label>
          </dt>
          <dd>
            <input id="filter" ref={filter => { this.filter = filter }} placeholder="Filter file URI"
              type="url" className="form-control" />
          </dd>
          <dt>
            <label>Parameters</label>
          </dt>
          <dd>
            <table className="table">
              <tbody>
                <tr>
                  <th>force-unique</th>
                  <td>
                    <select className="form-control">
                      <option value="true">true</option>
                      <option value="false" defaultValue>false</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </dd>
          <dt>
            <label htmlFor="output">Output</label>
          </dt>
          <dd>
            <input id="output" ref={output => { this.output = output }} defaultValue="file:/Volumes/tmp/platform/out/"
              placeholder="Output file URI" type="url" className="form-control" />
          </dd>
        </dl>
        <p>
          <button type="button" className="btn btn-default create"
            disabled={this.state.loading}
            onClick={() => this.createNew()}>Create</button>
          <Link to="/">Cancel</Link>
        </p>
      </main>
    );
  }
  createNew() {
    this.setState({loading: true})
    this.props.create({
      input: this.input.value,
      transtype: this.transtype.value,
      filter: this.filter.value,
      output: this.output.value,
      params: {}
    })
  }
}

export default Create;
