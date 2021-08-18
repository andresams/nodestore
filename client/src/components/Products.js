import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

/**
 * Display grid containing cards of products
 * @param products
 * @returns {JSX.Element|null}
 * @constructor
 */
// eslint-disable-next-line import/prefer-default-export
export const Products = ({ products }) => {
  const { addItem } = useCart();
  if (products.length === 0) return null;

  const ProductCard = (product, index) => {
    const image = `/images/${product.image_id}.jpg`;
    // eslint-disable-next-line no-underscore-dangle
    const productUrl = `/product/${product._id}`;
    // eslint-disable-next-line no-param-reassign,no-underscore-dangle
    product.id = product._id;

    return (
            <div className="col-6 mb-4" key={index}>
                <div className="p-4 border">
                    <div className="col-xs-12" >
                        <Link to={productUrl}><img className="card-img-top img-fluid img-thumbnail crop-thumbnail" src={image} alt={product.name} /></Link>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">$ {product.price}</p>
                            <button className="btn btn-primary" onClick={() => addItem(product)}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
  };

  const productGrid = products.map((product, index) => ProductCard(product, index));

  return (
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 g-1 g-lg-3">
                {productGrid}
            </div>
        </div>
  );
};
