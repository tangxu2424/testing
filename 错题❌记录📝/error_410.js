/** 1
 * Symbol 类型是不可枚举的
 * 在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
 */

const info = {
    [Symbol("a")]: "b",
};
console.log(info);
console.log(Object.keys(info)); // []

/** 2
 * 设置函数入参默认值是值传递
 *
 */

function compareNumber(person1, person2 = person) {
    if (person1 === person2) {
        console.log("they are same");
    } else {
        console.log("not the same");
    }
}

const person = {
    name: "Allen",
};

compareNumber(person); // they are same

/** 3
 * 对象的引用
 */

let player = { name: "Allen" };
const members = [player];
const coach = player;
player = null;

console.log(coach, members);
