import { Link } from "react-router-dom";
import "../../css/shop/mainPage.css";

const CategoryItem = ({ image, namak, title, id }) => {
  return (
    <>
      <div className="categoryFrame">
        <Link to={`/${namak}/${id}`}>
          <div className="categoryItem">
            <img
              src={require(`../../images/category/${image}`)}
              alt="categoryImage"
            />
            <p className="enField"> {title} </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryItem;
