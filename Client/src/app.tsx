import React from 'react';

import './app.css';
import Header from './components/header';
import Explorer from './components/explorer/explorer';
import Content from './components/content';

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className='box'>
        <div className='row header'>
          <Header/>
        </div>
        <div className='row content'>
          <div className='content-box'>
            <div className='explorer'><Explorer/></div>
            <div className='content'><Content/></div>
          </div>
      </div>
    </div>);
  }
}