interface ValidationOptions {
	required?: boolean;
	min?: number;
}

const validate = <T>(value: T, opts: ValidationOptions) => {
	let isValid = true;

	if (opts.required) {
		isValid = !!value;
	}

	if (opts.min !== undefined) {
		if (typeof value === "number" && value < opts.min) {
			isValid = false;
		} else if (
			typeof value === "object" &&
            "length" in value &&
			// CMT For some reason using the length in on the line before doesn't type guard T????
			(value as typeof value & { length: number }).length < opts.min
		) {
			isValid = false;
		}
	}

	return isValid;
};

export default validate;

console.log(validate("", { required: false }));
console.log(validate(8, { required: true, min: 7 }));
console.log(validate([1,2,3], { required: true, min: 4 }));
