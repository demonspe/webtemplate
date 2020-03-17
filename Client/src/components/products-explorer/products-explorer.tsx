import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Categories from './categories';
import ProductsList from './products-list';
import './products-explorer.css';

/**
 * Проводник по товарам. Используется для отображения списка категорий и списка товаров по выбранной категории.
 */
export default class ProductsExplorer extends React.Component {
  /** @inheritdoc */
  public render(): React.ReactNode {
    return (
      <div className='content-box'>
        <div className='categories'>
          <Categories />
        </div>
        <div className='products'>
          <Switch>
            <Route path='/category/:categoryName' component={ProductsList} />
          </Switch>
        </div>
      </div>);
  }
}