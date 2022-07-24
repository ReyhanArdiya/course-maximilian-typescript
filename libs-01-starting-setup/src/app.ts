// import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import "reflect-metadata";
import Product from "./product.model";

// const products = [{title: "Carpet", price: 29.99},{title: "Book", price: 10.99},]
// const p1 = new Product("Book", 12.99)

// const instancedProducts = products.map(p => new Product(p.title, p.price))
// const instancedProducts = plainToInstance(Product, products);

// instancedProducts.forEach(p => console.log(p.information))

// console.log(instancedProducts)

(async () => {
    try {
        const newProd = await validate(new Product("", -239))

        console.log(newProd)
    } catch (err) {
        if (err instanceof Array && err[0] instanceof ValidationError) {
            console.log(err[0])
        }
    }
})()
