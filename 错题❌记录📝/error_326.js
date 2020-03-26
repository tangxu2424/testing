/** !!!! 0 !!!!
 * ReferenceError
 * let 的变量提升, 和 var不同的是初始化不会被提升，会形成暂时死区 不允许被访问
 * 变量赋值三个步骤：
 * 1、创建变量，在内存中开辟空间
 * 2、初始化变量，初始化为 undefined
 * 3、真正赋值
 */
let name = "Allen";
// console.log(age); //ReferenceError: age is not defined
{
    console.log(name); // ReferenceError: name is not defined
    const name = "Iverson";
}

/** 1
 * 一元操作符 ++
 * increaseNumber 先返回 num 再累加
 */

let num = 10;
const increasNumber = () => num++;
const increasPassNumber = number => number++;

const num1 = increasNumber();
const num2 = increasPassNumber(num1);
console.log(num1, num2); // 10 10
console.log(num);

/** 2
 * continue 是跳过这次循环的意思
 */

for (let index = 1; index < 5; index++) {
    if (index === 3) continue;
    console.log(index);
}

/** 3
 * CommonJs模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
    CommonJs模块是运行时加载，ES6模块是编译时输出接口。
 */

// counter.js
//let counter = 10
//export default counter

//index.js
//import myCounter from "counter"
// myCounter += 1 // error

/** 引入的模块是只读的，不能修改引入的模块 */
