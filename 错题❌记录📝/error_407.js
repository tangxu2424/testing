/** 1
 * 函数也是对象
 *
 */

const myMap = new Map();
const myFunc = () => "greeting";

console.log(myMap.set(myFunc, "hello world"));

console.log(myMap.get("greeting")); // undefined
console.log(myMap.get(myFunc));
console.log(myMap.get(() => "greeting")); // undefined

/** 2
 * new Number 返回一个对象
 *
 */

console.log(!!0);
console.log(!!new Number(0));
console.log(!!"");
console.log(!!" ");
console.log(!!new Boolean(false));
console.log(!!undefined);

console.log(new Number(0), new Boolean(false));

/** 3
 * 对象当键名，自动转换为字符串
 *
 */

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

/** 4
 * Object.seal() 密封一个对象，使其属性不可添加、不可删除、不可配置。 （现有属性可以读取可以修改）
 * Object.freeze() 冻结一个对象，什么都不能做。 （现有属性只能读取）
 * 都不能进行 Object.assign()
 */
