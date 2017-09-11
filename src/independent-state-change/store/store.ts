import {createStore} from 'satcheljs';
import {BookStore, sampleData} from '../../common/BookStore';

// Subscribe to mutators
import '../mutators/bookMutators';
import '../mutators/categoryMutators';

export default createStore<BookStore>('BookStore', sampleData);