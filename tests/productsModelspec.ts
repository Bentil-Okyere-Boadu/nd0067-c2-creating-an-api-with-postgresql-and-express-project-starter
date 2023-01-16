import { Products } from "../src/models/product_model";

const products = new Products()

describe('Product model tests', () => {
    it('Checks if index is defined', () => {
        expect(products.index()).toBeDefined()
    })

    it('Creates a new product', () => {
        const data = {
            name: 'Strawberry lip gloss',
            price: 10,
            category: 'Lip gloss'
        }
        expect(products.create(data))
    })
})