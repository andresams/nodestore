import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

/**
 * Display details of a single product
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
// eslint-disable-next-line import/prefer-default-export
export const Product = ({ product }) => {
  const ProductDisplay = (productData) => {
    const { addItem } = useCart();
    const image = `/images/${productData.image_id}.jpg`;
    // eslint-disable-next-line no-underscore-dangle,no-param-reassign
    productData.id = productData._id;

    return (
            <div className="row">
                <div className="col">
                    <img className="" src={image} alt={productData.name} />
                </div>
                <div className="col">
                    <div className="row">
                        <h2 className="text-left">{productData.name}</h2>
                    </div>
                    <div className="row">
                        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn btn-primary" onClick={() => addItem(productData)}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
    );
  };

  return (
        <div className="container">
            <div className="mt-2 mb-2 row">
                <div className="col text-left">
                    <Link to="/">Home Page</Link>
                </div>
            </div>
            {ProductDisplay(product)}
        </div>
  );
};
