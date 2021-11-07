let val: unknown = 22;
val = "String of Value";
val = new Array();
if (val instanceof Array) {
	val.push(38);
}

console.log(val);
