import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import burgerImage from '../../assets/burger-2.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Big Kahuna Burger</h1>
        <HeaderCartButton onClickHandler={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={burgerImage} alt="close-up of burger and fries, yummy!" />
      </div>
    </>
  );
};

export default Header;
