import { createStore } from 'satcheljs';
import { BookStore, sampleData } from './BookStore';

// Subscribe to mutators
import '../mutators/selectedBookId';
import '../mutators/selectedCategoryId';
import '../mutators/cart/books';
import '../mutators/cart/buying';
import '../mutators/cart/selectedBookId';

import '../orchestrators/removeBookFromCart';
import '../orchestrators/buy';

export default createStore<BookStore>('BookStore', sampleData);
