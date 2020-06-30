"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department is ' + this.name);
    };
    return Department;
}());
var department = new Department('Scripting');
console.log(department); // Department {name: "Scripting"}
console.log(department.describe()); // Department is Scripting
var accountingCopy = { name: 'Mayur', describe: department.describe };
accountingCopy.describe(); // Department is Mayur
/**/ //////////////////////////////////////////////////////////////////////////////////// */
/**/ //////////////////////////////////////////////////////////////////////////////////// */
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h, s) {
        this.width = w;
        this.height = h;
        this.surface = s;
    }
    Rectangle.prototype.areaOfRectangle = function () {
        var area = this.width * this.height;
        console.log(area);
    };
    Rectangle.prototype.sideOfRect = function () {
        var sideAddition = this.width + this.height;
        console.log('Sides are ' + sideAddition);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(20, 30, 'plane');
rectangle.areaOfRectangle();
rectangle.sideOfRect();
var inputValW;
var inputValH;
var inputValS;
function getInputValues() {
    inputValW = Number(document.getElementById("myInputW").value);
    inputValH = Number(document.getElementById("myInputH").value);
    inputValS = (document.getElementById("myInputS").value);
    console.log(inputValW, inputValH, inputValS);
}
/**/ //////////////////////////////////////////////////////////////////////////////////// */
var Foo = /** @class */ (function () {
    function NamedFoo(nm) {
        this.name = nm;
    }
    NamedFoo.prototype.whoIsThere = function () {
        return this.name;
    };
    return NamedFoo;
}());
var bar = new Foo('aaa');
bar.whoIsThere(); // "NamedFoo"
