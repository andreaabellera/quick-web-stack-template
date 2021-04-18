import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Pink } from './components/Pink';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ArrowPlayground } from './components/ArrowPlayground';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/' render={() => ( <Redirect to="/pink" /> )} />
        <Route path='/home' component={Home} />
        <Route path='/pink' component={Pink} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/arrows' component={ArrowPlayground} />
      </Layout>
    );
  }
}
