const random = require("mini-utils-ts").random;
const timeDifference = require("mini-utils-ts").timeDifference;
import { debounce } from "mini-utils-ts";
console.log(random.integer(1, 9), timeDifference(Date.now(), new Date("2020/3/20 12:00:00").getTime()), debounce);
