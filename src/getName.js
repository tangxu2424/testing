/**
 * 浏览器和node执行的结果是不同的
 * node环境里，var作用于函数作用域顶部(浏览器是window)，不写var则是挂载在global上
 * (function(exports, require, module, filename, dirname)){
    //你执行的代码
    }
 */
function Foo() {
    global.getName = function() {
        console.log(1);
    };
    console.log(this === global);
    return this;
}
Foo.getName = function() {
    console.log(2);
};
Foo.prototype.getName = function() {
    console.log(3);
};
getName = function() {
    console.log(4);
};
function getName() {
    console.log(5);
}

//请写出以下输出结果：
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // new (Foo.getName)()
new Foo().getName(); // (new Foo()).getName()
new new Foo().getName();
