class Vehicle {
	constructor(public color: string) {}
	drive(): void {
		console.log("Test Drive");
	}
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
vehicle.drive();
