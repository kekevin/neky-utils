require('babel-core/register');
let neky_utils = require('./modules');
console.log(1)

let f = function(){}//1
let s = 'aaaa'//2
let m = 1111//3
let sm = '1111'//4
let ar = []//5
let j = {}//6
let aj = [{}]//7
let aj2 = [[{}]]//8
let js = {//9
    a: 'aaa'
}

let jf = {//10
    a: function () {

    }
}
let ja = {//11
    a: []
}
let nu = null//12
let nus = 'null'//13
let un = undefined//14
let uns = 'undefined'//15
let t = true//16
let fs = false//17
let date = new Date()//18
let dates = '1993-08-08'//19
let sk = ''//20

let data = [f,s,m,sm,ar,j,aj,aj2,js,jf,ja,nu,nus,un,uns,t,fs,date,dates,sk]
for (let i = 1; i <= data.length; i++) {
    let a = neky_utils.type.isPlainObject(data[i -1])
    console.log(i + ':' + a)
}
