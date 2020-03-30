/** 1
 * Object.keys 返回可枚举属性
 * defineProperty 的时候设置enumerable
 */
const person = {
    name: "Allen"
};
Object.defineProperty(person, "age", { value: 24, enumerable: true });
console.log(person);
console.log(Object.keys(person));

/** 2
 * delete 返回的是布尔值
 * 通过var、const、let的无法delete
 */
var name = "Allen";
const age = 24;
height = 183; //全局对象

console.log(delete name);
console.log(delete age);
console.log(delete height);

/** 3
 * js运算符优先级
 * 逻辑非(!) > 一元加减法 > 前置递增递减 >  typeof、delete > 加减乘除
 */

const pName = "Allen Nicholas";
console.log(!typeof pName === "object"); //false
console.log(!typeof pName === "string"); //false

/** 4
 * delete 原型对象上的属性后，new 出来的对象将不可用
 *
 */

class Dog {
    constructor(name) {
        this.name = name;
    }
}

Dog.prototype.bark = function() {
    console.log(`woof I am ${this.name}`);
};
const pet = new Dog("Maria");
pet.bark();
delete Dog.prototype.bark;
//pet.bark(); // TypeError: pet.bark is not a function

/** 5
 * += 操作符 会返回值
 *
 */

let num = 1;
const list = [1, 2, 3, 4, 5, 6];
console.log((num += 1));
console.log(list[(num += 1)]);

/** 6
 * 实参和形参
 *
 */

const add = x => x + x;
function myFunc(inum = 2, value = add(inum)) {
    console.log(inum, value);
}
myFunc();
myFunc(3);

console.log(`~~~~~~~~~~~~`, inum);
