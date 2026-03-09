import {useTranslations} from 'next-intl';
import classNames from 'classnames/bind'
import styles from "./Introduction.module.scss";


const cx = classNames.bind(styles);

export default function Introduction() {
  const t = useTranslations('HomePage');
  
 
  return (
    <section id="introduction" className={cx('introduction')}>
      Introduction
     {t('title')}
    </section>
  );
}
