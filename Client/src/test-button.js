// @flow
import React from 'react';
import { loadUserName } from './api';

export type TestButtonProps = {
  text: string;
};

class TestButton extends React.Component {
  props: TestButtonProps;

  onClick() {
    loadUserName()
      .then(userName => alert(userName))
      .catch(error => alert(error.message));
  }

  render(): ?React.Element<any> {
    return <input type='button' value={this.props.text} onClick={() => this.onClick()} />;
  }
}

export default TestButton;

