/**
 *  import 和 require
 *  import 命令是在编译阶段执行的，在代码运行之前。所以不管import前面是否有console，都会先执行import进来的模块里面的代码
 *  require 是你可以在代码运行时根据需要加装依赖项，类似同步按顺序执行
 */

/**
 * const、let、箭头函数 块级作用域？？？this指向？？？
 * 浏览器端和node端执行结果不一样
 *《javascript高级程序设计》中有说到:
 *  this对象是在运行时基于函数的执行环境绑定的：
 *      在全局函数中，this等于window。
 *      而当函数被作为某个对象调用时，this等于那个对象。
 *      不过，匿名函数具有全局性，因此this对象同常指向window。
 */
var status = "global status";
setTimeout(() => {
    const status = "timeout status";
    const data = {
        status: "object status",
        getStatus() {
            return this.status;
        }
    };
    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
}, 0);

/**
 * language是一个setter，只能修改
 * 如果设置set languages(){} 会覆盖languages:[]
 */
// const config = {
//     languages: [],
//     set language(lang) {
//         return this.languages.push(lang);
//     }
// };
// console.log(config.language);

/**
 * 向构造函数添加属性方法，如要被继承，需使用prototype添加
 * 注意！！！！！prototype 不能用箭头函数
 */
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
const member = new Person("Allen", "Nic");
//Person.getFullName = () => this.firstName + this.lastName;
Person.prototype.getFullName = function() {
    return this.firstName + this.lastName;
};
console.log(member.getFullName());

/**
 * 添加迭代器，设置一个可迭代对象
 */

const player = {
    name: "lebron",
    age: 35,
    *[Symbol.iterator]() {
        yield* Object.values(this);
    }
};
console.log([...player]); // TypeError: player is not iterable

/********** 3/23 end **********/
