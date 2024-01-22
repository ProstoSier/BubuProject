import React from 'react';

const BurgerMenu = ({ onClick }) => {
  return (
    <div className="burger-menu" onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default BurgerMenu;