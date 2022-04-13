import React from 'react';
import { gql, ApolloClient } from '@apollo/client';
import { connect } from 'react-redux';

import ProductsGrid from '../../components/products-grid/products-grid.component';
import { setProducts } from '../../store/actions';

import {
  IProduct,
  IProducts,
} from '../../common/interfaces/products.interface';
import client from '../../common/apollo-client';

type myState = {
  products: Array<IProducts>;
  loading: boolean;
};

type myProps = {
  setProducts: any;
};

class Home extends React.Component<myProps, myState> {
  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const GET_PRODUCTS = gql`
      query IntrospectionQuery {
        categories {
          products {
            id
            name
            inStock
            gallery
            category
            brand
            description
            prices {
              currency {
                label
                symbol
              }
              amount
            }
          }
        }
      }
    `;

    const res = await client.query({
      query: GET_PRODUCTS,
    });

    const { loading, data, networkStatus } = res;

    this.setState(() => ({ products: data.categories, loading: loading }));
    this.props.setProducts(data.categories);
  }

  componentWillUnmount() {
    // this.setState({ ...this.state, products: [] });
  }
  products: IProduct[] = [
    {
      id: '1',
      name: 'New T-Shirt',
      prices: [{ amount: 30.4, currency: { label: 'USD', symbol: '$' } }],
      brand: 'Nike Shirt',
      inStock: true,
      gallery: [
        'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
      ],
      category: 'Clothing',
      description:
        'Buy everything you want in our store and we will be glad to give it to you.',
    },
  ];

  render() {
    // const _products = useGetProduct();
    // console.log(this.res)
    // const { product } = this.state;
    // console.log(this.state);
    const resData = this.state;
    // console.log(resData?.products);
    return (
      <>
        {resData?.products === null || resData?.loading === false ? (
          <ProductsGrid _products={resData?.products} />
        ) : (
          <h2>Loading...</h2>
        )}
      </>
    );
  }
}

export default connect(null, { setProducts })(Home);
