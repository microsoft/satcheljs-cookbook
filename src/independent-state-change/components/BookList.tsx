import * as React from 'react';
import getStore from '../store/store';
import selectBook from '../actions/selectBook';
import {observer} from 'mobx-react';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

@observer
export default class BookList extends React.Component<any, any> {
    render() {
        const category = getStore().selectedCategoryId;
        const books = getStore().books.filter(book => book.categoryId == category);
        const selectedBookId = getStore().selectedBookId;

        return (<div>
            {books.map(book => (
                <div
                    onClick={() => selectBook(book.id)}
                    key={book.id}
                    className={cx({selected: selectedBookId == book.id})}>
                    {book.name}
                </div>
            ))}
        </div>)
    }
}