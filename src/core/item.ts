export default class ItemModel{
    #id: string
    #name: string
    #category: string
    #link: string
    #thumbnail: string
    #price: number
    #oldPrice?: number

    constructor(id: string, name: string, category: string, link: string, thumbnail: string, price: number, oldPrice: number = 0) {
        this.#id = id
        this.#name = name
        this.#category = category
        this.#link = link
        this.#thumbnail = thumbnail
        this.#price = price
        this.#oldPrice = oldPrice
    }

    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get category() {
        return this.#category
    }
    get link() {
        return this.#link
    }
    get thumbnail() {
        return this.#thumbnail
    }
    get price() {
        return this.#price
    }
    get oldPrice() {
        return this.#oldPrice
    }
    
}