export default interface IProduct {
    productName: string,
    title: string,
    description: string,
    price: number,
    cycle: number, // cycle Of Time
    accessible: string,
    fields: [],
    image: string,
    count: {type: Number, default: 0}, // Number Of Projects
    categoryTitle: string,
}