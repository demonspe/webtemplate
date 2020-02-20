import * as React from 'react';
import { render } from 'react-dom';

import App from './app';

require('./index.css');

render(
  <App />,
  document.getElementById('root')
);