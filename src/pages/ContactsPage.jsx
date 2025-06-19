import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectUser } from "../redux/auth/selectors";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Вітаю, {user?.name}!</h1>

      <h2>Ваші дані</h2>

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Пароль:</strong> {user?.password}
        </p>
      </div>
    </div>
  );
}
