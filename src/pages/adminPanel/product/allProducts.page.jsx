import { useEffect, useState } from "react";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";
import axios from "axios";
import TableRow from "./tableRow.page";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [persianDate, setPersianDate] = useState("");

  useEffect(() => {
    const getAllProducts = () => {
      axios.get("http://localhost:4000/products/getAllProducts").then((res) => {
        setProducts(res.data);
      });
    };

    const getPersianDate = async () => {
      // await axios.get("http://localhost:4000/persianDate").then((res) => {
      //   setPersianDate(res.data);
      // });
    };
    getAllProducts();
    getPersianDate();
  }, []);

  async function handleDelete(id) {
    await axios
      .delete(`http://localhost:4000/products/deleteProduct/${id}`)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter faField">
                <p>پیشخوان / محصولات </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                {persianDate}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8 faField">
                <img src={"/uploads/icons/users-black.svg"} alt="products" />
                محصولات
              </div>

              <div className="my-3 position-absolute col-8">
                <table className="table table-bordered my-5 mx-5 col-12 text-center align-middle">
                  <thead>
                    <tr>
                      <th className="col-1" scope="col">
                        #
                      </th>
                      <th className="col-3" scope="col">
                        نامک محصول
                      </th>
                      <th className="col-4" scope="col">
                        نام محصول
                      </th>
                      <th className="col-1" scope="col">
                        تعداد
                      </th>
                      <th className="col-3" scope="col">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <TableRow
                        index={++index}
                        id={product._id}
                        namak={product.productName}
                        title={product.title}
                        count={product.count}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
