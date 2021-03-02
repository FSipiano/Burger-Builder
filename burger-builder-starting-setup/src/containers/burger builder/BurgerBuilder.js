import React from 'react';
import Burger from '../../components/Layout/Burger/Burger';

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (

            <div>
                <Burger  />
                <div>Build Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;