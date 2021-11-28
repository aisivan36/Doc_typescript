function first() {
	console.log("First(): factory eveluated");
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		console.log("First(): called");
	};
}

function second() {
	console.log("Second(): factory evaluated");
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		console.log("second(): called");
	};
}

class ExampleClass {
	@first()
	@second()
	method() {}
}
