import { mutator } from 'satcheljs';
import * as store from '../../../store/store';
import { BookStore } from '../../../store/BookStore';
import { addBookToCart, _removeBookFromCart, finishBuying } from '../../../actions/cart';

import '../../../mutators/cart/books';

describe('cart.books mutators', () => {
    it('should add book with the quantity of 1 to cart if the cart does not have the book already', () => {
        // Arrange
        const state: any = {
            books: {
                '1': {
                    name: 'hi',
                },
            },
            cart: {
                books: [],
            },
        };

        spyOn(store, 'default').and.returnValue(state);

        // Act
        addBookToCart('1');

        // Assert
        expect(state.cart.books.length).toBe(1);
        expect(state.cart.books[0].bookId).toBe('1');
    });

    it('should increase the quantity if the cart has the book already', () => {
        // Arrange
        const state: any = {
            books: {
                '1': {
                    name: 'hi',
                },
            },
            cart: {
                books: [
                    {
                        bookId: '1',
                        quantity: 1,
                    },
                ],
            },
        };

        spyOn(store, 'default').and.returnValue(state);

        // Act
        addBookToCart('1');

        // Assert
        expect(state.cart.books.length).toBe(1);
        expect(state.cart.books[0].bookId).toBe('1');
        expect(state.cart.books[0].quantity).toBe(2);
    });

    it('should remove the entire entry from cart', () => {
        // Arrange
        const state: any = {
            books: {
                '1': {
                    name: 'hi',
                },
            },
            cart: {
                books: [
                    {
                        bookId: '1',
                        quantity: 10,
                    },
                ],
            },
        };

        spyOn(store, 'default').and.returnValue(state);

        // Act
        //_removeBookFromCart('1');

        // Assert
        expect(state.cart.books.length).toBe(0);
    });

    it('should ignore any request to remove entries that cannot be found in cart', () => {
        // Arrange
        const state: any = {
            books: {
                '1': {
                    name: 'hi',
                },
            },
            cart: {
                books: [
                    {
                        bookId: '1',
                        quantity: 10,
                    },
                ],
            },
        };

        spyOn(store, 'default').and.returnValue(state);

        // Act
        //_removeBookFromCart('5');

        // Assert
        expect(state.cart.books.length).toBe(1);
    });

    it('should empty the cart when finished buying', () => {
        // Arrange
        const state: any = {
            books: {
                '1': {
                    name: 'hi',
                },
            },
            cart: {
                books: [
                    {
                        bookId: '1',
                        quantity: 10,
                    },
                ],
            },
        };

        spyOn(store, 'default').and.returnValue(state);

        // Act
        finishBuying();

        // Assert
        expect(state.cart.books.length).toBe(0);
    });
});
