import classValidator from "../utils/class-validator";

const { Required, MustBePositive, validate } = classValidator();

export enum ProjectStatus {
	ACTIVE,
	FINISHED
}

export default class Project {
	@Required
	public title: string;

	@Required
	public description: string;

	@Required
	@MustBePositive
	public people: number;

	get persons(): string {
		return this.people > 2
			? `${this.people} People`
			: `${this.people} Person`;
	}

	public id: number | string = Math.random() * 37864;

	constructor(
		title: string,
		description: string,
		people: number,
		public status: ProjectStatus = ProjectStatus.ACTIVE
	) {
		this.title = title;
		this.description = description;
		this.people = people;

		const validationRes = validate(this);

		if (!validationRes.required) {
			throw new Error("Field cannot be empty!");
		}

		if (!validationRes.mustbepositive) {
			throw new Error("Field must be a positive number!");
		}
	}
}
