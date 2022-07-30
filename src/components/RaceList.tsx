import * as React from 'react';
import getStore from '../store/store';
import selectBook from '../actions/selectBook';
import { observer } from 'mobx-react';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

export default observer(function RaceList() {
    const store = getStore();
    const categoryId = store.selectedCategoryId;
    const bookIds = Object.keys(store.tracks).filter(bookId => store.tracks[bookId]);
    const selectedBookId = getStore().selectedBookId;

    return (
        <div className={cx('books')}>
            <h2>Fucking Tracks</h2>
            {bookIds.map(bookId => (
                <div
                    onClick={() => selectBook(bookId)}
                    key={bookId}
                    className={cx({ selected: selectedBookId == bookId }, 'selectable')}>
                    {store.tracks[bookId].name}
                </div>
            ))}
        </div>
    );
});
