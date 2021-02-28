import React from 'react';
import Burger from '../../components/Layout/Burger/Burger';

class BurgerBuilder extends React.Component {
    render() {
        return (

            <div>
                <Burger />
                <div>Build Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;