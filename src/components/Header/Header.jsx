import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

export default function Header() {
  return (
    <div className={cx('header')}>
      <img src="/logo.png" alt="logo" />
      <div className={cx('text')}>
        We do <span>it</span> with passion
      </div>
    </div>
  );
}
