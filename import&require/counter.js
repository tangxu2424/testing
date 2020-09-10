let count = 1;
let obj = { count: 1 };
const increament = () => {
  count++;
  obj.count++;
  console.log("基础类型值的copy，不是同一个count", count);
  console.log("引用类型地址值的copy，指向同一个堆内存空间", obj.count);
};
module.exports = {
  count,
  obj,
  increament,
};
