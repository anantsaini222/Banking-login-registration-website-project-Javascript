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
var sperson = /** @class */ (function () {
    function sperson(department, sname) {
        this.department = department;
        this.sname = sname;
    }
    return sperson;
}());
var calperson = /** @class */ (function (_super) {
    __extends(calperson, _super);
    function calperson(salary, sname, depart) {
        var _this = _super.call(this, depart, sname) || this;
        _this.salary = salary;
        return _this;
    }
    calperson.prototype.calclulatecommission = function () {
        this.incentive = (5 / this.salary) * 100;
        this.salary = this.salary;
        var sum = this.salary + this.incentive;
        console.log("employee name:" + this.sname);
        console.log("employee department:" + this.department);
        console.log("employee salary:" + this.salary);
    };
    return calperson;
}(sperson));
var cperson = /** @class */ (function (_super) {
    __extends(cperson, _super);
    function cperson(salary, sname, depart) {
        var _this = _super.call(this, depart, sname) || this;
        _this.salary = salary;
        return _this;
    }
    cperson.prototype.calclulatecommission = function () {
        this.incentive = (5 / this.salary) * 100;
        this.salary = this.salary;
        var sum = this.salary + this.incentive;
        console.log("employee name:" + this.sname);
        console.log("employee department:" + this.department);
        console.log("employee salary:" + this.salary);
    };
    return cperson;
}(sperson));
var sp = new cperson(1, "Anant", "IT");
var pp = new cperson(2, "Ritik", "CSE");
sp.calclulatecommission();
pp.calclulatecommission();
