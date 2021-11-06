class GenericNum<Number_Type> {
	zeroValue: Number_Type;
	add: (x: Number_Type, y: Number_Type) => Number_Type;

	constructor(zeroValue: Number_Type) {
		this.zeroValue = zeroValue;
	}
}

let myGenericNum = new GenericNum<number>(7);
// myGenericNum.zeroValue = 0;
myGenericNum.add = function (x, y) {
	return x + y;
};

// let stringNumeric = new GenericNum<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) {
// 	return x + y;
// };

// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
console.log(myGenericNum.add(myGenericNum.zeroValue, 8));
