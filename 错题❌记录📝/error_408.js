/** 1
 * 值传递 和 引用传递
 *
 */
const person = {
    name: "Allen",
    age: 28,
};
const right = true;
const changeAge = (x = { ...person }) => (x.age += 1);

const changeAgeAndName = (y, x = { ...person }) => {
    x.age += 1;
    x.name = "Nic";
    y = !y;
    console.log(y, x.age);
};

changeAge(person);
changeAgeAndName(right);
console.log(person, right);

/** 2
 * 事件传播的三个阶段
 * 捕获 > 目标 > 冒泡
 *
 * for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
 */

/** 3
 * 箭头函数→垃圾回收♻️
 *
 */

let config = {
    alert: setInterval(function () {
        console.log("Alert!", this.age);
    }, 1000),
    age: 1,
};
config = null;
