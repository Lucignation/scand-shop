import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Header from '../header/header.component';
import Home from '../../pages/home/home.page';
import Products from '../../pages/products/products.page';
import SingleProduct from '../../pages/single-product/single-product.page';

import '../../common/styles';
import './app.component.css';

import client from '../../common/apollo-client';

type myProps = {
  to: string;
};

type myState = {
  to: string;
};

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<SingleProduct />} />
          </Routes>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
