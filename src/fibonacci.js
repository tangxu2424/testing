/** for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，
 * 且此时不再需要调用next方法。
 */
function fibonacci_generator(num) {
    function* fibonacci() {
        let [prev, curr] = [0, 1];
        while (true) {
            yield curr;
            [prev, curr] = [curr, prev + curr];
        }
    }
    let arr = [];
    for (let n of fibonacci()) {
        if (0 < num--) {
            arr.push(n);
        } else {
            console.log(arr);
            break;
        }
    }
}

fibonacci_generator(10);

/** 赋予js普通对象，iterator 接口 */

function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);
    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

let jane = { first: "Jane", last: "Doe" };

for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}

// function* objectEntries() {
//     let propKeys = Object.keys(this);
//     for (let propKey of propKeys) {
//         yield [propKey, this[propKey]];
//     }
// }

// let jane = { first: "Jane", last: "Doe" };

// jane[Symbol.iterator] = objectEntries;

// for (let [key, value] of jane) {
//     console.log(`${key}: ${value}`);
// }

/** 扩展运算符（...）、解构赋值、Array.from方法内部调用的都是遍历器接口 **/

function* numbers() {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}

// 扩展运算符
console.log([...numbers()]); // [1, 2]

// Array.from 方法
console.log(Array.from(numbers())); // [1, 2]
