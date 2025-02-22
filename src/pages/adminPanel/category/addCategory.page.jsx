import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { persianDate } from "../../../services/persianDate.services";
import { addCategory } from "../../../services/adminPanel/category.services";
import "../../../css/admin/category.css";

const AddCategory = () => {
  const [category, setCategory] = useState({});
  const [categoryImage, setCategoryImage] = useState();
  const [UrlCategoryImage, setUrlCategoryImage] = useState(
    "/uploads/pictures/unimage.png"
  );
  const [date, setDate] = useState("");
  const fileUploadRef = useRef(null);
  const navigate = useNavigate();

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
  }, []);

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = () => {
    const uploadedFile = fileUploadRef.current.files[0];
    setCategoryImage(uploadedFile);
    setUrlCategoryImage(URL.createObjectURL(uploadedFile));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", categoryImage);
    formData.append("categoryName", category.categoryName);
    formData.append("title", category.title);
    formData.append("description", category.description);

    await addCategory(formData).then((res) => {
      navigate("/admin/allCategories");
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-11 mx-5 counter">
              <div className="titleCounter">
                <p> پیشخوان / دسته بندی ها / افزودن دسته بندی </p>
              </div>
              <div className="d-flex justify-content-start parsianDate">
                <p>{date}</p>
              </div>
            </div>

            <div className="addAdmin col-11 my-5 mx-5">
              <div className="addtitle my-3 mx-2 col-8">
                <img
                  src={"/uploads/icons/plus-square-black.svg"}
                  alt="categoryPicture"
                />
                افزودن دسته بندی
              </div>

              <div className="addBody col-8 mx-5">
                <form
                  id="form"
                  enctype="multipart/form-data"
                  onSubmit={(e) => submitHandler(e)}
                >
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="text"
                        name="categoryName"
                        id="categoryName"
                        className="form-control mt-3 enField"
                        placeholder="نامک دسته بندی"
                        onChange={(e) =>
                          setCategory({
                            ...category,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <span
                        className="badge bg-secondary nemeAddressBadge"
                        id="namak"
                      >
                        http://localhost/adminPanel/category/
                        {category.categoryName}
                      </span>
                      <p className="mt-5 text-secondary">
                        از نامک دسته بندی برای ساخت آدرس صفحه دسته بندی استفاده
                        میشود .
                      </p>
                      <p className="text-secondary">
                        این موضوع با توجه به باکس رنگی بهتر نمایان میشود .
                      </p>
                    </div>
                    <div className="col-4 fileUloadArea">
                      <div className="imageUpload">
                        <img
                          src={UrlCategoryImage}
                          alt="categoryImage"
                          className="categoryImage"
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
                      />
                      <input
                        type="submit"
                        id="submit"
                        className="btn btn-success mt-1 btnSubmit"
                        value="ذخیره دسته بندی"
                      />
                    </div>
                    <div className="row mt-3">
                      <input
                        type="text"
                        name="title"
                        className="form-control faField"
                        id="categoryTitle"
                        placeholder="عنوان دسته بندی"
                        onChange={(e) =>
                          setCategory({
                            ...category,
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
                            setCategory({
                              ...category,
                              [e.target.name]: e.target.value,
                            })
                          }
                        ></textarea>
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

export default AddCategory;
