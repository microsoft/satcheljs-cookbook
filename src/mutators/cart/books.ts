import { mutator } from 'satcheljs';
import getStore from '../../store/store';
import { addBookToCart, _removeBookFromCart, finishBuying } from '../../actions/cart';
import { Car } from '../../store/BookStore';

function findBookInCart(name: string) {
    const store = getStore();
    let foundIndex = -1;
    for (let index = 0; index < store.newCars.length; index++) {
        let item = store.newCars[index];
        if (item.name == name) {
            foundIndex = index;
            break;
        }
    }
    return foundIndex;
}

mutator(addBookToCart, msg => {
    const store = getStore();
    let foundIndex = findBookInCart(msg.bookId);
    let car: Car = {
        name: 'Speedy',
        speedRating: 420,
    };
    store.newCars.push(car);
    // if (foundIndex === null) {
    //     store.cart.books.push({
    //         bookId: msg.bookId,
    //         quantity: 1,
    //     });
    // } else {
    //     store.cart.books[foundIndex].quantity++;
    // }
});

mutator(_removeBookFromCart, msg => {
    const store = getStore();
    //let index = store.newCars.indexOf(msg.car);
    let index = findBookInCart(msg.car.name!);

    store.newCars.splice(index, 1);

    // let foundIndex = findBookInCart(msg.bookId);

    // if (foundIndex !== null) {
    //     store.cart.books.splice(foundIndex, 1);
    // }
});

mutator(finishBuying, () => {
    const store = getStore();
    store.cart.books = [];
});
