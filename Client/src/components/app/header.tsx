import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn-lite';

import './header.css';
const b = block('header-panel');

/** Шапка сайта. */
export default class Header extends React.Component {
  /** @inheritdoc */
  public render(): React.ReactNode {
    return (
      <div className='header-panel'>
        <Link to='/' className={b('logo')} title='На главную'>StoreLogo</Link>
        <Link to='/cart'>
          <img className={b('link-to-cart')} src='../images/shopping-cart-solid.svg' width='35' height='35' alt='cart'/>
        </Link>
      </div>
    );
  }
}