import React from 'react';
import './single-product.page.css';

class SingleProduct extends React.Component {
  // {_product.map((item, index) => (
  //   <div key={index}>
  //     <div>
  //       <h1>{item.name}</h1>
  //       <h2>{item.brand}</h2>
  //       {item.gallery.map((pix, ind) => (
  //         <div key={ind}>
  //           <img src={pix} alt={item.name} />
  //         </div>
  //       ))}
  //       <ul>
  //         {item.prices.map((price, ind) => (
  //           <li key={ind}>
  //             {price.amount} {price.currency.label}{' '}
  //             {price.currency.symbol}
  //           </li>
  //         ))}
  //       </ul>
  //       {
  //         <div
  //           dangerouslySetInnerHTML={{
  //             __html: item.description,
  //           }}
  //         />
  //       }
  //     </div>
  //   </div>
  // ))}
  render() {
    return <div className='product-grid-item'>hello</div>;
  }
}

export default SingleProduct;
