/**
 * (a===1&&a===2&&a===3) 为 true
 * 基础数据类型先valueOf 再toString
 * 否则比如是对象什么的就直接toString
 */

//前导
class Person {
    constructor(name) {
        this.name = name;
    }

    // 复写 valueOf 方法 @change-1
    valueOf() {
        return this.name;
    }
    // 复写 toString 方法 @change-2
    toString() {
        return `Bye ${this.name}`;
    }
}

const best = new Person({ name: "Kobe" }); //@change-2
console.log(best); // log: Person {name: "Kobe"}
console.log(best.toString()); // log: [object Object]
console.log(best.valueOf()); // log: Person {name: "Kobe"}
console.log(best + "GiGi"); // log: [object Object]GiGi

/** 正题 */

/** 1 */
class A {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value++;
    }
    // toString() {
    //     return this.value++;
    // }
}
let a = new A(1);
console.log(a == 1 && a == 2 && a == 3);

/** 2 */
class A2 extends Array {
    join() {
        return this.shift();
    }
}
let a2 = new A2(1, 2, 3);
console.log(a2 == 1 && a2 == 2 && a2 == 3);

/** 3 */
let window = global;
window.value = 1;
Object.defineProperty(window, "a3", {
    get() {
        return value++;
    }
});
console.log(a3 === 1 && a3 === 2 && a3 === 3);

// 设置一个函数输出一下的值
// f(1) = 1;
// f(1)(2) = 2;
// f(1)(2)(3) = 6;

function add(x) {
    var sum = x;
    var tmp = function(y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function() {
        return sum;
    };
    return tmp;
}
console.log(add(1)(2)(3)); //6
console.log(add(1)(2)(3)(4)); //10
