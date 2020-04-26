/**
 * 所有对象键(不包括 Symbol )都会被存储为字符串
 * 即使你没有给定字符串类型的键
 */

const obj = {
    1: "a",
    2: "b",
    3: "c",
    false: "f",
};

const set = new Set([1, 2, 3, 4, 5]);

console.log(obj.hasOwnProperty(1));
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(false));
console.log(obj.hasOwnProperty("false"));

console.log(set.has(1));
console.log(set.has("1"));
