import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
      </div>
    )
  }
}

class About extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>About Page</h2>
      </div>
    )
  }
}

class Topics extends Component {
  render() {
    // 在class中使用match
    const {match} = this.props
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
          <li><Link to={`${match.url}/components`}>Components</Link></li>
          <li><Link to={`${match.url}/props-v-state`}>props v .state</Link></li>
        </ul>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    )
  }
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        <hr />
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/topics" component={Topics}></Route> 
      </Router>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)