import React from 'react';

import './products-grid.component.css';

import {
  Product,
  Products,
  ProductCategory,
} from '../../common/interfaces/products.interface';

import ProductsGridItem from './products-grid-item/products-grid-item.component';

interface ProductsGrid {
  products: Product[];
}

type myState = {
  products: Array<Product>;
  _category: Array<ProductCategory>;
};

type myProps = {
  // products: Array<Product>;
  _products: Array<Products>;
};

class ProductsGrid extends React.Component<myProps, myState> {
  //   state = this.props.products;
  //   componentDidMount(){
  //       this.setState(() => ({products : this.props._products }))
  //   }
  render() {
    const { _products } = this.props;
    // this.setState(() => ({products : _products}))
    // _products?.map((items) => this.setState(() => ({products : items})));
    console.log(_products);
    let allCategory: Array<Products> = [];
    _products.map((items) => {
      console.log(items.products);
      const newItem = items.products;
      allCategory = [...allCategory, { products: newItem }];
    });

    console.log(allCategory[0].products);

    return (
      <div className='products-grid-page'>
        <h1 className='products-grid-category'>Category Name</h1>
        {allCategory.map((item, index) => (
          <div key={index} className='products-grid'>
            <ProductsGridItem _product={item.products} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductsGrid;
