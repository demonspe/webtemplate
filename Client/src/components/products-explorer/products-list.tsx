import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import block from 'bem-cn-lite';

import { IProduct } from '../../types/models';
import { getProductsFromCategory, getProductsInCart } from '../../api';
import Title from '../title';

import ProductItem from './product-item';
import './products-list.css';

const b = block('products-list');

interface IMatchParams {
  categoryName: string;
}

interface IProps extends RouteComponentProps<IMatchParams> {
}

interface IState {
  categoryName: string;
  products: Array<IProduct>;
  productsInCart: Array<string>;
}

/**
 * Компонент отображающий список товаров.
 */
export default class ProductsList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { categoryName: '', products: [], productsInCart: [] };

    this.updateProductsList();
  }

  /** @inheritdoc */
  public componentDidUpdate() {
    this.updateProductsList();
  }

  /** @inheritdoc */
  public render(): React.ReactNode {
    if (this.state.products.length > 0) {
      const items = this.state.products.map((p) =>
        <ProductItem inCart={this.state.productsInCart.includes(p.Id)} product={p} key={p.Id}/>
      );
      return (
        <div>
          <Title text='Товары' />
          <div className={b()}>
            {items}
          </div>
        </div>
      );
    }

    return null;
  }

  /** Получить список товаров с сервера и обновить state. */
  private updateProductsList(): void {
    const actualCategoryName = this.props.match.params.categoryName;
    if (!actualCategoryName || this.state.categoryName === actualCategoryName)
      return;

    getProductsInCart().then(value => {
      this.setState({ productsInCart: value.map(p => p.Id) });
    });
    getProductsFromCategory(actualCategoryName).then(value => {
      this.setState({ categoryName: actualCategoryName, products: value });
    });
  }
}