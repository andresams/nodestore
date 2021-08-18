import React, { useState, useEffect } from 'react';
import { Products } from '../components/Products';
import { getAllProducts } from '../services/ProductService';

/**
 * Displays a list of the 9 latest products added to the site
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((items) => {
        setProducts(items);
      });
  }, []);

  return (
            <div className="container">
                <div className="row p-3">
                    <h2>Latest Products</h2>
                </div>
                <div className="row">
                    <Products products={products}></Products>
                </div>
            </div>
  );
}

export default Home;
