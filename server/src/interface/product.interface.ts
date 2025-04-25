export default interface IProduct {
  productName: string;
  title: string;
  description: string;
  price: number;
  cycle: number; // cycle Of Time
  count: number;
  accessible: string;
  fields: [];
  image: string;
  categoryTitle: string;
}
