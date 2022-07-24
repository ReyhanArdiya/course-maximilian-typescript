import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export default class Product {
	@IsNotEmpty()
	public title: string;

	@IsNumber()
	@IsPositive()
	public price: number;

	constructor(title: string, price: number) {
		this.title = title;
		this.price = price;
	}

	get information() {
		return [this.title, `$${this.price}`];
	}
}
