import * as React from 'react';
import {observer} from 'mobx-react';
import getStore from '../store/store';
import {removeBookFromCart, selectBookInCart, buy} from '../actions/cart';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

@observer
export default class Cart extends React.Component<any, any> {
    render() {
        const store = getStore();
        return <div>
            {store.cart.books.map(item => {
                const book = store.books[item.bookId];
                return (
                    <div key={item.bookId} className={cx({selected: store.cart.selectedBookId == item.bookId})}>
                        <strong onClick={() => selectBookInCart(item.bookId)}>{book.name}</strong> 
                        ({item.quantity}) - 
                        <button onClick={(e) => {
                            removeBookFromCart(item.bookId);
                            e.preventDefault();}}>Remove</button>
                    </div>
                );
            })}
            
            <button onClick={() => buy()} disabled={store.cart.isBuying}>{store.cart.isBuying ? 'Buying...' : 'Buy!'}</button>
        </div>;
    }
}