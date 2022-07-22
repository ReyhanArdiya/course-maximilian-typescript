const classValidator = () => {
	const reqArr: Parameters<PropertyDecorator>[1][] = [];
	const posnumsArr: Parameters<PropertyDecorator>[1][] = [];

	const Required: PropertyDecorator = (_target, name) => {
		reqArr.push(name);
	};

	const MustBePositive: PropertyDecorator = (_target, name) => {
		posnumsArr.push(name);
	};

	const validate = (obj: object) => ({
		required: reqArr.every(k => !!obj[k as keyof typeof obj]),
		mustbepositive: posnumsArr.every(
			k => (obj[k as keyof typeof obj] as number) >= 0
		)
	});

	return {
		Required,
		MustBePositive,
		validate
	};
};

export default classValidator;
