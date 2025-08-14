import { useEffect, useState } from "react";
import { persianDate } from "../../../services/persianDate.services";
import {
  getCards,
  deleteCard,
} from "../../../services/adminPanel/card.services";
import TableRow from "./tableRow.page";
import "../../../css/admin/general.css";
import "../../../css/admin/admin.css";

const AllCards = () => {
  const [cards, setCards] = useState([]);
  const [date, setDate] = useState("");

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data.data);
    });
  };

  const getAllCards = async () => {
    await getCards().then((res) => {
      if (res.status === 200) {
        setCards(res.data.data);
      }
    });
  };

  useEffect(() => {
    getAllCards();
    getPersianDate();
  }, []);

  async function handleDelete(id) {
    await deleteCard(id);
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
                {date}
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
