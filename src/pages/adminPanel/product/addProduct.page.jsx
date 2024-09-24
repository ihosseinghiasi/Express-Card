import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../css/admin/general.css";
import "../../../css/admin/product.css";
// import { wordifyfa } from "../../public/wordifyfa/src/wordifyfa.ts";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [fields, setFields] = useState([""]);
  const [categories, setCategories] = useState([]);
  const [productImage, setProductImage] = useState();
  const [UrlProductImage, setUrlProductImage] = useState(
    "/uploads/pictures/unimage.png"
  );
  const [persianDate, setPersianDate] = useState("");
  const fileUploadRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPersianDate = async () => {
      await axios.get("http://localhost:4000/persianDate").then((res) => {
        setPersianDate(res.data);
      });
    };

    const getCategories = async () => {
      await axios
        .get("http://localhost:4000/adminPanel/category/allCategories")
        .then((res) => {
          setCategories(res.data.categories);
        });
    };

    getCategories();
    getPersianDate();
  }, []);

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = () => {
    const uploadedFile = fileUploadRef.current.files[0];
    setProductImage(uploadedFile);
    setUrlProductImage(URL.createObjectURL(uploadedFile));
  };

  const handleChangeField = (onChangeFields, index) => {
    const myFields = [...fields];
    myFields[index] = onChangeFields;
    setFields(myFields);
  };

  const addNewField = () => {
    const newFields = [...fields, []];
    setFields(newFields);
  };

  const RemoveField = () => {
    if (fields.length > 1) {
      const newFields = [...fields];
      newFields.splice(-1);
      setFields(newFields);
    } else setFields([""]);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", productImage);
    formData.append("productName", product.productName);
    formData.append("title", product.title);
    formData.append("cycle", product.cycle);
    formData.append("price", product.price);
    formData.append("accessible", product.accessible);
    formData.append("description", product.description);
    formData.append("categoryTitle", product.categoryTitle);
    formData.append("fields", fields);

    await axios
      .post("http://localhost:4000/adminPanel/product/addProduct", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data.status);
        navigate("/admin/allProducts");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p>پیشخوان / محصولات / افزودن محصول </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{persianDate}</p>
              </div>
            </div>

            <div className="addProduct col-11 my-5 mx-5" id="main">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt="addProduct"
                />
                افزودن محصول
              </div>

              <div className="addBody col-8 mx-5">
                <form
                  onSubmit={(e) => addProduct(e)}
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="text"
                        name="productName"
                        id="productName"
                        list="productNameList"
                        className="form-control mt-3 list enField"
                        placeholder="نامک محصول"
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <span
                        className="badge bg-secondary nameAddressBadge"
                        id="namak"
                      >
                        http://localhost/adminPanel/product/
                        {product.productName}
                      </span>
                      <p className="mt-5 text-secondary">
                        از نامک محصول برای ساخت آدرس صفحه محصول استفاده میشود .
                      </p>
                      <p className="text-secondary">
                        این موضوع با توجه به باکس رنگی بهتر نمایان میشود .
                      </p>
                    </div>

                    <div className="col-4 fileUloadArea">
                      <div className="imageUpload mx-auto" id="file">
                        <img
                          src={UrlProductImage}
                          alt="categoryImage"
                          className="imageUpload rounded-full"
                          onClick={handleImageUpload}
                        />
                      </div>
                      <input
                        type="file"
                        name="file"
                        id="file"
                        ref={fileUploadRef}
                        className="form-control"
                        onChange={uploadImageDisplay}
                        hidden
                      />{" "}
                      <button
                        type="submit"
                        id="submit"
                        className="btn btn-success mt-2 btnSubmit"
                      >
                        ذخیره محصول
                      </button>
                    </div>
                    <div className="row mt-3">
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        id="categoryTitle"
                        placeholder="عنوان محصول"
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <div className="form-group mt-3">
                        <textarea
                          name="description"
                          id="editor"
                          className="form-control"
                          cols="30"
                          rows="10"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              [e.target.name]: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-5 mt-4 me-2 productOptions1">
                        <label className="me-3" for="selectCategory">
                          انتخاب دسته بندی :
                        </label>
                        <select
                          id="selectCategory"
                          name="categoryTitle"
                          className="selectCategory me-2 form-select"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option> انتخاب دسته بندی </option>
                          {categories.map((category) => (
                            <option> {category.title} </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-5 mt-4 me-3 productOptions1">
                        <label className="me-2" for="productPrice">
                          قیمت محصول :
                        </label>
                        <p className="me-2 mt-1">
                          قیمت محصول بر حسب تومان می باشد .
                        </p>
                        <input
                          type="text"
                          className="me-2 form-control textPrice w-75 faField"
                          name="price"
                          id="productPrice"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <p className="mt-2 me-2" id="persianPrice"></p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6 mt-4 me-3 productOptions2">
                        <label className="me-5" for="productPrice">
                          {" "}
                          اکانت مدت دار :{" "}
                        </label>
                        <p className="mx-5 mt-1">
                          {" "}
                          درصورتی که میخواهید مدت زمان فعال داشته باشد و پس از
                          مدت مشخصی غیرفعال شود ، تعداد روز های مورد نظر را وارد
                          کنید مثلا برای اکانت ماهانه بر روی 30 بگذارید.
                        </p>
                        <p className="mx-5">
                          {" "}
                          در صورتی که نمیخواهید از این قابلیت استفاده کنید آن را
                          بر روی 0 تنظیم کنید.{" "}
                        </p>
                        <input
                          type="text"
                          className="me-5 form-control textPrice w-75"
                          name="cycle" // cycle of expire
                          id="cycle"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-5 mt-4 me-3 productOptions2">
                        <label className="me-5" for="productPrice">
                          {" "}
                          دسترسی در سایت :{" "}
                        </label>
                        <p className="mx-5 mt-2">
                          با انتخاب گزینه غیرقابل دسترسی ، بازدیدکنندگان
                          نمیتوانند به این صفحه دسترسی پیدا کنند.
                        </p>
                        <div className="form-check form-switch mt-1">
                          <input
                            className="form-check-input me-5 float-end"
                            style={{ width: "60px", height: "30px" }}
                            type="checkbox"
                            id="mySwitch"
                            name="accessible"
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                [e.target.name]: e.target.checked,
                              })
                            }
                          />
                          <label
                            className="me-5 mt-1 float-end"
                            id="mySwitchLable"
                            for="mySwitch"
                          >
                            در دسترس
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-11 mt-4 me-3 productOptions3"
                        id="addField"
                      >
                        <label className="me-5" for="newfild">
                          {" "}
                          تنظیمات مربوط به فیلد های کارت های محصول :{" "}
                        </label>
                        <p className="mx-5 mt-2">
                          {" "}
                          در این بخش فیلد های مرتبط با کارت های این محصول را
                          انتخاب میکنید ، مثلا درصورتی که قصد فروش اکانت های
                          کریو را دارید میتوانید سه فیلد آدرس سرور ، نام کاربری
                          ، پسورد را قرار دهید.{" "}
                        </p>
                        <div className="my-3 position-absolute col-10">
                          <table className="table table-borderless mx-5 col-12 text-center align-middle">
                            <thead>
                              <tr>
                                <th className="col-8" scope="col">
                                  {" "}
                                  فیلد های محصول{" "}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <div className="container-fluid">
                                {fields &&
                                  fields.map((field, index) => (
                                    <tr key={index}>
                                      <td className="col-2 me-5">
                                        <div id="formField">
                                          <input
                                            type="text"
                                            name="fields"
                                            id="field"
                                            value={fields[index]}
                                            className="form-control"
                                            placeholder="نام فیلد"
                                            onChange={(e) =>
                                              handleChangeField(
                                                e.target.value,
                                                index
                                              )
                                            }
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  ))}

                                <tr>
                                  <td>
                                    <div className="row justify-content-center">
                                      <div className="col-1 mt-2">
                                        <span
                                          onClick={(e) => addNewField(e)}
                                          className="btn btn-success"
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="اضافه کردن فیلد"
                                        >
                                          <img
                                            src={
                                              "/uploads/icons/plus-square-small.svg"
                                            }
                                            alt="remove"
                                          />
                                        </span>
                                      </div>
                                      <div className="col-1 mt-2">
                                        <span
                                          onClick={(e) => RemoveField(e)}
                                          className="btn btn-danger"
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="حذف کردن فیلد"
                                        >
                                          <img
                                            src={"/uploads/icons/trash-2.svg"}
                                            alt="deleteField"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </div>
                            </tbody>
                          </table>
                        </div>
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

export default AddProduct;
