import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsPage() {
  return (
    <div>
      <h2>Your Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
}
