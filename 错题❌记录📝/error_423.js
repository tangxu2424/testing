/** 1
 *  箭头函数不会创建自己的this（重要！！深入理解！！）
 *  箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this。
 *  箭头函数没有自己的this，它会捕获自己在定义时（注意，是定义时，不是调用时）所处的外层执行环境的this，并继承这个this值。
 *  所以，箭头函数中this的指向在它被定义的时候就已经确定了，之后永远不会改变。
 *  https://juejin.im/post/5c979300e51d456f49110bf0
 */

var id = "GLOBAL";
var obj = {
    id: "OBJ",
    a: function () {
        console.log(this.id);
    },
    b: () => {
        console.log(this.id);
    },
};

obj.a(); // 'OBJ'
obj.b(); // 'GLOBAL'

const status = 1;
setTimeout(() => {
    const status = 2;
    const data = {
        status: 3,
        getStatus() {
            return this.status;
        },
    };
    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
}, 0);
