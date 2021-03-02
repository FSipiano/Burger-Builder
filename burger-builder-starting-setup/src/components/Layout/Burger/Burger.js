import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    const changedIngredients = Object.keys(props.Ingredients)
        .map(ingKey => {
            return [...Array(props.Ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />
            } );
        } );
    return (
        <div className ={classes.burger}>
            <BurgerIngredient type="bread-lid" />
            {changedIngredients}
            <BurgerIngredient type="bread-base" />
        </div>
    );
};

export default burger;