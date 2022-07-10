abstract class Department {
	constructor(
		protected name: string,
		protected employees: string[] = [],
		readonly id: string = Math.random() * 2843 + ""
	) {}

	abstract description(): string;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeesInfo() {
		console.log(this.employees.length);
		console.log(this.employees);
	}

	static createEmployees(name: string) {
		console.log(this);
		return [name + "1", name + "2"];
	}

	public static readonly period = 2020;
}

class ITDepartment extends Department {
	constructor(
		employees: Department["employees"],
		protected admins: string[],
		id: Department["id"] = "ITdeptid"
	) {
		super("IT", employees, id);
	}

	get adminsInfo() {
		return this.admins.toString();
	}

	description(this: Department): string {
		return "Mewo!";
	}
}

class HRDept extends Department {
	private static _instance: HRDept = new this(["M<epw"], ["meow"]);
	static get instance() {
		return this._instance;
	}

	description(): string {
		return "HRDept!";
	}

	private constructor(
		employees: Department["employees"],
		protected admins: string[],
		private _lastReports: string[] = [],
		id: Department["id"] = "HRdeptid"
	) {
		super("HR", employees, id);
	}

	public get mostRecentReport() {
		if (!this._lastReports.length) {
			throw new Error("No reports!");
		}

		return this._lastReports.at(-1)!;
	}

	public set mostRecentReport(report: string) {
		if (!report) throw new Error("No emptu report!");

		this.addReports(report);
	}

	public get lastReports(): string[] {
		return this._lastReports;
	}
	public set lastReports(value: string[]) {
		this._lastReports = value;
	}

	addReports(...reports: typeof this._lastReports) {
		this._lastReports.push(...reports);
	}

	removeReports() {
		this._lastReports = [];
	}

	override addEmployee(employee: string): void {
		// if (employee === "Reyhan") this.employees.push(employee);
		if (employee === "Reyhan") super.addEmployee(employee);
	}
}

const itDept = new ITDepartment(["Reyhan", "Auren"], ["Argen"]);
const hr1 = HRDept.instance;
const hr2 = HRDept.instance;
console.log(itDept);
console.log(hr1, hr2);

console.log(hr1 === hr2);
console.log(HRDept.instance === HRDept.instance);
