import { Request, Response } from "express";
import zarinPayment from "zarinpal-pay";
export default class Payment {
  configZarrinPal() {
    const zarinpal = new zarinPayment("6cded376-3063-11e9-a98e-005056a205be", {
      isToman: true,
      isSandbox: true,
    });
    return zarinpal;
  }

  async pay(req: Request, res: Response) {
    try {
      const userFullName = localStorage.getItem("authenticatedFullName");
      const userId = localStorage.getItem("userAuthenticatedId");
      const zarinpal = new zarinPayment(
        "6cded376-3063-11e9-a98e-005056a205be",
        {
          isToman: true,
          isSandbox: true,
        }
      );

      localStorage.setItem("totalPrice", req.body.data.totalPrice);

      const createTransaction = await zarinpal.create({
        amount: req.body.data.totalPrice,
        callback_url: "http://localhost:4000/adminPanel/payment/callback",
        description: "خرید محصول",
      });

      return { ...createTransaction.data };
    } catch (err) {
      throw new Error(err as string);
    }
  }

  async callback(req: Request, res: Response) {
    const zarinpal = new zarinPayment("6cded376-3063-11e9-a98e-005056a205be", {
      isToman: true,
      isSandbox: true,
    });
    const totalPrice = localStorage.getItem("totalPrice");

    const { Authority, Status } = req.query;
    console.log(Status);
    // console.log(Authority, typeof Authority);
    if (Status == "NOK") {
      return res.json({ message: "پرداخت ناموفق" });
    }

    // const verifyTransaction = await zarinpal.verify({
    // authority: Authority,
    // amount: totalPrice,
    // });
    // if (verifyTransaction.data.code == 100) {
    //   res.json({ message: "پرداخت با موفقیت انجام شد" });
    // } else if (verifyTransaction.data.code == 101) {
    //   res.json({ message: "این فاکتور قبلا پرداخت شده است" });
    // }
    // res.json({ message: "پرداخت ناموفق" });
  }
}
