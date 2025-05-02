import { Link } from "react-router-dom";
import "../../../css/admin/admin.css";

const TableRow = ({ index, id, fullName, title, totalPrice }) => {
  return (
    <>
      <tr>
        <td className="faField"> {index} </td>
        <td className="faField"> {fullName} </td>
        <td className="enField"> {title} </td>
        <td className="faField"> {totalPrice} </td>
        <td>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-4">
                <Link
                  to={`/user/showPayment/${id}`}
                  class="btn btn-success"
                  role="button"
                >
                  <img src={"/uploads/icons/edit.svg"} alt="edit" />
                </Link>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
