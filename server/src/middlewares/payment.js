import express from "express";
import morgan from "morgan";
import ZarinpalPayment from "zarinpal-pay";

const app = express();
const port = 3000;

const zarinpal = new ZarinpalPayment("eaa46b01-819e-42ef-8a67-ba2bb7f69a32", {
  isToman: true, // تغییر واحد درگاه به تومان
  isSandbox: true, // فعال سازی درگاه آزمایشی
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ایجاد تراکنش
app.post("/create", async (req, res) => {
  const createTransaction = await zarinpal.create({
    amount: 10000, // باید بیشتر از 10.000 تومان باشد
    callback_url: "http://localhost:3000/callback",
    mobile: "09339993377", // اختیاری
    email: "my@site.com", // اختیاری
    description: "توضیحات تراکنش", // اختیاری
    order_id: "3010", // اختیاری
  });

  return res.json({
    ...createTransaction.data,
  });
});

// اعتبارسنجی تراکنش
app.get("/callback", async (req, res) => {
  const { Authority, Status } = req.query;
  if (Status == "NOK") {
    return res.json({ message: "پرداخت ناموفق" });
  }
  const verifyTransaction = await zarinpal.verify({
    authority: Authority,
    amount: 10000, // باید مقدارش دقیقا با مقدار زمان ایجاد تراکنش یکسان باشد
  });
  if (verifyTransaction.data.code == 100) {
    return res.json({ message: "پرداخت با موفقیت انجام شد" });
  } else if (verifyTransaction.data.code == 101) {
    return res.json({ message: "این فاکتور قبلا پرداخت شده است" });
  }
  return res.json({ message: "پرداخت ناموفق" });
});

app.listen(port, () => console.log(`http://localhost:${port}/doc`));
