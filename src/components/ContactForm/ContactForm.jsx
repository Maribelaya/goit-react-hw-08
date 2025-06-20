import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = name.toLowerCase();
    const duplicate = contacts.find((c) => c.name.toLowerCase() === normalized);

    if (duplicate) {
      alert(`Контакт з ім’ям ${name} вже існує.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Ім’я
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Введіть ім’я"
          className={styles.input}
        />
      </label>
      <label>
        Номер
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          placeholder="Введіть номер телефону"
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Додати контакт
      </button>
    </form>
  );
}
