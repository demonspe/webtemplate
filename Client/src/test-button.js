// @flow
import React from 'react';
import { getEntity } from './api';

export type TestButtonProps = {
  text: string
};

class TestButton extends React.Component {
  props: TestButtonProps;

  onClick() {
    getEntity()
      .then(entity => alert('Entity loaded: ' + entity.Name))
      .catch(error => alert(error.message));
  }

  render(): ?React.Element<any> {
    return <input type='button' value={this.props.text} onClick={() => this.onClick()} />;
  }
}

export default TestButton;

