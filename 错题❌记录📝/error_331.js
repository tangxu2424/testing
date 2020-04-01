/** 1
 * generator 函数
 */
const team = [
    { name: "Team 1", members: ["Paul", "Lisa"] },
    { name: "Team 2", members: ["Laura", "Tim"] }
];

function* getMembers(members) {
    for (let i = 0; i < members.length; i++) {
        yield members[i];
    }
}

function* getTeam(teams) {
    for (let i = 0; i < teams.length; i++) {
        yield* getMembers(teams[i].members);
    }
}

const obj = getTeam(team);
console.log(obj.next().value, obj.next().done);
for (const value of obj) {
    console.log(value);
}

/** 2
 * 变量传值赋值 和 引用赋值
 */

const person = {
    name: "Lydia",
    age: 21
};
let city = person.city;
city = "Amsterdam";

let p = person;
person.city = "cleveland";
console.log(person);
