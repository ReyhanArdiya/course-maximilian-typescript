"use strict";
class Department {
    name;
    employees;
    id;
    constructor(name, employees = [], id = Math.random() * 2843 + "") {
        this.name = name;
        this.employees = employees;
        this.id = id;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployees(name) {
        console.log(this);
        return [name + "1", name + "2"];
    }
    static period = 2020;
}
class ITDepartment extends Department {
    admins;
    constructor(employees, admins, id = "ITdeptid") {
        super("IT", employees, id);
        this.admins = admins;
    }
    get adminsInfo() {
        return this.admins.toString();
    }
    description() {
        return "Mewo!";
    }
}
class HRDept extends Department {
    admins;
    _lastReports;
    static _instance = new this(["M<epw"], ["meow"]);
    static get instance() {
        return this._instance;
    }
    description() {
        return "HRDept!";
    }
    constructor(employees, admins, _lastReports = [], id = "HRdeptid") {
        super("HR", employees, id);
        this.admins = admins;
        this._lastReports = _lastReports;
    }
    get mostRecentReport() {
        if (!this._lastReports.length) {
            throw new Error("No reports!");
        }
        return this._lastReports.at(-1);
    }
    set mostRecentReport(report) {
        if (!report)
            throw new Error("No emptu report!");
        this.addReports(report);
    }
    get lastReports() {
        return this._lastReports;
    }
    set lastReports(value) {
        this._lastReports = value;
    }
    addReports(...reports) {
        this._lastReports.push(...reports);
    }
    removeReports() {
        this._lastReports = [];
    }
    addEmployee(employee) {
        if (employee === "Reyhan")
            super.addEmployee(employee);
    }
}
const itDept = new ITDepartment(["Reyhan", "Auren"], ["Argen"]);
const hr1 = HRDept.instance;
const hr2 = HRDept.instance;
console.log(itDept);
console.log(hr1, hr2);
console.log(hr1 === hr2);
console.log(HRDept.instance === HRDept.instance);
//# sourceMappingURL=app.js.map