import { Link } from "react-router-dom";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";

const TableRow = ({ index, id, subject, status, department, handleDelete }) => {
  return (
    <>
      <tr>
        <td className="faField"> {index} </td>
        <td className="faField"> {subject} </td>
        <td className="faField"> {department} </td>
        <td className="faField"> {status} </td>
        <td>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-4">
                <Link
                  to={`/user/showTicket/${id}`}
                  className="btn btn-success"
                  role="button"
                >
                  <img src={"/uploads/icons/edit.svg"} alt="edit" />
                </Link>
              </div>
              <div className="col-4">
                <form onSubmit={() => handleDelete(id)}>
                  <button type="submit" className="btn btn-danger">
                    <img src={"/uploads/icons/trash-2.svg"} alt="remove" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
