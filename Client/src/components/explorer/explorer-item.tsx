import React from 'react';
import { ICategory } from 'src/types/entity';

export default class ExplorerItem extends React.Component<ICategory> {
  constructor(props: ICategory) {
    super(props);
  }

  public render(): React.ReactNode {
    return <div>{this.props.Name}</div>;
  }
}