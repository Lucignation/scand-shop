import React from 'react';
import { gql, ApolloClient } from '@apollo/client';
import { connect } from 'react-redux';

//import from folders
import ProductsGrid from '../../components/products-grid/products-grid.component';
import { setProducts } from '../../store/actions';
import Spinner from '../../utils/Spinner/Spinner';

import {
  IProduct,
  IProducts,
} from '../../common/interfaces/products.interface';
import client from '../../common/apollo-client';
import { Store } from '../../store/types';

type myState = {
  products: Array<IProducts>;
  loading: boolean;
  isShowCart: boolean;
};

type myProps = {
  setProducts: any;
  product: Store | any;
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

  render() {
    // const _products = useGetProduct();
    // console.log(this.res)
    const { cart } = this.props.product;
    // console.log(this.state);
    const resData = this.state;
    // console.log(resData?.products);
    return (
      <>
        {resData?.products === null || resData?.loading === false ? (
          <div>
            <ProductsGrid _products={resData?.products} />
            {cart && this.state.isShowCart && <p>{cart[0].name}</p>}
          </div>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

const mapPropsToState = (state: Store) => ({
  product: state.product,
});

export default connect(mapPropsToState, { setProducts })(Home);
