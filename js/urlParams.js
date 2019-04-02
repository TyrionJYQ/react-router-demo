import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
class Child extends Component {
  render() {
    let {match} = this.props;
    return <div>{match.params.id}</div>
    
  }
}

const Article = ({match}) => <h3>{match.param.id}</h3>
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/home'>javascript</Link></li>
            <li><Link to='/css'>css</Link></li>
            <li><Link to='/html5'>html5</Link></li>
            <li><Link to='/articles/js'>js</Link></li>
            <li><Link to='/articles/h5'>h5</Link></li>
          </ul>
          <Route path="/:id" component={Child} ></Route>
          <Route path="/order/:id(js)" component={Article}></Route>
        </div>
      </Router>

    )

  }
}


ReactDOM.render(<App />, document.getElementById('root'))