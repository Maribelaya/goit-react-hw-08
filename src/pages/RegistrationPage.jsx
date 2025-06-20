import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import styles from "./RegistrationPage.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Ім'я має бути не менше 2 символів")
    .required("Обов’язкове поле"),
  email: Yup.string().email("Некоректний email").required("Обов’язкове поле"),
  password: Yup.string()
    .min(6, "Пароль має бути не менше 6 символів")
    .required("Обов’язкове поле"),
});

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      setMessage({ type: "success", text: "Реєстрація успішна!" });
      resetForm();
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Помилка реєстрації",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Реєстрація</h2>

      {message && (
        <div
          className={message.type === "error" ? styles.error : styles.success}
        >
          {message.text}
        </div>
      )}

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Ім'я:
            <Field name="name" type="text" className={styles.input} />
          </label>
          <ErrorMessage name="name" component="div" className={styles.error} />

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
            Зареєструватися
          </button>
        </Form>
      </Formik>
    </div>
  );
}
