import {mutator} from 'satcheljs';
import getStore from '../../store/store';
import {addBookToCart, removeBookFromCart} from '../../actions/cart';

mutator(addBookToCart, (msg) => {
    const store = getStore();
    let foundIndex: number | null = null;
    store.cart.books.filter((item, index) => {
        if (item.bookId == msg.bookId) {
            foundIndex = index;
            return true;
        }
        return false;
    });
});