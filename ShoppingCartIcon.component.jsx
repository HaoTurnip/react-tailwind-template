import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

export default function ShoppingCartIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconStyle = {
    fontSize: '2rem',
    color: isHovered ? 'gold' : 'white',
    transition: 'color 0.3s',
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FontAwesomeIcon
        className="h-8 w-8"
        icon={faShoppingCart}
        alt="Shopping Cart"
        style={iconStyle}
      />
    </span>
  );
}
