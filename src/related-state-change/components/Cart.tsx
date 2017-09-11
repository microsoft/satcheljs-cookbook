import * as React from 'react';
import getStore from '../store/store';

export default class Cart extends React.Component<any, any> {
    render() {
        const store = getStore();
        return <div>
            {store.cart.books.map(item => {
                const book = store.books[item.bookId];
                return <div><strong>{book.name}</strong> ({item.quantity})</div>;
            })}
        </div>;
    }
}