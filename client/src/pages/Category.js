import React, {useState, useEffect} from 'react';
import {Products} from '../components/Products'
import {CategoryHeader} from '../components/CategoryHeader'
import {useParams} from "react-router-dom"
import {getSingleCategory} from '../services/CategoryService'

/**
 * Display a category header and a grid containing the products
 * @returns {JSX.Element}
 * @constructor
 */
function Category() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const {id} = useParams();

    useEffect(() => {
        getSingleCategory(id)
            .then(response => {
                setProducts(response.products)
                setCategory(response.category)
            })
    }, [id])

    return (
        <div>
            <CategoryHeader category={category}></CategoryHeader>
            <div className="container">
                <div className="row">
                    <Products products={products}></Products>
                </div>
            </div>
        </div>
    )
}

export default Category;