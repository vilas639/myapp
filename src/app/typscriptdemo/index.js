"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student1 = void 0;
console.log("hellow world");
var num;
num = 10;
console.log("num");
var numbe1 = 23;
var name1 = "Raju";
var status1 = true;
console.log(name1);
var datan;
console.log(typeof datan);
datan = "Mohan";
console.log(typeof datan);
datan = 10;
console.log(typeof datan);
datan = false;
console.log(typeof datan);
var data1 = { id: 1, name: "raju" };
console.log(data1);
console.log(typeof data1);
var user = {
    id: 1,
    name: "raju",
    salary: 30000,
    address: {
        street: "panvel",
        city: "mum"
    }
};
console.log(user.address.city);
var Student1 = /** @class */ (function () {
    function Student1() {
        this.id1 = 10;
        this.name1 = "raju";
        this.salary1 = 30000;
    }
    Student1.prototype.getstudentinfo = function () {
        console.log(this.id1);
        console.log(this.name1);
        console.log(this.salary1);
    };
    return Student1;
}());
exports.Student1 = Student1;
//call the api
var s = new Student1();
s.getstudentinfo();
console.log(s.getstudentinfo());
