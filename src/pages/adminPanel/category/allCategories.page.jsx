import { useEffect, useState } from "react";
import "../../../css/admin/category.css";
import axios from "axios";
import TableRow from "./tableRow.page";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [persianDate, setPersianDate] = useState("");

  useEffect(() => {
    const getAllCategories = () => {
      axios
        .get("http://localhost:4000/categories/getAllCategories")
        .then((res) => {
          setCategories(res.data);
        });
    };

    const getPersianDate = async () => {
      // await axios.get("http://localhost:4000/persianDate").then((res) => {
      //   setPersianDate(res.data);
      // });
    };
    getAllCategories();
    getPersianDate();
  }, []);

  async function handleDelete(id) {
    // await axios
    //   .delete(
    //     `http://localhost:4000/adminPanel/category/deleteCategory/${id}`,
    //     { id },
    //     {
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => {
    //     if (res.data.status) {
    //       console.log(res.data);
    //     }
    //   });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter faField">
                <p>پیشخوان / دسته بندی ها </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                {persianDate}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8 faField">
                <img src={"/uploads/icons/users-black.svg"} alt="Categories" />
                دسته بندی ها
              </div>

              <div className="my-3 position-absolute col-8">
                <table className="table table-bordered my-5 mx-5 col-12 text-center align-middle">
                  <thead>
                    <tr>
                      <th className="col-1" scope="col">
                        #
                      </th>
                      <th className="col-3" scope="col">
                        عنوان دسته بندی
                      </th>
                      <th className="col-3" scope="col">
                        نامک دسته بندی
                      </th>
                      <th className="col-2" scope="col">
                        دسترسی به سایت
                      </th>
                      <th className="col-3" scope="col">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <TableRow
                        index={index + 1}
                        id={category._id}
                        namak={category.categoryName}
                        title={category.title}
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

export default AllCategories;
