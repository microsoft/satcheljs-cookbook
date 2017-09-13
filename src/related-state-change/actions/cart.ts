import {action} from 'satcheljs';
export let addBookToCart = action('addBookToCart', (bookId: string) => ({bookId}));
export let removeBookFromCart = action('removeBookFromCart', (bookId: string) => ({bookId}));
export let _removeBookFromCart = action('_removeBookFromCart', (bookId: string) => ({bookId}));
export let selectBookInCart = action('selectBookInCart', (bookId: string | null) => ({bookId}));
