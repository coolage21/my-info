import classNames from 'classnames/bind'
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <section id="contact" className={cx('contact')}>
      Contact
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, quia.
      <a href="mailto:email@mail.com">email@mail.com</a>
    </section>
  );
}
