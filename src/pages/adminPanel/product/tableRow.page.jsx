import { Link } from "react-router-dom";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";

const TableRow = ({ index, id, namak, title, count, handleDelete }) => {
  return (
    <>
      <tr>
        <td className="faField"> {index} </td>
        <td className="enField"> {namak} </td>
        <td className="faField"> {title} </td>
        <td className="faField"> {count} </td>
        <td>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-4">
                <Link
                  to={`/admin/showProduct/${id}`}
                  class="btn btn-success"
                  role="button"
                >
                  <img src={"/uploads/icons/edit.svg"} alt="edit" />
                </Link>
              </div>
              <div class="col-4">
                <form onSubmit={() => handleDelete(id)}>
                  <button type="submit" class="btn btn-danger">
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
