import React from 'react';

import classes from './BurgerIngredients.css'
const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-base');
            ingredient = <div className={classes.BreadBottom}</ div>;
            break;
        case ('bread-lid');
            ingredient = (
            <div className={classes.BreadTop}></div>
                <div className={classes.Seeds1}</div>
                <div className={classes.Seeds2}</div>

            </div>
            }

};