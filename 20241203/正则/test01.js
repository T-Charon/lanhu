//1. 请定义一个正则表达式，可以从包含16进制颜色值字符串中提取出合法的颜色值。
var string = "#ffbbad #Fc01DF #FFF #ffE"; // => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]
var reg = /#[a-zA-Z0-9]{6}|#[a-zA-Z0-9]{3}/g


//2. 请定义一个正则表达式，可以从包含24小时制时间字符串中提取出合法的时间。
var string1 = "12:34 08:30 23:59 30:88"; // => ['12:34', '08:30', '23:59']
var reg1 =/[0-1][0-9]:[0-5][0-9] |[2][0-3]:[0-5][0-9]/g 
console.log(string.match(reg));
console.log(string1.match(reg1));

//
var htmlStr = "<div>123</div><div>789</div><h1>123</h1>"

// m修饰符表示开启行匹配
// ^ 首位 $ 末尾

// 金额的千分位表示法 12345678900 ==》 12.345.678.900
var a = "12345678900"
var reg9 =/(?=(\d{3})+$)/g
console.log(a)
console.log(a.replace(reg9,'.'))