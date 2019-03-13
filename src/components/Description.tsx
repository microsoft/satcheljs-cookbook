import * as React from 'react';
import { observer } from 'mobx-react';
import getStore from '../store/store';
import getSelectedBookId from '../selectors/getSelectedBookId';
import { addBookToCart } from '../actions/cart';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

export default observer(function Description() {
    const store = getStore();
    const selectedBookId = getSelectedBookId();
    const book = selectedBookId !== null && store.books[selectedBookId];

    return (
        <div className={cx('description')}>
            {book && <h2>{book.name}</h2>}
            {book ? book.description : 'Select a book to see description'}
            {selectedBookId && (
                <div>
                    <button onClick={() => addBookToCart(selectedBookId!)}>Add to Cart</button>
                </div>
            )}
        </div>
    );
});
