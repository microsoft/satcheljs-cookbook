import {createStore} from 'satcheljs';
import {BookStore, sampleData} from '../../common/BookStore';

// Subscribe to mutators
import '../mutators/selectedBookId';
import '../mutators/selectedCategoryId';

export default createStore<BookStore>('BookStore', sampleData);