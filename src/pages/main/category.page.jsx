import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../../css/shop/mainPage.css";
import "../../css/shop/categoryPage.css";
import axios from "axios";

const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState();
  const [productsOfCategories, setProductOfCategories] = useState();
  const [cookies] = useCookies([]);
  const [navStatus, setNavStatus] = useState();

  const getCategory = async () => {
    await axios
      .get(`http://localhost:4000/adminPanel/category/getCategory/${params.id}`)
      .then((res) => {
        setCategory(res.data);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getProductsOfCategories = async () => {
    const productsOfCategories = [];
    await axios
      .get(`http://localhost:4000/adminPanel/product/getAllProducts`)
      .then((res) => {
        Object.values(res.data).forEach((product) => {
          console.log("category.title", category?.title);
          console.log("categoryTitle", product.categoryTitle);
          console.log(product?.categoryTitle === category?.title);
          if (product?.categoryTitle === category?.title) {
            productsOfCategories.push(product);
          }
        });
        setProductOfCategories(productsOfCategories);
      });
  };

  useEffect(() => {
    getProductsOfCategories()
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
          {productsOfCategories?.map((product) => (
            <>
              <Link to={`/payment/${product._id}`}>
                <div
                  className="productItem"
                  style={{ pointerEvents: product.count === 0 && "none" }}
                >
                  <img
                    src={require(`../../upload/images/${product.image}`)}
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
