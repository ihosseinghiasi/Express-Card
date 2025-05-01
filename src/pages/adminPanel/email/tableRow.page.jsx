import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";

const TableRow = ({ index, id, title, target, handleDelete }) => {
  return (
    <>
      <tr>
        <td className="faField"> {index} </td>
        <td className="faField"> {title} </td>
        <td className="enField"> {target} </td>
        <td>
          <div class="container">
            <div class="row justify-content-center">
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
