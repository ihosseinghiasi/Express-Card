import { useEffect, useState } from "react";
import TableRow from "./tableRow.page";
import { persianDate } from "services/persianDate.services";
import { getProducts, deleteProduct } from "services/product.services";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState("");

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  const getAllProducts = async () => {
    await getProducts().then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getAllProducts();
    getPersianDate();
  }, []);

  async function handleDelete(id) {
    await deleteProduct(id);
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
                {date}
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
