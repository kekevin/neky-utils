
class type {

    //获取对象类型
    getObjectType (value) {
        return Object.prototype.toString.call(value)
    }

    //是否字符串
    isString(value) {
        return typeof value == 'string' || (typeof value == 'object' && value != null && !Array.isArray(value) && this.getObjectType(value) == '[object String]')
    }

    //是否数字
    isNumber (value) { 
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    //是否boolean
    isBoolean (value) {
        return value === true || value === false || this.getObjectType(value) === '[object Boolean]'
    }

    //是否为null
    isNull (value) { 
        return value === null
    }

    //是否undefined
    isUndefined (value) { 
        return value === undefined
    }

    //是否对象
    isObject (o) {
        return typeof value != null && (typeof type == 'object' || typeof type == 'function')
    }

    //是否函数
    isFunction (value) { 
        if (!this.isObject(value)) {
            return false
        }
        const tag = this.getObjectType(value)
        return tag == '[object Function]' || tag == '[object AsyncFunction]' || tag == '[object GeneratorFunction]' || tag == '[object Proxy]'
    }

    //是否数组
    isArray (value) { 
        return (typeof Array.isArray === 'function' && Array.isArray(value)) || this.getObjectType(value) === '[object Array]'
    }

    //是否时间
    isDate (value) {
        return this.getObjectType(value) === '[object Date]'
    }

    //是否正则
    isRegExp (value) {
        return this.getObjectType(value) === '[object RegExp]'
    }

    //是否错误对象
    isError(value) {
        const tag = this.getObjectType(value)
        return tag == '[object Error]' || tag == '[object DOMException]' || value instanceof Error
    }

    //是否为空
    isEmpty (value) {
        return value == null
    }

    //是否为空对象
    isEmptyObject (value) {
        if (this.isBoolean(value) || this.isNumber(value) || this.isDate(value)) return false
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                return false
            }
        }
        return true
    }

    //是否为简单对象,常用于判断是否为JSON
    isPlainObject (value) {
        if (this.isNull(value) || this.isUndefined(value)) return false
        return this.isObject(value) && value.__proto__ === Object.prototype
    }
    
    //是否false
    isFalse (value) {
        if (value == '' || value == undefined || value == null || value == 'null' || value == 'undefined' || value == 0 || value == false || value == NaN) return true
        return false
    }

    //是否true
    isTrue (value) {
        return !this.isFalse(value)
    }

    //是否PC
    isPc () {
        let u = navigator.userAgent;
        let Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (u.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    //是否IOS
    isIos () {
        let u = navigator.userAgent;
        return u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1
    }

    //是否安卓
    isAndroid () {
        let u = navigator.userAgent;
        return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    }

    //是否微信浏览器
    isWeChat () {
        let u = navigator.userAgent;
        return u.indexOf("MicroMessenger") > -1
    }

    //是否Safari浏览器
    isSafari () {
        let u = navigator.userAgent;
        return u.indexOf("Safari") > -1 && u.indexOf("Chrome") == -1
    }

    //是否Chrome浏览器
    isChrome () {
        let u = navigator.userAgent;
        return u.indexOf("Chrome") > -1 && u.indexOf("Safari") > -1
    }

    //是否Ie浏览器
    isIe () {
        let u = navigator.userAgent;
        return u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1
    }
    //是否Ie11浏览器
    isIe11 () {
        let u = navigator.userAgent;
        return u.indexOf('Trident') > -1 && u.indexOf("rv:11.0") > -1
    }

    //是否是客户端
    isClient(){
        return typeof window !== 'undefined'
    }

    //是否手机号
    isPhone (value) {
        return /^1[3|4|5|6|7|8][0-9]{9}$/.test(value);
    }

    //是否座机
    isTel (value) {
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(value);
    }

    //是否邮政编码
    isPostal (value) {
        return /[1-9]\d{5}(?!\d)/.test(value)
    }

    //是否邮箱
    isEmail (value) {
        return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value);
    }

    //是否QQ号
    isQQ (value) {
        return /^[1-9][0-9]{4,10}$/.test(value);
    }
    
    //是否网址
    isUrl (value) {
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value)
    }

    //是否IP
    isIP (value) {
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(value);
    }

    //是否英文
    isEnglish (value) {
        return /^[a-zA-Z]+$/.test(value);
    }

    //是否中文
    isChinese (value) {
        return /^[\u4E00-\u9FA5]+$/.test(value);
    }

    //是否小写
    isLower (value) {
        return /^[a-z]+$/.test(value);
    }

    //是否大写
    isUpper (value) {
        return /^[A-Z]+$/.test(value);
    }

    // 严格的身份证校验
    isCardID(sId) {
        if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
            console.log('输入的身份证长度或格式错误')
            return false
        }
        //身份证城市
        let aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
        if(!aCity[parseInt(sId.substr(0,2))]) { 
            console.log('身份证地区非法')
            return false
        }

        // 出生日期验证
        let sBirthday=(sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2))).replace(/-/g,"/"),
            d = new Date(sBirthday)
        if(sBirthday != (d.getFullYear()+"/"+ (d.getMonth()+1) + "/" + d.getDate())) {
            console.log('身份证上的出生日期非法')
            return false
        }

        // 身份证号码校验
        let sum = 0,
            weights =  [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
            codes = "10X98765432"
        for (let i = 0; i < sId.length - 1; i++) {
            sum += sId[i] * weights[i];
        }
        let last = codes[sum % 11]; //计算出来的最后一位身份证号码
        if (sId[sId.length-1] != last) { 
            console.log('输入的身份证号非法')
            return false
        }
        
        return true
    }

}

export default new type()