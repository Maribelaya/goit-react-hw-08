// import { useSelector } from "react-redux";
// import {
//   selectFilteredContacts,
//   selectLoading,
//   selectError,
// } from "../../redux/contactsSlice";
// import Contact from "../Contact/Contact";
// //import css from "./ContactList.module.css";

// export default function ContactList() {
//   const contacts = useSelector(selectFilteredContacts);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   if (loading) return <p>Завантаження...</p>;
//   if (error) return <p>Помилка: {error}</p>;

//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <Contact key={contact.id} contact={contact} />
//       ))}
//     </ul>
//   );
// }

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
