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
