import React from 'react';
import { ICategory } from 'src/types/entity';

import { getAllCategories } from '../../api';

import './explorer.css';
import ExplorerItem from './explorer-item';

interface IExplorerProps{
}

interface IExplorerState{
  categories: Array<ICategory>;
}

export default class Explorer extends React.Component<IExplorerProps, IExplorerState> {
  constructor(props: IExplorerProps) {
    super(props);
    this.state = { categories: [] };
  }

  public async componentDidMount() {
    getAllCategories().then(value => {
      this.setState({ categories: value });
      console.log(value);
    });
  }
  public render(): React.ReactNode {
    if (this.state.categories.length > 0) {
      const items = this.state.categories.map((c) =>
        <ExplorerItem Id={c.Id} Name={c.Name} key={c.Id} />
      );
      return <ul>{items}</ul>;
    }
    else {
      return null;
    }
  }
}