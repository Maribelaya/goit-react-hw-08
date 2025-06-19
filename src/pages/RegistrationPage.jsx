import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Ім'я має бути не менше 2 символів")
    .required("Обов’язкове поле"),
  email: Yup.string().email("Некоректний email").required("Обов’язкове поле"),
  password: Yup.string()
    .min(6, "Пароль має бути не менше 6 символів")
    .required("Обов’язкове поле"),
});

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Відправка форми:", values);
    try {
      await dispatch(register(values)).unwrap();
      console.log("Реєстрація успішна");
      setMessage({ type: "success", text: "Реєстрація успішна!" });
      resetForm();
    } catch (error) {
      console.error("Помилка реєстрації:", error);
      setMessage({
        type: "error",
        text: error.message || "Помилка реєстрації",
      });
    }
  };

  return (
    <div>
      <h2>Реєстрація</h2>
      {message && (
        <div
          style={{
            color: message.type === "error" ? "red" : "green",
            marginBottom: "10px",
          }}
        >
          {message.text}
        </div>
      )}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Ім'я:
            <Field name="name" type="text" />
          </label>
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />

          <label>
            Email:
            <Field name="email" type="email" />
          </label>
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <label>
            Пароль:
            <Field name="password" type="password" />
          </label>
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />

          <button type="submit">Зареєструватися</button>
        </Form>
      </Formik>
    </div>
  );
}

// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .min(2, "Ім'я має бути не менше 2 символів")
//     .required("Обов’язкове поле"),
//   email: Yup.string().email("Некоректний email").required("Обов’язкове поле"),
//   password: Yup.string()
//     .min(6, "Пароль має бути не менше 6 символів")
//     .required("Обов’язкове поле"),
// });

// export default function RegisterPage() {
//   const [message, setMessage] = useState(null);

//   const handleSubmit = (values, { resetForm }) => {
//     //console.log("Відправка форми:", values);
//     setMessage({ type: "success", text: "Форма успішно відправлена!" });
//     resetForm();
//   };

//   return (
//     <div>
//       <h2>Реєстрація</h2>
//       {message && (
//         <div
//           style={{
//             color: message.type === "error" ? "red" : "green",
//             marginBottom: "10px",
//           }}
//         >
//           {message.text}
//         </div>
//       )}
//       <Formik
//         initialValues={{ name: "", email: "", password: "" }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <label>
//             Ім'я:
//             <Field name="name" type="text" />
//           </label>
//           <ErrorMessage name="name" component="div" style={{ color: "red" }} />

//           <label>
//             Email:
//             <Field name="email" type="email" />
//           </label>
//           <ErrorMessage name="email" component="div" style={{ color: "red" }} />

//           <label>
//             Пароль:
//             <Field name="password" type="password" />
//           </label>
//           <ErrorMessage
//             name="password"
//             component="div"
//             style={{ color: "red" }}
//           />

//           <button type="submit">Зареєструватися</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
