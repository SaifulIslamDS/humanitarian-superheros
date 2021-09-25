import React from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';

const Main = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <Cards />
                </div>
                <div className="col-3">
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default Main;