/** 1
 * String.raw 函数用来获取一个模板字符串的原始字符串，忽略了转义字符\n \t
 */

console.log(`hello\nworld`); //会换行
console.log(String.raw`hello\nworld`); //hello\nworld

//有一个反斜杠问题
const path = `c:\Documents\Projects\index.html`;
console.log(String.raw`${path}`); //c:DocumentsProjectsindex.html
console.log(String.raw`c:\Documents\Projects\index.html`); //c:\Documents\Projects\index.html

/** 2
 * 默认情况下，如果不给函数传参，参数值为undefined
 */

function sayHi(name) {
    return `hi there, ${name}`;
}
console.log(sayHi()); //hi there, undefined

/** 3
 * 每个Symbol都是完全唯一的，传递给Symbol的参数只是描述，值并不依赖它
 */

console.log(Number(1) === Number(1));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("hi") === Symbol("hi")); //false

/** 4
 * reducer函数后面的可选参数initialValue 是reducer函数第一个参数的累计值，如果没有设置，则默认为数组中的第一个值
 */
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
//1 2
//undefined 3
//undefined 4

/** 5
 * js运算符优先级：. [] ()
 */
const colorConfig = {
    red: true,
    green: true,
    yellow: false
};
const colors = ["pink", "red", "blue"];
//console.log(colorConfig.colors[1]); //TypeError: Cannot read property '1' of undefined

/** 6
 * map键名
 */
const myMap = new Map();
const myString = "wtf";
const myFunc = () => "greeting";
const myArr = [1, 2, 3];
const myObj = {};

myMap.set(myString, 123);
myMap.set(myFunc, "func");
myMap.set(myArr, "arr");
myMap.set(myObj, "obj");

console.log(myMap);

console.log(myMap.get(myString), myMap.get("wtf"));
console.log(
    myMap.get(myFunc),
    myMap.get(() => "greeting")
);
console.log(myMap.get(myArr), myMap.get([1, 2, 3]));

/** 7
 * parseInt 解析第一个参数的，如果是字符串则逐字解析，遇到不合法的数字字符，则停止
 * 如果是数字则运算后向下取整
 */

console.log(parseInt("7*6", 10));
console.log(parseInt(3 * 1.3, 10));

/** 8
 * use strict 可以确保不会意外声明全局变量
 */
function getAge() {
    "use strict";
    age = 24;
    console.log(age);
}
getAge(); //ReferenceError: age is not defined
