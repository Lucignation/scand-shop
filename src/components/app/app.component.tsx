import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Header from '../header/header.component';
import Home from '../../pages/home/home.page';
import Products from '../../pages/products/products.page';

import '../../common/styles';
import './app.component.css';

import client from '../../common/apollo-client';

type myProps = {
  message: string;
};

type myState = {
  count: number;
};

class App extends React.Component {
  //   state: myState = {
  //     count: 0,
  //   };

  //   props: myProps = {
  //     message: 'Hello there',
  //   };
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
