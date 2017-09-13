import {mutator, action} from 'satcheljs';
import {selectBookInCart, finishBuying} from '../../actions/cart';
import selectBook from '../../actions/selectBook';
import getStore from '../../store/store';

mutator(selectBookInCart, (msg) => {
    getStore().cart.selectedBookId = msg.bookId;
});

mutator(selectBook, (msg) => {
    getStore().cart.selectedBookId = null;
});

mutator(finishBuying, () => {
    getStore().cart.selectedBookId = null;
});