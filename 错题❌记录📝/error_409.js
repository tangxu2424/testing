/**
 * 1
 * 纯函数
 * 若输入参数相同，则拥有会得到相同输出的函数
 *
 * 不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。
 * https://zh-hans.reactjs.org/docs/components-and-props.html
 */

function sum(a, b) {
    return a + b;
}

/**
 * 2
 * 数组解构
 */

const getList = ([x, ...y]) => [x, y];
const getUser = (user) => ({ name: user.name, age: user.age });

const list = [1, 2, 3, 4];
const user = {
    name: "Allen",
    age: 24,
};

console.log(getList(list));
console.log(getUser(user));

/**
 * event loop
 */

const myPromise = Promise.resolve(Promise.resolve("Promise"));
function funcOne() {
    myPromise.then((res) => res).then((res) => console.log(res + 1));
    myPromise.then((res) => res).then((res) => console.log(res + 11));
    setTimeout(() => {
        console.log("Timeout! 1");
    }, 0);
    console.log("last line 1");
}

async function funcTwo() {
    console.log("before await");
    const res = await myPromise;
    console.log("after await 1");
    console.log((await res) + 2);
    setTimeout(() => {
        console.log("Timeout! 2");
    }, 0);
    console.log("last line 2");
}

funcOne();
funcTwo();
