import { useEffect, useState } from "react";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";
import axios from "axios";
import TableRow from "./tableRow.page";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [persianDate, setPersianDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = () => {
      axios
        .get("http://localhost:4000/adminPanel/user/allUsers")
        .then((res) => {
          setUsers(res.data.users);
        });
    };

    const getPersianDate = async () => {
      // await axios.get("http://localhost:4000/persianDate").then((res) => {
      //   setPersianDate(res.data);
      // });
    };
    getAllUsers();
    getPersianDate();
  }, []);

  async function handleDelete(id) {
    // await axios.delete(
    //   `http://localhost:4000/adminPanel/user/deleteUser/${id}`,
    //   { id },
    //   {
    //     withCredentials: true,
    //   }
    // );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter faField">
                <p>پیشخوان / مدیران سایت </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                {persianDate}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8 faField">
                <img src={"/uploads/icons/users-black.svg"} alt="admins" />
                مدیران سایت
              </div>

              <div className="my-3 position-absolute col-8">
                <table className="table table-bordered my-5 mx-5 col-12 text-center align-middle">
                  <thead>
                    <tr>
                      <th className="col-1" scope="col">
                        #
                      </th>
                      <th className="col-3" scope="col">
                        نام خانوادگی
                      </th>
                      <th className="col-3" scope="col">
                        ایمیل
                      </th>
                      <th className="col-3" scope="col">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <TableRow
                        index={index + 1}
                        id={user._id}
                        lastName={user.lastName}
                        email={user.email}
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

export default AllUsers;
