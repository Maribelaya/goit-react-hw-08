import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

//import { useSelector } from "react-redux"; //+++
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const validationSchema = Yup.object({
  email: Yup.string().email("Невірний формат").required("Обов'язково"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обов'язково"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  //const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Вхід</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
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
            Увійти
          </button>
        </Form>
      </Formik>
    </div>
  );
}
