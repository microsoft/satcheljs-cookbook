import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import getStore from '../store/store';
import BookList from './BookList';
import Cart from './Cart';
import CategoryList from './CategoryList';
import Description from './Description';

export default observer(() => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <CategoryList />
                <BookList />
                <Description />
            </div>
            <div>
                <h2>Shopping Cart</h2>
                <Cart />
            </div>
        </div>);
});