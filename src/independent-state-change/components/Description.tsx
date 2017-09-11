import * as React from 'react';
import {observer} from 'mobx-react';
import getStore from '../store/store';

@observer
export default class Description extends React.Component<any, any> {
    render() {
        const store = getStore();
        const book = store.selectedBookId && store.books[store.selectedBookId];

        return (<div>
            {book ? book.description : 'Select a book to see description'}
        </div>);
    }
}