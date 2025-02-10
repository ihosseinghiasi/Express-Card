export default interface IPayment {
  tittle: string;
  count: number;
  price: number;
  totalPrice: number;
  payment: boolean;
  resnumber: string;
  priodOfTime: number;
  isNewPaymentForAdmin: boolean;
  isNewPaymentForUser: boolean;
}
