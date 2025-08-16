import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { persianDate } from "../../../services/persianDate.services";
import {
  getEmailTemplate,
  updateEmailTemplate,
} from "../../../services/adminPanel/emailTemplate.service";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { ToastContainer, toast } from "react-toastify";

const ShowEmailTemplate = () => {
  const [email, setEmail] = useState();
  const [date, setDate] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const emailTemplateSchema = object({
    title: string().required("فیلد عنوان دسته بندی نمی تواند خالی باشد"),
    description: string().required("فیلد توضیحات نمی تواند خالی باشد"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "title",
      description: "description",
    },
    resolver: yupResolver(emailTemplateSchema),
  });

  const notify = () => {
    Object.values(errors).map((err) => {
      toast.error(err.message);
    });
  };

  const getPersianDate = async () => {
    await persianDate().then((res) => {
      setDate(res.data);
    });
  };

  const getAnEmailTemplate = async () => {
    await getEmailTemplate(params).then((res) => {
      if (res.status === 200) {
        setEmail(res.data.data);
      }
    });
  };

  useEffect(() => {
    getPersianDate();
    if (params) {
      getAnEmailTemplate();
    }
  }, []);

  const updateAnEmailTemplate = async (e) => {
    e.preventDefault();
    await updateEmailTemplate(params, email).then((res) => {
      if (res.status === 200) {
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
                <form onSubmit={handleSubmit(updateAnEmailTemplate)}>
                  <div class="row">
                    <div class="row mx-1 titleWidth">
                      <input
                        type="text"
                        name="title"
                        class="form-control"
                        id="emailTitle"
                        placeholder="عنوان ایمیل"
                        value={email?.title}
                        {...register("title", {
                          onChange: (e) =>
                            setEmail({
                              ...email,
                              [e.target.name]: e.target.value,
                            }),
                        })}
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
                          {...register("description", {
                            onChange: (e) =>
                              setEmail({
                                ...email,
                                [e.target.name]: e.target.value,
                              }),
                          })}
                        ></textarea>
                      </div>
                      <div class="mt-1 mx-5">
                        <div class="col-10 mt-5 mx-5">
                          <input
                            type="submit"
                            value="ثبت ایمیل"
                            class="mt-3 btn btn-success w-100"
                            onClick={notify}
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
      <ToastContainer rtl={true} theme="colored" />
    </>
  );
};

export default ShowEmailTemplate;
