import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ShowEmailTemplate = () => {
  const [email, setEmail] = useState();
  const [persianDate, setPersianDate] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getPersianDate = async () => {
    await axios
      .get("http://localhost:4000/persianDate/getPersianDate")
      .then((res) => {
        setPersianDate(res.data);
      });
  };

  const getEmailTemplate = async () => {
    await axios
      .get(
        `http://localhost:4000/adminPanel/email/getEmailTemplate/${params.id}`
      )
      .then((res) => {
        setEmail(res.data);
      });
  };

  useEffect(() => {
    getPersianDate();
    if (params) {
      getEmailTemplate();
    }
  }, []);

  const updateEmailTemplate = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `http://localhost:4000/adminPanel/email/updateEmailTemplate/${params.id}`,
        { email }
      )
      .then((res) => {
        navigate("/admin/allEmailTemplates");
      });
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="col-11 mx-5 counter">
              <div class="titleCounter">
                <p>پیشخوان / ایمیل ها / افزودن ایمیل</p>
              </div>
              <div class="d-flex justify-content-start parsianDate">
                {persianDate}
              </div>
            </div>

            <div class="addAdmin col-11 my-5 mx-5">
              <div class="addtitle my-3 mx-2 col-8">
                <img
                  src="/uploads/icons/plus-square-black.svg"
                  alt="افزودن ایمیل  "
                />
                افزودن ایمیل
              </div>

              <div class="addBody col-8 mx-5">
                <form onSubmit={(e) => updateEmailTemplate(e)}>
                  <div class="row">
                    <div class="row mx-1 titleWidth">
                      <input
                        type="text"
                        name="title"
                        class="form-control"
                        id="emailTitle"
                        placeholder="عنوان ایمیل"
                        value={email?.title}
                        onChange={(e) =>
                          setEmail({
                            ...email,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div class="row">
                      <div class="form-group mt-3">
                        <textarea
                          name="description"
                          id="editor"
                          class="form-control"
                          cols="30"
                          rows="10"
                          value={email?.description}
                          onChange={(e) =>
                            setEmail({
                              ...email,
                              [e.target.name]: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                      <div class="mt-1 mx-5">
                        <div class="col-10 mt-5 mx-5">
                          <input
                            type="submit"
                            value="ثبت ایمیل"
                            class="mt-3 btn btn-success w-100 "
                          />
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

export default ShowEmailTemplate;
