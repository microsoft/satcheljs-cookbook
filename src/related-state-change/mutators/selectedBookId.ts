import {mutator, action} from 'satcheljs';
import selectCategory from '../actions/selectCategory';
import selectBook from '../actions/selectBook';
import {selectBookInCart} from '../actions/cart';
import getStore from '../store/store';

mutator(selectBookInCart, () => {
    getStore().selectedBookId = null;
});

mutator(selectBook, (msg) => {
    getStore().selectedBookId = msg.id;
});

mutator(selectCategory, (msg) => {
    const store = getStore();

    let found: string | null = null;

    Object.keys(store.books).forEach(bookId => {
        const book = store.books[bookId];
        if (book.categoryId == msg.id && !found) {
            found = bookId;
        }
    });

    store.selectedBookId = found;
});
