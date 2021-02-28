import React from 'react';
import PropTypes from 'prop-types';
import style from './BurgerIngredients.css'

class BurgerIngredient extends React.Component {
    render() {
      return <div className={style.BreadBottom}></div>;
//todo: put switch statement into render method
    }
}

// const burgerIngredient = (props) => {

//   let ingredient = null;

//   switch (props.type) {
//         case ('bread-base'):
//             ingredient = <div className={style.BreadBottom}></ div>;
//             break;
//         case ('bread-lid'):
//             ingredient = (
//             <div className={style.BreadTop}>
//                 <div className={style.Seeds1}></div>
//                 <div className={style.Seeds2}></div>
//             </div>
//          );
//             break;
//         case ('meat'):
//             ingredient = <div className={style.Meat}></div>
//             break;
//         case ('cheese'):
//             ingredient = <div className={style.Cheese}></div>
//             break;
//         case ('salad'):
//             ingredient = <div className={style.Salad}></div>
//             break;
//         case ('bacon'):
//             ingredient = <div className={style.Bacon}></div>
//             break;
//         default:
//             ingredient = alert('No CSS for you!')
//     };
// return ingredient
// };


// burgerIngredient.PropTypes = {
//     type: PropTypes.string.isRequired
// }

export default BurgerIngredient;

