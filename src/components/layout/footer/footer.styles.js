import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  display: flex;
  padding: 35px;
  justify-content: space-between;
  .footer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    .footer-contact-title {
      color: #fff;
    }
    .footer-contact-items {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .namad-logo {
      display: flex;
      gap: 8px;
    }
  }
`;
