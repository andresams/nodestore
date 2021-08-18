import React from 'react';
import { useCart } from 'react-use-cart';
import { Cart } from 'react-bootstrap-icons';

/**
 * Mini Shopping Cart
 * @param products
 * @returns {JSX.Element}
 * @constructor
 */
export const MiniCart = ({ products }) => {
  const {
    cartTotal,
    totalUniqueItems,
  } = useCart();

  const formattedTotal = (Math.round(cartTotal * 100) / 100).toFixed(2);

  return (
        <>
            <p>
                <Cart/> {totalUniqueItems} - ${formattedTotal}
            </p>
        </>
  );
};
