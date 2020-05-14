/** replace 正则替换 */
function render(str, data) {
    let reg = null;
    Object.keys(data).forEach((key) => {
        reg = new RegExp(`{{(\\s*)${key}(\\s*)}}`, "g");
        console.log(reg);
        str = str.replace(reg, data[key]);
    });
    return str;
}

let str1 = render(`你的名字：{{name }}, 你的年龄：{{ age }}`, { name: "萤", age: 12 });
console.log(str1);

/** replace 函数替换 */
function renderPro(str, data) {
    return str.replace(/\{\{(.*?)\}\}/g, function (match, key) {
        return data[key.trim()];
    });
}

let str2 = renderPro(`名称：{{ name }}, {{info}}`, { name: "萤火之森🌸", info: "好看👀" });
console.log(str2);

/** 注释 */
// /ab+c/i
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor

// When using the constructor function,
// the normal string escape rules (preceding special characters with \ when included in a string) are necessary.
