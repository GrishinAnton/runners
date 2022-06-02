export class DefaultValue {
	id: number;

	constructor(id: number) {
		this.id = id;
	}

	get() {
		return this.id;
	}
}
