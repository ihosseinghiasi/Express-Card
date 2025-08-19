import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../../services/adminPanel/product.services";
import { getCategory } from "../../services/adminPanel/category.services";
import "../../css/shop/mainPage.css";
import "../../css/shop/categoryPage.css";

const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState();
  const [productsOfCategories, setProductOfCategories] = useState();

  const getACategory = async () => {
    await getCategory(params).then((res) => {
      if (res.status === 200) {
        setCategory(res.data.data);
      }
    });
  };

  useEffect(() => {
    getACategory();
  }, []);

  const getProductsOfCategories = async () => {
    const productsOfCategories = [];
    await getProducts().then((res) => {
      Object.values(res.data.data).forEach((product) => {
        if (product?.categoryTitle === category?.title) {
          productsOfCategories.push(product);
        }
      });
      setProductOfCategories(productsOfCategories);
    });
  };

  useEffect(() => {
    getProductsOfCategories();
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
                  <p className="price mb-4">
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
