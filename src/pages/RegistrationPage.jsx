import RegistrationForm from "./RegistrationPage";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <h2>Реєстрація</h2>
      <RegistrationForm />
    </div>
  );
}

// import { useDispatch } from 'react-redux';
// import { register } from '../redux/auth/operations';
// import { Formik, Form, Field } from 'formik';

// export default function RegisterPage() {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(register(values));
//     resetForm();
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
//         <Form>
//           <label>
//             Name:
//             <Field name="name" type="text" />
//           </label>
//           <label>
//             Email:
//             <Field name="email" type="email" />
//           </label>
//           <label>
//             Password:
//             <Field name="password" type="password" />
//           </label>
//           <button type="submit">Sign Up</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
