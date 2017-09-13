import {mutator, action} from 'satcheljs';
import selectCategory from '../actions/selectCategory';
import selectBook from '../actions/selectBook';
import {selectBookInCart, finishBuying} from '../actions/cart';
import getStore from '../store/store';

mutator(selectBookInCart, () => {
    getStore().selectedBookId = null;
});

mutator(selectBook, (msg) => {
    getStore().selectedBookId = msg.id;
});

function findFirstBookId(bookId: string) {
    const store = getStore();

    let found: string | null = null;

    Object.keys(store.books).forEach(bookId => {
        const book = store.books[bookId];
        if (book.categoryId == bookId && !found) {
            found = bookId;
        }
    });

    return found;
}

mutator(selectCategory, (msg) => {
    getStore().selectedBookId = findFirstBookId(msg.id);
});

mutator(finishBuying, () => {
    getStore().selectedBookId = findFirstBookId(getStore().selectedCategoryId);
});