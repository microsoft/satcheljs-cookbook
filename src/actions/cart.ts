import { action } from 'satcheljs';
import { Car } from '../store/BookStore';
export let addBookToCart = action('addBookToCart', (bookId: string) => ({ bookId }));
export let removeBookFromCart = action('removeBookFromCart', (car: Car) => ({ car }));
export let _removeBookFromCart = action('_removeBookFromCart', (car: Car) => ({ car }));
export let selectBookInCart = action('selectBookInCart', (bookId: string | null) => ({ bookId }));
export let buy = action('buy');
export let beginBuying = action('beginBuying');
export let finishBuying = action('finishBuying');
