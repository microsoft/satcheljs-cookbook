import * as React from 'react';
import getStore from '../store/store';
import selectCategory from '../actions/selectCategory';
import { observer } from 'mobx-react';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

export default observer(function CarList() {
    const store = getStore();
    const selectedCategoryId = getStore().selectedCategoryId;
    return (
        <div className={cx('category')}>
            <h2>Fucking Cars</h2>
            {Object.keys(store.cars).map(categoryId => {
                const car = store.cars[categoryId];
                return (
                    <div
                        onClick={() => {
                            selectCategory(categoryId);
                        }}
                        key={categoryId}
                        className={cx(
                            { selected: selectedCategoryId == categoryId },
                            'selectable'
                        )}>
                        {car.name}
                    </div>
                );
            })}
        </div>
    );
});
