import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { MiniCart } from './MiniCart';

/**
 * Global Site Header with Minicart
 * @param categories
 * @returns {JSX.Element}
 * @constructor
 */
// eslint-disable-next-line import/prefer-default-export
export const Header = ({ categories }) => {
  const MenuItem = (category, index) => {
    /* eslint-disable no-underscore-dangle */
    const categoryId = `category-${category._id}`;
    const url = `/category/${category._id}`;
    return (
            <a id={categoryId} key={category._id} className="menu-item" href={url}>{category.name}</a>
    );
  };

  const categoriesList = categories.map((category, index) => MenuItem(category, index));

  return (
        <div className="globalHeader">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="ms-1">
                            <Menu>
                                <a id="categories-title" className="menu-item" href="/#">Categories</a>
                                {categoriesList}
                            </Menu>
                        </div>
                        <div className="ms-5">
                            <h1>Andresa's Basic Shop</h1>
                        </div>
                    </div>
                </div>
                    <div className="col text-end"><a href="/#" className="minicart btn btn-success bi bi-align-bottom text-end"><MiniCart/></a></div>
            </div>
        </div>
  );
};
