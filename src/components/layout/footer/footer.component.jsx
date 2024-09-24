import "../../../css/shop/mainPage.css";

import { FooterWrapper } from "./footer.styles";

const Footer = () => {
  const FooterContactItems = [
    {
      text: "09192300017",
      iconSrc: "/uploads/icons/phone.svg",
      id: 0,
    },
    {
      text: "expresscard.eshopping@gmail.com",
      iconSrc: "/uploads/icons/at-sign.svg",
      id: 1,
    },
    {
      text: "ایران - تهران",
      iconSrc: "/uploads/icons/map-pin.svg",
      id: 2,
    },
  ];

  const FooterSocialItems = [
    {
      text: "راهنمای خرید",
      iconSrc: "/uploads/icons/chevrons-left.svg",
      id: 0,
    },
    {
      text: "قوانین و مقررات",
      iconSrc: "/uploads/icons/chevrons-left.svg",
      id: 1,
    },
    {
      text: "ثبت شکایات",
      iconSrc: "/uploads/icons/chevrons-left.svg",
      id: 2,
    },
    {
      text: "صفحه اینستاگرام",
      iconSrc: "/uploads/icons/chevrons-left.svg",
      id: 3,
    },
    {
      text: "کانال تلگرام",
      iconSrc: "/uploads/icons/chevrons-left.svg",
      id: 4,
    },
    {
      text: "لینکدین",
      iconSrc: "/uploads/icons/chevrons-left.svg",
      id: 5,
    },
  ];

  return (
    <FooterWrapper>
      <div className="footer">
        <h2 className="footer-title">اطلاعات تماس</h2>
        {FooterContactItems?.map((item) => (
          <div key={item?.id} className="footer-contact-items">
            <img src={item?.iconSrc} alt="phone" />
            <p>{item?.text}</p>
          </div>
        ))}
      </div>

      <div className="footer">
        <h2 className="footer-title">لینک های مهم</h2>
        {FooterSocialItems?.map((item) => (
          <div key={item?.id}>
            <div style={{ display: "inline-block" }}>
              <img src={item?.iconSrc} alt="leftChevrons" />
            </div>
            <div style={{ display: "inline-block" }}>
              <p>{item?.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <h2 className="footer-title">نماد های اعتماد</h2>
        <div className="namad-logo">
          <img
            className="picLogo"
            src={"/uploads/pictures/namad-etemad.png"}
            alt="etemadSign"
          />
          <img
            className="picLogo"
            src={"/uploads/pictures/samandehi.png"}
            alt="samandehiSign"
          />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
