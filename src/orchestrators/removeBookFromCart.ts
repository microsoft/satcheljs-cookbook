import { orchestrator } from 'satcheljs';
import { _removeBookFromCart, removeBookFromCart, selectBookInCart } from '../actions/cart';
import selectCategory from '../actions/selectCategory';
import getStore from '../store/store';
import { toJS } from 'mobx';

orchestrator(removeBookFromCart, msg => {
    const store = getStore();
    _removeBookFromCart(msg.car);

    if (store.cart.books.length > 0) {
        selectBookInCart(store.cart.books[0].bookId);
    } else {
        selectCategory(store.selectedCategoryId);
    }
});
