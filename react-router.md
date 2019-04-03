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



### HashRouter

#####	 basename: string

同BrowserRouter

##### getUserConfirmation: func

同BrowserRouter

##### hashType

window.location中哈希类型，有三种

```javascript

    "slash" - Creates hashes like #/ and #/sunshine/lollipops
    "noslash" - Creates hashes like # and #sunshine/lollipops
    "hashbang" - Creates “ajax crawlable” (deprecated by Google) hashes like #!/ and 	#!/sunshine/lollipops

```

##### children: node

同BrowserRouter

### Link

```javascript
import { Link } from 'react-router-dom'
<Link to="/about">About</Link>
```

为你的应用提供导航功能。

Link在页面上会被渲染成链接标签a。

##### to： string

代表当前location,由location的pathname,search和hash属性拼接而成。	

```
<Link to="/courses?sort=name" />
```

##### to: object

当to的类型为对象时可以有以下五个属性

- pathname: 代表当前url指向的路径
- search: 代表查询字符串
- hash: 往URL中添加的哈希值

##### replace: bool

*为true的情况下，点击link时会取代history stack中的当前entry而不是新增一个新的entry。（不太弄明白什么意思待解决）*

##### innerRef: function

##### innerRef: object

##### others

### NavLink

特殊的Link组件，当匹配到当前url时会添加样式属性。

```javascript
import { NavLink } from 'react-router-dom'
```

##### activeName: string

当链接激活时会添加class，默认为active。

```javascript
<NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink>
```

##### activeStyle: object

链接激活时会添加样式

> 样式属性名驼峰，属性值加双引号

```javascript
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  FAQs
</NavLink>
```