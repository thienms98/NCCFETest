import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

export default function Footer() {
  return <div className={cx('footer')}>Copyright &copy; {new Date().getFullYear()}</div>;
}
