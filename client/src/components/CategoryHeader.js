import React from 'react';

/**
 * Category page header
 * @param category
 * @returns {*}
 * @constructor
 */
// eslint-disable-next-line import/prefer-default-export
export const CategoryHeader = ({ category }) => {
  const HeaderContent = (cat) => {
    const image = `/images/${cat.image_id}.jpg`;

    return (
            <div className="row">
                <div className="col">
                    <img className="crop-thumbnail" src={image} alt={cat.name}/>
                </div>
                <div className="col">
                    <div className="row">
                        <h2 className="text-left">{cat.name}</h2>
                    </div>
                    <div className="row">
                        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
    );
  };

  return HeaderContent(category);
};
