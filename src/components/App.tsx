import * as React from 'react';
import { observer } from 'mobx-react';
import { dispatch } from 'satcheljs';
import getStore from '../store/store';
import BookList from './BookList';
import Cart from './Cart';
import CategoryList from './CategoryList';
import Description from './Description';
import { ExchangeRates } from './ExchangeRates';

require('./AppStyles.css');

export default observer(() => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div>
                    <div style={{ display: 'flex' }}>
                        <CategoryList />
                        <BookList />
                    </div>
                    <div>
                        <h2>Shopping Cart</h2>
                        <Cart />
                    </div>
                    <div>
                        <h2>Exchange Rates</h2>
                        <ExchangeRates />
                    </div>
                </div>
                <Description />
            </div>
        </div>
    );
});
