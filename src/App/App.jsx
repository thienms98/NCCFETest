import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
const cx = classNames.bind(styles);

export default function App() {
  return (
    <div className={cx('App')}>
      <Menu />
      <Header />
      <div className={cx('content')}>
        <div className={cx('paragraph')}>
          <div className={cx('title')}>Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam deserunt dolorem sed corporis officiis
            accusantium reiciendis quas consequatur sunt, eum, iure excepturi mollitia. Tempore fugiat quis sed commodi
            minima.
          </p>
        </div>

        <div className={cx('grid')}>
          <div className={cx('grid-item')}>
            <div className={cx('title')}>Lorem ipsum dolor sit amet.</div>
            <div className={cx('body')}>
              <img src="" alt="image here" />
              <div className={cx('text')}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet, vitae aspernatur quibusdam magni
                praesentium inventore consectetur vel a error corrupti officia quia, optio voluptates facere voluptatem
                officiis, libero expedita accusantium et nisi? A esse consequatur velit optio ad non?
              </div>
            </div>
          </div>
          <div className={cx('grid-item')}>
            <div className={cx('title')}>Lorem ipsum dolor sit amet.</div>
            <div className={cx('body')}>
              <img src="" alt="" />
              <div className={cx('text')}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet, vitae aspernatur quibusdam magni
                praesentium inventore consectetur vel a error corrupti officia quia, optio voluptates facere voluptatem
                officiis, libero expedita accusantium et nisi? A esse consequatur velit optio ad non?
              </div>
            </div>
          </div>
          <div className={cx('grid-item')}>
            <div className={cx('title')}>Lorem ipsum dolor sit amet.</div>
            <div className={cx('body')}>
              <img src="" alt="" />
              <div className={cx('text')}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet, vitae aspernatur quibusdam magni
                praesentium inventore consectetur vel a error corrupti officia quia, optio voluptates facere voluptatem
                officiis, libero expedita accusantium et nisi? A esse consequatur velit optio ad non?
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
