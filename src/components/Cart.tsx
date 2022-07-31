import * as React from 'react';
import { observer } from 'mobx-react';
import getStore from '../store/store';
import { removeBookFromCart, selectBookInCart, buy } from '../actions/cart';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

export default observer(function Cart() {
    const store = getStore();
    return (
        <div className={cx('cart')}>
            {store.cart.books.map(item => {
                const book = store.books[item.bookId];
                return (
                    <div
                        key={item.bookId}
                        className={cx(
                            { selected: store.cart.selectedBookId == item.bookId },
                            'selectable'
                        )}>
                        <strong onClick={() => selectBookInCart(item.bookId)}>{book.name}</strong>(
                        {item.quantity}) -
                        {/* <button
                            onClick={e => {
                                //removeBookFromCart(item.bookId);
                                e.preventDefault();
                            }}>
                            Remove
                        </button> */}
                    </div>
                );
            })}

            {store.cart.books.length > 0 && (
                <button onClick={() => buy()} disabled={store.cart.isBuying}>
                    {store.cart.isBuying ? 'Buying...' : 'Buy!'}
                </button>
            )}
        </div>
    );
});
