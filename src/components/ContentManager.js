import React, { Component } from 'react';
import Project from '../containers/ProjectContainer'

class ContentManager extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.loadProjects(undefined, () => this.setState({ loading: false }))
    // this.interval = setInterval(this.props.loadJobs, 5000)
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  render() {
    return (
      <main className={`col-4 ${this.state.loading ? 'loading' : ''}`}>
        <h2>Content Manager</h2>
        {this.state.loading && <p>Loading...</p>}
        {!this.state.loading &&
          <ul id="toc">
            {this.props.projects.map(project => (
              <li key={project.path} className="project">
                <span onClick={() => !!project.children ? this.props.toggle(project) : this.props.loadAndToggle(project)}
                  className={'controller ' + (project.expanded ? 'expanded' : 'collapsed')}>[{project.expanded ? '-' : '+'}]</span>
                <span>{project.name}</span>
                {project.expanded &&
                  // <ul>{project.children.map(file => <ListContainer key={file.path} project={project} {...this.props} />)}</ul>
                  <Project project={project} />
                }
              </li>)
            )}
          </ul>
        }
      </main>
    );
  }
}

export default ContentManager
