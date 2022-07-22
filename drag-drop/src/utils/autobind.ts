const AutoBind = (_t: unknown, _p: unknown, d: PropertyDescriptor) => {
	return {
		get() {
			d.value.bind(this);
		},
	};
};

export default AutoBind;

