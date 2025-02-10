export default interface IPayment {
  tittle: string;
  count: number;
  purePrice: number;
  totalPrice: number;
  payment: boolean;
  resnumber: string;
  priodOfTime: number;
  isNewPaymentForAdmin: boolean;
  isNewPaymentForUser: boolean;
}
