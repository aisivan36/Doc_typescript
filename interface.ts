interface Vehicle {
	// name: string;
	// year: number;
	// broken: boolean;
	// a function
	summary(): string;
}

const oldCivic = {
	name: "civic",
	year: 2000,
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const printVehicle = (vehicle: Vehicle): void => {
	// console.log(`Name: ${vehicle.name}`);
	// console.log(`Year: ${vehicle.year}`);
	// console.log(`IsBroken: ${vehicle.broken}`);
	console.log(`IsBroken: ${vehicle.summary}`);
};

printVehicle(oldCivic);
