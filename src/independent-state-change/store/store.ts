import {createStore} from 'satcheljs';
import {BookStore, sampleData} from '../../common/BookStore';

export default createStore<BookStore>('BookStore', sampleData);