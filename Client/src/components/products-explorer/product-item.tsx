import React from 'react';
import block from 'bem-cn-lite';

import { IProduct } from '../../types/models';
import { addToCart, removeFromCart } from '../../api';

import './product-item.css';

const b = block('product-item');

interface IProps {
  inCart: boolean;
  product: IProduct;
  onDeleteFromCart?: (productId: string) => void;
}

interface IState {
  inCart: boolean;
}

/**
 * Один продукт в списке товаров.
 * Может использоваться и в списке товаров категории, и списке товаров корзины.
 */
export default class ProductItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { inCart: this.props.inCart };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
  }

  /** @inheritdoc */
  public render(): React.ReactNode {
    const { Name } = this.props.product;
    const onClickHandler = this.state.inCart ? this.removeProductFromCart : this.addProductToCart;
    const buttonModifier = this.state.inCart ? b('button_in_cart') : '';

    return (
      <div className={b()}>
        <div className={b('photo')}>
          <img src={this.getImgPath(this.props.product.Category.Name)} />
        </div>
        <div className={b('name')}>{Name}</div>
        <div onClick={onClickHandler} className={b('button', buttonModifier)}>
          {this.state.inCart ? 'Удалить из корзины' : 'Купить'}
        </div>
      </div>
    );
  }

  /**
   * Получить путь к изображению продукта.
   * Костыль, чтобы не получать файлы с сервера (по заданию).
   */
  private getImgPath(categoryName: string): string {
    if (categoryName === 'Телевизоры')
      return '../../images/tele.jpg';
    if (categoryName === 'Холодильники')
      return '../../images/icebox.jpg';
    if (categoryName === 'Кофеварки')
      return '../../images/cofee.jpg';

    return '';
  }

  /** Добавить этот товар в корзину. */
  private addProductToCart() {
    addToCart(this.props.product.Id).then(() => {
      this.setState({ inCart: true });
    });
  }

  /** Удалить этот товар из корзины. */
  private removeProductFromCart() {
    removeFromCart(this.props.product.Id).then(() => {
      this.setState({ inCart: false });
      if (this.props.onDeleteFromCart)
        this.props.onDeleteFromCart(this.props.product.Id);
    });
  }
}