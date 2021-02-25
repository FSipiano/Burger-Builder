import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    return (
        <div className ={classes.burger}>
            <BurgerIngredient type="bread-lid" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-base" />
        </div>
    );
};

export default burger;