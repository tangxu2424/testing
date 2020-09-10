/**
 * package.json: "type": "module",
 */
// import * as a from "./a.js";
// import obj_a from "./a.js";

// console.log("======a======");
// console.log(a, obj_a);
// obj_a.score = 10;
// console.log(obj_a);

console.log("======b======");
const b = require("./b");
console.log("b:", b);
b.score = 24;
console.log("b:", b);

const bb = require("./b");
console.log("bb:", bb);
