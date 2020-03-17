import React from 'react';
import { ICategory } from 'src/types/models';
import { Link } from 'react-router-dom';
import block from 'bem-cn-lite';

import { getAllCategories } from '../../api';
import Title from '../title';

import './categories.css';
const b = block('categories-list');

interface ICategoriesProps {
}

interface ICategoriesState {
  categories: Array<ICategory>;
}

/**
 * Проводник по категориям товаров.
 */
export default class Categories extends React.Component<ICategoriesProps, ICategoriesState> {
  constructor(props: ICategoriesProps) {
    super(props);
    this.state = { categories: [] };
  }

  /** @inheritdoc */
  public async componentDidMount() {
    getAllCategories().then(value => {
      this.setState({ categories: value });
    });
  }

  /** @inheritdoc */
  public render(): React.ReactNode {
    if (this.state.categories.length > 0) {
      const items = this.state.categories.map((c) =>
      <Link to={'/category/' + c.Name} className={b('item')} key={c.Id}>
        {c.Name}
      </Link>
      );

      return (
        <div>
          <Title text='Категории'/>
          <div className={b()}>
            {items}
          </div>
        </div>
      );
    }

    return null;
  }
}