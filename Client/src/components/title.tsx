import React from 'react';
import block from 'bem-cn-lite';

import './title.css';
const b = block('title');

interface IProps {
  text: string;
}

/** Компонент для отображения основной надписи наверху какой-либо области страницы (названия категории и тд.) */
export default class Title extends React.Component<IProps> {
  /** @inheritdoc */
  public render(): React.ReactNode {
    return <div className={b()}>{this.props.text}</div>;
  }
}