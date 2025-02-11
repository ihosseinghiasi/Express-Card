export default interface IPayment {
  userFullName: string;
  userId: string;
  title: string;
  price: number;
  totalPrice: number;
  payment: boolean;
  resnumber: string;
  isNewPaymentForAdmin: boolean;
  isNewPaymentForUser: boolean;
}
