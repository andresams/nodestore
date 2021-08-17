import React, {useState, useEffect} from 'react';
import {Product} from '../components/Product'
import {getSingleProduct} from '../services/ProductService'
import {useParams} from "react-router-dom";

/**
 * Display the details for a single product
 * @returns {JSX.Element}
 * @constructor
 */
function ProductPage() {
    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getSingleProduct(id)
            .then(product => {
                console.log(product)
                setProduct(product)
            });
    }, [id])

    return (
            <div className="container">
                <div className="row">
                    <Product product={product}></Product>
                </div>
            </div>
    );
}

export default ProductPage;