import { useEffect, useState } from "react";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";
import axios from "axios";
import TableRow from "./tableRow.page";

const AllCards = () => {
  const [cards, setCards] = useState([]);
  const [persianDate, setPersianDate] = useState("");

  useEffect(() => {
    const getAllCards = () => {
      axios.get("http://localhost:4000/cards/getAllCards").then((res) => {
        setCards(res.data);
      });
    };

    const getPersianDate = async () => {
      // await axios.get("http://localhost:4000/persianDate").then((res) => {
      //   setPersianDate(res.data);
      // });
    };
    getAllCards();
    getPersianDate();
  }, []);

  async function handleDelete(id) {
    // await axios
    //   .delete(`http://localhost:4000/cards/deleteCard/${id}`)
    //   .then((res) => {
    //     if (res.data) {
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
                <p>پیشخوان / کارت ها </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                {persianDate}
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8 faField">
                <img src={"/uploads/icons/users-black.svg"} alt="products" />
                کارت ها
              </div>

              <div className="my-3 position-absolute col-8">
                <table className="table table-bordered my-5 mx-5 col-12 text-center align-middle">
                  <thead>
                    <tr>
                      <th className="col-1" scope="col">
                        #
                      </th>
                      <th className="col-3" scope="col">
                        دسته بندی محصول
                      </th>
                      <th className="col-3" scope="col">
                        عنوان محصول
                      </th>
                      <th className="col-2" scope="col">
                        وضعیت
                      </th>
                      <th className="col-3" scope="col">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cards.map((card, index) => (
                      <TableRow
                        index={++index}
                        id={card._id}
                        cardCategory={card.cardCategory}
                        cardProduct={card.cardProduct}
                        cardStatus={card.cardStatus}
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

export default AllCards;
