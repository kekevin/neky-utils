# neky-utils
Encapsulation of common tool classes。

常用工具类封装。

[Wiki](https://github.com/suguangwen/neky-utils/wiki)

# 安装//Install

```npm
npm install neky-utils --save
```

### ES6

```JavaScript
import _u from 'neky-utils'

import type from 'neky-utils/type'
import {type} from 'neky-utils'
// type Use alone
// 单独使用type类
```

### CommonJS

```JavaScript
var _u =  require('neky-utils');

var _type =  require('neky-utils/type');
// _type Use alone
// 单独使用type类
```

### 直接引用//Direct include

```JavaScript
<script src="../node_modules/neky-utils/dist/index.js"></script>
// _u Global injection
// _u函数将会全局注入
// window._u
```

# 使用方法//Usage

```JavaScript
    import _u from 'neky-utils'
    _u.type.isNumber(111)
    // true
    _u.type.isNumber('aaa')
    // false
```


# License

MIT