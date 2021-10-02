var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var students = /** @class */ (function () {
    function students(rollnumber, sName) {
        this.rollnumber = rollnumber;
        this.sName = sName;
    }
    students.prototype.displayData = function () {
        return 'Your name is ' + this.sName;
    };
    return students;
}());
var s = new students(100, "Anant");
console.log(s.displayData());
//inheritance
var diplmastudent = /** @class */ (function (_super) {
    __extends(diplmastudent, _super);
    function diplmastudent(rollnumber, sName, course, marks) {
        var _this = _super.call(this, rollnumber, sName) || this;
        _this.course = course;
        _this.marks = marks;
        return _this;
    }
    diplmastudent.prototype.printData = function () {
        return 'You have scored ' + this.marks + ' in ' + this.course;
    };
    return diplmastudent;
}(students));
var ds = new diplmastudent(22, 'Anant', 'CSE', 98);
console.log(ds.displayData());
console.log(ds.printData());
