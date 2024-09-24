import { useState, useEffect } from "react";
import Footer from "../../components/layout/footer/footer.component";
import "../../css/shop/mainPage.css";
import "../../css/shop/productPage.css";
import { useParams } from "react-router-dom";

const Payment = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [arrayNumbers, setArrayNumbers] = useState([]);
  const [price, setPrice] = useState();
  const [count, setCount] = useState(1);
  const [tax, setTax] = useState();

  const createArrayOfNumbers = () => {
    setArrayNumbers([]);
    if (product.count <= 10) {
      for (let i = 1; i <= product.count; i++) {
        setArrayNumbers((arrayNumbers) => [...arrayNumbers, i]);
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        setArrayNumbers((arrayNumbers) => [...arrayNumbers, i]);
      }
    }
  };

  useEffect(() => {
    if (product) {
      createArrayOfNumbers();
      setPrice(product.price);
    }
  }, [product]);

  const taxCalculator = () => {
    const tax = (product.price * 19) / 100;
    setTax(tax);
  };

  useEffect(() => {
    if (product) {
      taxCalculator();
    }
  }, [arrayNumbers]);

  return (
    <>
      <div className="container-flud">
        <div className="imageFrame">
          <img
            src="/uploads/pictures/digitalMarketing.jpg"
            className="mainImage"
            alt="imageFrame"
          />
          <div className="titleFrame">
            <h1>سبد خرید</h1>
          </div>
        </div>
        <div className="row col-12">
          <div className="col-7 buyDetails my-3">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
              <symbol
                id="check-circle-fill"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </symbol>
              <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </symbol>
              <symbol
                id="exclamation-triangle-fill"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </symbol>
            </svg>
            {/* <form > */}
            <div
              className="alert alert-success d-flex align-items-center mt-4"
              id="alert"
              role="alert"
            >
              <svg
                className="bi flex-shrink-0 me-2 ps-1"
                width="24"
                height="24"
                role="img"
                aria-label="Success:"
              >
                <use href="#check-circle-fill" />
              </svg>
              {
                <div>
                  <strong> {product?.title} </strong> به سبد خرید اضافه شد .
                </div>
              }
            </div>

            <h3 className="mt-4 me-2">سبد خرید شما</h3>
            <h4 className="mt-5 me-2">اطلاعات</h4>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="align-middle">تعداد</td>
                  <td className="leftAlign">
                    {
                      <select
                        className="form-select float-start select ms-2"
                        name="count"
                        id="count"
                        aria-label=".form-select example"
                        onChange={(e) => setCount(e.target.value)}
                      >
                        {arrayNumbers?.map((number) => (
                          <option> {number} </option>
                        ))}
                      </select>
                    }
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">قیمت</td>
                  {product && (
                    <td className="leftAlign align-middle">
                      <input
                        type="text"
                        className="form-control noBorder"
                        id="price"
                        name="price"
                        value={price * count + " تومان "}
                      />
                    </td>
                  )}
                </tr>
                <tr>
                  <td className="align-middle"> مالیات </td>
                  <td className="leftAlign align-middle">
                    <input
                      type="text"
                      className="form-control noBorder"
                      id="tax"
                      name="tax"
                      value={count * tax + " تومان "}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-middle"> مبلغ قابل پرداخت </td>
                  <td className="leftAlign align-middle">
                    <strong>
                      <input
                        type="text"
                        className="form-control noBorder"
                        name="totalPrice"
                        id="totalPrice"
                        value={count * (price + tax) + " تومان "}
                      />
                    </strong>
                  </td>
                </tr>
                <tr>
                  <input
                    type="text"
                    name="title"
                    value="<%= product.title%>"
                    style={{ visibility: "hidden" }}
                  />
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-3 payment my-3">
            <div className="refresh">
              <a href="/" className="btn btn-info mt-5">
                بازگشت به فروشگاه
              </a>
              <br />
              <a role="button" className="btn btn-danger mt-3">
                بروز رسانی سبد خرید
              </a>
            </div>

            <div className="pay mb-5 pb-5">
              <h4 className="pt-4 pb-2 pe-4"> پرداخت صورتحساب </h4>
              <hr />
              <h5 for="zarinPal" className="pt-2 pe-4">
                درگاه پرداخت
              </h5>
              <p id="zarinPal" className="pt-1 pe-4 zarinColor">
                زرین پال
              </p>
              <button
                type="submit"
                className="btn btn-success mt-4 w-75 submit"
              >
                پرداخت
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Payment;
