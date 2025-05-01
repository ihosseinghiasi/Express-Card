import nodemailer from "nodemailer";

const emailSender = (
  userEmail: string,
  emailSubject: string,
  emailDescription: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "expresscard.eshopping@gmail.com",
      pass: "akcu dhxm kuta lkql",
    },
  });

  const main = async () => {
    const info = await transporter.sendMail({
      from: '"<اکسپرس کارت>" expresscard.eshopping@gmail.com ', // sender address
      to: userEmail, // list of receivers
      subject: emailSubject, // Subject line
      html: emailDescription, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  };

  main().catch(console.error);
};

export default emailSender;
