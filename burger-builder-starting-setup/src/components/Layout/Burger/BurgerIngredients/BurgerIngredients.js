import React from 'react';
// import PropTypes from 'prop-types';
import classes from './BurgerIngredients.css'

class BurgerIngredient extends React.Component {
    render() {
        return (<div>
            {
                burgerIngredient(this.props)
            }
        </div>
        );
    }
}

const burgerIngredient = (props) => {
  switch (props.type) {
    case "bread-base":
      return <div className={classes.BreadBottom}></div>;
    case "bread-lid":
      return (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
    case "meat":
      return <div className={classes.Meat}></div>;
    case "cheese":
      return <div className={classes.Cheese}></div>;
    case "salad":
      return <div className={classes.Salad}></div>;
    case "bacon":
      return <div className={classes.Bacon}></div>;
    default:
      return <div>No Type Defined</div>;
  }
};

export default BurgerIngredient;

/* const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-base'):
            ingredient = <div className={classes.BreadBottom}></ div>;
            break;
        case ('bread-lid'):
            ingredient = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
         );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break;
        default:
            ingredient = null
    };

}; */
/* burgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
} */

