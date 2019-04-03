import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt,
  NavLink
} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      < Router >
        <ul>
          <li>
            <NavLink to="/login" activeClassName="selected">登录</NavLink>
            {/* <Link to="/login">登录</Link> */}
          </li>
          <li>
            {/* <Link to={{
              pathname: "/register",
              search: "?name=name",
              hash: "#the-hash",
              state: { fromDashboard: true }
            }}>注册</Link> */}
            <NavLink to="/register" activeStyle={{
              fontWeight: "bold",
              color: "red"}}>注册</NavLink>
          </li>
        </ul>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Router >
    )

  }
}
const Login = () => <h1>登录</h1>
const Register = () => <h1>注册</h1>


ReactDOM.render(
  <App />,
  document.getElementById('root')
)