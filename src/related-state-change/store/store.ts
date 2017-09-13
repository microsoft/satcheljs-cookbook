import {createStore} from 'satcheljs';
import {BookStore, sampleData} from '../../common/BookStore';

// Subscribe to mutators
import '../mutators/selectedBookId';
import '../mutators/selectedCategoryId';
import '../mutators/cart/books';
import '../mutators/cart/selectedBookId';

import '../orchestrators/removeBookFromCart';

export default createStore<BookStore>('BookStore', sampleData);