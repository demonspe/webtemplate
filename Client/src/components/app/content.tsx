import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsExplorer from '../products-explorer/products-explorer';
import Cart from '../cart/cart';

/** Область экрана под шапкой сайта. */
export default class Content extends React.Component {
  /** @inheritdoc */
  public render(): React.ReactNode {
    return (
      <Switch>
        <Route path='/cart' component={Cart}/>
        <Route path='/' component={ProductsExplorer}/>
      </Switch>
    );
  }
}