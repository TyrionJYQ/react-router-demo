###	React Router（version>=4.0）

本文绝大部分翻译自 https://reacttraining.com/react-router，翻译水平有限，凑合着看吧。

### install & usage

```javascript
npm install react-router-dom -S
import {BroswserRouter as Router, Link, HashRouter, NavLink} from 'react-router-dom'
```



### API

### <BrowserRouter>

- #####	basename

  基础URL对所有路径生效。在你的服务上如果你的应用APP提供了多个子目录，你就可以使用

  basename,一个正确格式的basename以斜线/开始，结束时没有斜线。

  ```javascript
  <BrowserRouter basename="/calendar" />
  <Link to="/today"/> // renders <a href="/calendar/today">
  ```

- ##### getUserConfirmation: func

  可以用来确认跳转，默认使用window.confirm

  ```javascript
  function getConfirmation(message, callback) {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }

  <BrowserRouter getUserConfirmation={getConfirmation} />;
  ```


- #####	forceRefresh: bool

  值为true，当location发生变化时，会强制整个页面刷新，在浏览器不支持HTML5 history pushState时使用。

  ```javascript
  const supportsHistory = 'pushState' in window.history
  <BrowserRouter forceRefresh={!supportsHistory} />
  ```

- ##### keyLength: number

  location.key的值，默认为6

  ```javascript
  <BrowserRouter keyLength={12} />
  ```


- ##### children: node

  单个child会被渲染成node节点。