// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "../redux/contacts/operations";
// import { selectUserName } from "../redux/auth/selectors.js";

// import ContactForm from "../components/ContactForm/ContactForm";
// import ContactList from "../components/ContactList/ContactList";

// export default function ContactsPage() {
//   const dispatch = useDispatch();
//   const userName = useSelector(selectUserName);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Вітаю, {userName}!</h1>
//       <h2>Ваші контакти</h2>
//       {/* <ContactForm />
//       <ContactList /> */}
//     </div>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectUser } from "../redux/auth/selectors";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsPage() {
  const dispatch = useDispatch();
  // отримуємо повний об'єкт користувача
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Вітаю, {user?.name}!</h1>

      <h2>Ваші дані</h2>

      {/* Форма додавання контактів */}
      {/* <ContactForm /> */}

      {/* Список контактів */}
      {/* <ContactList /> */}

      {/* Показуємо імейл користувача */}
      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        {/* Пароль зазвичай не показують, але якщо потрібно — можна зробити так: */}
        <p>
          <strong>Пароль:</strong> {user?.password}
        </p>
      </div>
    </div>
  );
}
