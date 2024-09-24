import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
// import { getCategoryAndCategoryProductsService } from "../../services/category.services";
import "../../css/shop/mainPage.css";
import "../../css/shop/categoryPage.css";

const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState();
  const [categoryProducts, setCategoryProducts] = useState();
  const [cookies] = useCookies([]);
  const [navStatus, setNavStatus] = useState();

  useEffect(() => {
    // const { category } = getCategoryAndCategoryProductsService(params);
    // setCategory(category);
  }, []);

  useEffect(() => {
    console.log("category : ", category);
  }, [category]);

  return (
    <div>
      <div className="container-fluid">
        <div className="imageFrame">
          <img
            src={"../uploads/pictures/digitalMarketing.jpg"}
            className="mainImage"
            alt="mainImage"
          />
          <div className="titleFrame">
            <h1>{category?.title}</h1>
          </div>
        </div>
        <div className="description" id="description">
          {category?.description}
        </div>

        <div className="productFrame">
          {categoryProducts?.map((product) => (
            <>
              <Link to={`/payment/${product._id}`}>
                <div
                  className="productItem"
                  style={{ pointerEvents: product.count === 0 && "none" }}
                >
                  <img
                    src={require(`../../images/category/${product.image}`)}
                    alt="productImage"
                  />
                  <p>{product.title}</p>
                  <p className="price">
                    <img src="/uploads/icons/dollar-sign.svg" alt="price" />
                    قیمت : {product.price} تومان{" "}
                  </p>
                  <span> افزودن به سبد </span>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
