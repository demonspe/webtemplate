import React from 'react';
import { HashRouter } from 'react-router-dom';

import './app.css';
import Header from './header';
import Content from './content';

/** Корневой компонент приложения. */
export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <HashRouter>
        <div className='box'>
          <div className='row-header'>
            <Header/>
          </div>
          <div className='row-content'>
            <Content/>
          </div>
        </div>
      </HashRouter>
    );
  }
}