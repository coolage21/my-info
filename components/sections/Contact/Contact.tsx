import classNames from 'classnames/bind'
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <div>
      Contact
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, quia.
      <a href="mailto:">email@mail.com</a>
    </div>
  );
}
