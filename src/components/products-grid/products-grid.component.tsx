import React from 'react';

import './products-grid.component.css';

import {
  IProduct,
  IProducts,
  IProductCategory,
} from '../../common/interfaces/products.interface';

import ProductsGridItem from './products-grid-item/products-grid-item.component';

interface ProductsGrid {
  products: IProduct[];
}

type myState = {
  products: Array<IProduct>;
  _category: Array<IProductCategory>;
};

type myProps = {
  // products: Array<Product>;
  _products: Array<IProducts>;
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
    // console.log(_products);
    let allCategory: Array<IProducts> = [];
    _products.map((items) => {
      // console.log(items.products);
      const newItem = items.products;
      allCategory = [...allCategory, { products: newItem }];
    });

    // console.log(allCategory[0].products);

    return (
      <div className='products-grid-page'>
        <h1 className='products-grid-category'>Category Name</h1>
        <div className='products-grid'>
          <ProductsGridItem _product={allCategory[0].products} />
        </div>
      </div>
    );
  }
}

export default ProductsGrid;
