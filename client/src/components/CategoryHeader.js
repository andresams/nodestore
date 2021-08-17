import React from 'react'

/**
 * Category page header
 * @param category
 * @returns {*}
 * @constructor
 */
export const CategoryHeader = ({category}) => {
    const CategoryHeader = (category) => {
        const image = `/images/${category.image_id}.jpg`;

        return (
            <div className="row">
                <div className="col">
                    <img className="crop-thumbnail" src={image} alt={category.name}/>
                </div>
                <div className="col">
                    <div className="row">
                        <h2 className="text-left">{category.name}</h2>
                    </div>
                    <div className="row">
                        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        )
    }

    return CategoryHeader(category)
}