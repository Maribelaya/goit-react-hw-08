import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginPage.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Некоректний email").required("Обов’язкове поле"),
  password: Yup.string()
    .min(6, "Пароль має бути не менше 6 символів")
    .required("Обов’язкове поле"),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Увійти</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Email:
            <Field name="email" type="email" className={styles.input} />
          </label>
          <ErrorMessage name="email" component="div" className={styles.error} />

          <label className={styles.label}>
            Пароль:
            <Field name="password" type="password" className={styles.input} />
          </label>
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />

          <button type="submit" className={styles.button}>
            Увійти
          </button>
        </Form>
      </Formik>
    </div>
  );
}
