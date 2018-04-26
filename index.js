require('babel-core/register');
let _u = require('./modules');

if (_u.type.isClient()) {
    window._u = _u
    
} else {
    global._u = _u
}