import React from 'react';
import block from 'bem-cn-lite';

import { IProduct } from '../../types/models';
import ProductItem from '../products-explorer/product-item';
import { getProductsInCart } from '../../api';
import Title from '../title';

import './cart.css';
const b = block('cart');

interface IProps { }

interface IState {
  products: Array<IProduct>;
}

/** Корзина с товарами. */
export default class Cart extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = { products: [] };
    this.onDeleteFromCart = this.onDeleteFromCart.bind(this);
  }

  /** @inheritdoc */
  public componentDidMount() {
    getProductsInCart().then(value => {
      this.setState({ products: value });
    });
  }

  /** @inheritdoc */
  public render(): React.ReactNode {
    if (this.state.products.length > 0) {
      const items = this.state.products.map((p) =>
        <ProductItem onDeleteFromCart={this.onDeleteFromCart} inCart={true} product={p} key={p.Id} />
      );
      return (
        <div className={b()}>
          <Title text='Корзина'/>
          <div className={b('items-list')}>{items}</div>
        </div>
      );
    }

    return <Title text='Корзина пуста'/>;
  }

  /** Колбэк нажатия на копку товара "Удалить из корзины". */
  private onDeleteFromCart(productId: string): void {
    const productsArray = this.state.products;
    const removeIndex = productsArray.map((product) => product.Id).indexOf(productId);
    if (removeIndex >= 0) {
      productsArray.splice(removeIndex, 1);
      this.setState({ products: productsArray });
    }
  }
}