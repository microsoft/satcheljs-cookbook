import * as React from 'react';
import {observer} from 'mobx-react';
import getStore from '../store/store';
import {addBookToCart} from '../actions/cart';

@observer
export default class Description extends React.Component<any, any> {
    render() {
        const store = getStore();
        const selectedBookId = store.selectedBookId || store.cart.selectedBookId;
        const book = selectedBookId !== null && store.books[selectedBookId];

        return (<div>
            {book ? book.description : 'Select a book to see description'}
            {selectedBookId && (
                <div>
                    <button onClick={() => addBookToCart(store.selectedBookId!)}>Add to Cart</button>
                </div>
            )}
        </div>);
    }
}