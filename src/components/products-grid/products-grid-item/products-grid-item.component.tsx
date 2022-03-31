import React from 'react';

import {
  Product,
  Products,
  ProductCategory,
} from '../../../common/interfaces/products.interface';

type myProps = {
  // product: Product;
  _product: Array<ProductCategory>;
};

type myState = {
  products: Array<Product>;
};

class ProductsGridItem extends React.Component<myProps, myState> {
  //   state = this.props.product;

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const { _product } = this.props;

    console.log('This is the place to show it in items', _product);
    for (let items of _product) {
      // console.log(items);
      // this.setState(() => ({ products: items }));
    }
    // let _products: Array<Products> = [];
    // _product.map((item, index) => {
    //   // console.log({ ...item.products });
    //   // _products = { _products: item.products };
    //   _products.push({ products: item.products });
    //   // console.log(newP);
    //   console.log(_products);
    //   this.setState({ products: _products });
    // });
  }
  render() {
    const { _product } = this.props;
    const newProducts = this.state;
    console.log(newProducts);

    return (
      <div>
        {_product.map((item, index) => (
          <div key={index}>
            <div>
              <h1>{item.name}</h1>
              <h2>{item.brand}</h2>
              {item.gallery.map((pix, ind) => (
                <div key={ind}>
                  <img src={pix} alt={item.name} />
                </div>
              ))}
              <ul>
                {item.prices.map((price, ind) => (
                  <li key={ind}>
                    {price.amount} {price.currency.label}{' '}
                    {price.currency.symbol}
                  </li>
                ))}
              </ul>
              {
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                />
              }
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductsGridItem;
