import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

export default function Menu() {
  return (
    <div className={cx('menu')}>
      <div className={cx('button')}>|||</div>
      <div className={cx('menu-item')}>Home</div>
      <div className={cx('menu-item')}>Services</div>
      <div className={cx('menu-item')}>News</div>
      <div className={cx('menu-item')}>Blog</div>
      <div className={cx('menu-item')}>Contact</div>
    </div>
  );
}
