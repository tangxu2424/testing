/** 1
 * Intl.NumberFormat
 * 只在浏览器端起作用
 */

var number = 123456.789;

// 德语使用逗号作为小数点,使用.作为千位分隔符
console.log(new Intl.NumberFormat("de-DE").format(number));
// → 123.456,789

// 大多数阿拉伯语国家使用阿拉伯语数字
console.log(new Intl.NumberFormat("ar-EG").format(number));
// → ١٢٣٤٥٦٫٧٨٩

// 通过编号系统中的nu扩展键请求, 例如中文十进制数字
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));

function getFine(speed, amount) {
    const formattedSpeed = new Intl.NumberFormat("en-US", {
        style: "unit",
        unit: "mile-per-hour"
    }).format(speed);

    const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);
    return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
}

console.log(getFine(130, 300));
