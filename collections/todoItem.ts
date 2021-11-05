export class TodoItem {
	public id: number;
	public task: string;
	public complete: boolean = false;

	public constructor(ids: number, tasks: string, completes: boolean = false) {
		this.id = ids;
		this.task = tasks;
		this.complete = completes;
	}

	public printDetails(): void {
		console.log(
			`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`
		);
	}
}
