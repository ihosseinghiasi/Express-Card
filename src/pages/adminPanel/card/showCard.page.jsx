import { useEffect, useState } from "react";
import "../../../css/admin/admin.css";
import "../../../css/admin/general.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowCard = () => {
  const [firstLoad, setFirstLoad] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  const [cardProduct, setCardProduct] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);
  const [fieldValues, setFieldValues] = useState([]);
  const [persianDate, setPersianDate] = useState("");
  const [firstProduct, setFirstProduct] = useState([]);

  const params = useParams();

  const getCard = () => {
    axios
      .get(`http://localhost:4000/adminPanel/card/showCard/${params.id}`)
      .then((res) => {
        setCard(res.data.card);
      });
  };

  const getPersianDate = async () => {
    await axios.get("http://localhost:4000/persianDate").then((res) => {
      setPersianDate(res.data);
    });
  };

  const getCategoriesAndProducts = async () => {
    await axios
      .get("http://localhost:4000/adminPanel/card/getCategoriesAndProducts")
      .then((res) => {
        setCategories(res.data.categories);
        setProducts(res.data.products);
      });
  };

  useEffect(() => {
    getCard();
    getPersianDate();
    getCategoriesAndProducts();
  }, []);

  const getProductsOfSelectedCategory = () => {
    setCardProduct([]);
    products.map((product) => {
      if (product.categoryTitle === card.cardCategory) {
        setCardProduct((cardProduct) => [...cardProduct, product.title]);
      }
    });
  };

  useEffect(() => {
    getProductsOfSelectedCategory();
  }, [card.cardCategory]); //initial card.cardCategory

  const changeSelectedCategory = (categoryName, categoryValue) => {
    setCard({
      ...card,
      [categoryName]: categoryValue,
    });
    setFirstProduct([]);
    products.map((product) => {
      if (product.categoryTitle === categoryValue) {
        setFirstProduct((firstProduct) => [...firstProduct, product.title]);
      }
    });
  };

  useEffect(() => {
    setCard({ ...card, cardProduct: firstProduct[0] });
  }, [firstProduct]);

  const changeSelectedProduct = (productName, productValue) => {
    setCard({ ...card, cardProduct: productValue });
  };

  useEffect(() => {
    setFieldNames([]);
    if (!firstLoad) {
      getFieldsFromCard();
      console.log(firstLoad);
    }
    if (firstLoad) {
      setNewFieldsInCard();
      console.log(card);
    }
  }, [card.cardProduct]);

  const getFieldsFromCard = () => {
    if (!firstLoad) {
      Object.values(card).map((fields) =>
        Object.values(fields).map((field, index) => {
          if (typeof field === "object") {
            setFieldNames((fieldNames) => [...fieldNames, field.fieldName]);
            setFieldValues((fieldValues) => [...fieldValues, field.fieldValue]);
            setFirstLoad(true);
          }
        })
      );
    }
  };

  const setNewFieldsInCard = () => {
    setFieldValues([""]);
    products.map((product) => {
      if (product.title === card.cardProduct) {
        setFieldNames(product.fields);
        setFieldValues((fieldValues) => [...fieldValues, ""]);
      }
    });
  };

  const changeFieldValue = (e, index) => {
    const newFeildValues = [...fieldValues];
    newFeildValues[index] = e;
    setFieldValues(newFeildValues);
  };

  const updateCard = async (e) => {
    e.preventDefault();
    const data = {
      card,
      fieldNames,
      fieldValues,
    };
    await axios
      .put(
        `http://localhost:4000/adminPanel/card/updateCard/${params.id}`,
        data,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p>پیشخوان / کارت / ویرایش کارت </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{persianDate}</p>
              </div>
            </div>

            <div className="addProduct col-11 my-5 mx-5" id="main">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt="addCard"
                />
                ویرایش کارت
              </div>
              <div className="col-8 mx-5 addBody">
                <form onSubmit={(e) => updateCard(e)}>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-7">
                        <label for="cardCategoryTitle">
                          انتخاب دسته بندی :
                        </label>
                        <p id="cardCategoryTitle" className="mt-2">
                          برای آسانی در روند وارد سازی کارت ها لازم است در ابتدا
                          دسته بندی مورد نظر را انتخاب نمایید.
                        </p>
                      </div>
                      <div className="col-5 mt-3">
                        <select
                          className="form-select"
                          name="cardCategory"
                          id="cardCategory"
                          value={card.cardCategory}
                          onChange={(e) =>
                            changeSelectedCategory(
                              e.target.name,
                              e.target.value
                            )
                          }
                        >
                          {categories.map((category, index) => (
                            <option> {category.title} </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7">
                        <label for="cardProductTitle">انتخاب محصول :</label>
                        <p id="cardProductTitle" className="mt-2">
                          پس از انتخاب دسته بندی میبایست محصول مورد نظر را
                          انتخاب کنید تا ادامه مراحل برای شما نمایان شود.
                        </p>
                      </div>
                      <div className="col-5 mt-3">
                        <select
                          className="form-select"
                          name="cardProduct"
                          id="cardProduct"
                          value={card.cardProduct}
                          onChange={(e) =>
                            changeSelectedProduct(e.target.name, e.target.value)
                          }
                        >
                          {cardProduct &&
                            cardProduct.map((product, index) => (
                              <option> {product} </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7">
                        <label for="cardfieldsTitle"> اطلاعات کارت : </label>
                        <p id="cardfieldsTitle" className="mt-2">
                          در این بخش میبایست اطلاعات کارت مورد نظر را بصورت تکی
                          و یا از طریق فایل آن ها را بصورت دسته جمعی وارد
                          نمایید.
                        </p>
                      </div>
                      <div className="col-5 my-3" id="formField">
                        {fieldNames.map((fieldName, index) => (
                          <input
                            type="text"
                            className="form-control"
                            placeholder={fieldName}
                            value={fieldValues[index]}
                            onChange={(e) =>
                              changeFieldValue(e.target.value, index)
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7">
                        <label for="cardStatusTitle"> وضعیت کارت : </label>
                        <p id="cardStatusTitle" className="mt-2">
                          شما در این بخش میتوانید مشخص کنید که کارت های وارد شده
                          چه وضعیتی داشته باشند .
                        </p>
                      </div>
                      <div className="col-5 mt-3">
                        <select
                          className="form-select"
                          name="cardStatus"
                          id="cardStatus"
                          value={card.cardStatus}
                          onChange={(e) =>
                            setCard({
                              ...card,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option> فعال </option>
                          <option> غیر فعال </option>
                          <option> فروخته شده </option>
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-11 mt-3 mx-5">
                        <button type="submit" className="btn btn-success w-100">
                          ذخیره کارت
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCard;
