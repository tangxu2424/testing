function fibonacci_origin(num) {
    if (num <= 2) {
        return 1;
    } else {
        return fibonacci_origin(num - 1) + fibonacci_origin(num - 2);
    }
}

console.log(fibonacci_origin(3), "\n");

/**
 * 斐波那契数列尾递归
 */
function fibonacci_tail(n, num1 = 1, num2 = 1) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return num1;
    }
    return fibonacci_tail(n - 1, num2, num1 + num2);
}
console.log(fibonacci_tail(100), "\n");

/**
 * Proxy 缓存代理
 * 不太行啊，还是尾递归厉害
 */

function cacheProxy(fn, cache = new Map()) {
    return new Proxy(fn, {
        apply: function (target, context, args) {
            let name = args.join("");
            if (cache.has(name)) {
                return cache.get(name);
            } else {
                const result = Reflect.apply(target, undefined, args);
                cache.set(name, result);
                return result;
            }
        },
    });
}

const getFibProxy = cacheProxy(fibonacci_origin);
//console.log(getFibProxy(40));
//console.log(getFibProxy(100), "\n");

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
