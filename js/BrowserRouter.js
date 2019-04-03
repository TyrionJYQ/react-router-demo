import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt 
} from 'react-router-dom';

class App extends Component {
  render() {
    const supportsHistory = 'pushState' in window.history
    return (
      <Router basename="/user" forceRefresh={!supportsHistory} >
        <ul>
          <li><Link to="/login">登录</Link></li>
          <li><Link to="/register">注册</Link></li>
        </ul>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Router>
    )
  }
}
function getConfirmation(callback) {
  const allowTransition = window.confirm('跳转');
  callback(allowTransition);
}

const Login = () => <h3>我是登录页面</h3>
const Register = () => <h3>我是注册页面</h3>
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)