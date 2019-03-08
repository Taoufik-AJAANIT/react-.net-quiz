import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Main from './components/quiz/Main'

export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <Layout>
              <Main />
          </Layout>
          
    );
  }
}