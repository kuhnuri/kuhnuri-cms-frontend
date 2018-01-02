import React, { Component } from 'react';
import Project from '../containers/ProjectContainer'

class ContentManager extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.loadProjects(undefined,
      () => this.props.match.params.id
        ? this.props.loadAllAndToggle(this.props.match.params.id,
          () => this.setState({ loading: false }))
        : this.setState({ loading: false })
    )
  }

  render() {
    return (
      <nav className={`col-4 ${this.state.loading ? 'loading' : ''}`}>
        <h2>Content Manager</h2>
        {this.state.loading && <p>Loading...</p>}
        {!this.state.loading &&
          <ul id="toc">
            {this.props.projects.map(project => (
              <li key={project.path} className="project">
                <span onClick={() => !!project.children ? this.props.toggle(project) : this.props.loadAndToggle(project)}
                  className={'controller ' + (project.expanded ? 'expanded' : 'collapsed')}>[{project.expanded ? '-' : '+'}]</span>
                <span>{project.name}</span>
                {project.expanded && <Project project={project} />}
              </li>)
            )}
          </ul>
        }
      </nav>
    );
  }
}

export default ContentManager
