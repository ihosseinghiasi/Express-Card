import { useEffect, useState } from "react";
import { persianDate } from "services/persianDate.services";
import { addEmailTemplate } from "services/emailTemplate.service";
import { useNavigate } from "react-router-dom";

const AddEmailTemplate = () => {
  const [email, setEmail] = useState();
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  useEffect(() => {
    getPersianDate();
  }, []);

  const AddEmail = async (e) => {
    e.preventDefault();
    await addEmailTemplate(email).then((res) => {
      if (res.data) {
        navigate("/admin/allEmailTemplates");
      }
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
              <div class="d-flex justify-content-start parsianDate">{date}</div>
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
                <form onSubmit={(e) => AddEmail(e)}>
                  <div class="row">
                    <div class="row mx-1 titleWidth">
                      <input
                        type="text"
                        name="title"
                        class="form-control"
                        id="emailTitle"
                        placeholder="عنوان ایمیل"
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

export default AddEmailTemplate;
