import {mutator} from 'satcheljs';
import getStore from '../../store/store';
import {addBookToCart, _removeBookFromCart, finishBuying} from '../../actions/cart';

function findBookInCart(bookId: string) {
    const store = getStore();
    let foundIndex: number | null = null;
    for (let index = 0; index < store.cart.books.length; index++) {
        let item = store.cart.books[index];
        if (item.bookId == bookId) {
            foundIndex = index;
            break;
        }
    }
    return foundIndex;
}

mutator(addBookToCart, (msg) => {
    const store = getStore();
    let foundIndex = findBookInCart(msg.bookId);

    if (foundIndex === null) {
        store.cart.books.push({
            bookId: msg.bookId,
            quantity: 1
        });
    } else {
        store.cart.books[foundIndex].quantity++;
    }
});

mutator(_removeBookFromCart, (msg) => {
    const store = getStore();
    let foundIndex = findBookInCart(msg.bookId);

    if (foundIndex !== null) {
        store.cart.books.splice(foundIndex, 1);
    }
});

mutator(finishBuying, () => {
    const store = getStore();
    store.cart.books = [];
});