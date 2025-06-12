import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";
import { Formik, Form, Field } from "formik";

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div>
      <h2>Log In</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Email:
            <Field name="email" type="email" />
          </label>
          <label>
            Password:
            <Field name="password" type="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
}
