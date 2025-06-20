import React from "react";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contacts/selectors";
import { selectFilter } from "../redux/filters/selectors";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <h1>Контакти</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
