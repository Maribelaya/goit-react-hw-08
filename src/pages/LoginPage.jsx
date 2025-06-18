import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Некоректний email").required("Обов’язкове поле"),
  password: Yup.string()
    .min(6, "Пароль має бути не менше 6 символів")
    .required("Обов’язкове поле"),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div>
      <h2>Увійти</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Email:
            <Field name="email" type="email" />
          </label>
          <ErrorMessage
            name="email"
            component="div"
            style={{ color: "red", marginBottom: "10px" }}
          />

          <label>
            Пароль:
            <Field name="password" type="password" />
          </label>
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red", marginBottom: "10px" }}
          />

          <button type="submit">Увійти</button>
        </Form>
      </Formik>
    </div>
  );
}
