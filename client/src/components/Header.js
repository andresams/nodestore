import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { MiniCart } from "./MiniCart";

/**
 * Global Site Header with Minicart
 * @param categories
 * @returns {JSX.Element}
 * @constructor
 */
export const Header = ({categories}) => {

    const MenuItem = (category,index) => {
        const categoryId = `category-${category._id}`;
        const url = `/category/${category._id}`;
        return (
            <a id={categoryId} key={category._id} className="menu-item" href={url}>{category.name}</a>
        )
    }

    const categoriesList = categories.map((category,index) => MenuItem(category,index))

    return(
        <div className="globalHeader">
            <div className="row">
                <div className="col text-left">
                    <div className="row">
                        <div className="ml-2">
                            <Menu>
                                <a id="categories-title" className="menu-item" href="/#">Categories</a>
                                {categoriesList}
                            </Menu>
                        </div>
                        <div className="ml-5">
                            <h1>Andresa's Basic Shop</h1>
                        </div>
                    </div>
                </div>
                    <div className="col text-right"><a href="/#" className="btn btn-success bi bi-align-bottom"><MiniCart/></a></div>
            </div>
        </div>
    )
}