import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Обов'язково"),
  email: Yup.string().email("Невірний формат").required("Обов'язково"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обов'язково"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // <==  для перенаправлення

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success("Реєстрація успішна!");
      resetForm();
      navigate("/contacts");
    } catch (err) {
      console.error("Помилка реєстрації:", err);
      toast.error(err || "Помилка реєстрації");
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Реєстрація</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Ім’я
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Пароль
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>

          <button type="submit" className={css.button}>
            Зареєструватися
          </button>
        </Form>
      </Formik>
    </div>
  );
}
