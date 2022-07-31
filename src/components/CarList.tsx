import * as React from 'react';
import getStore from '../store/store';
import selectCategory from '../actions/selectCategory';
import { observer } from 'mobx-react';
import * as classnames from 'classnames/bind';
import { removeBookFromCart } from '../actions/cart';
import { Car } from '../store/BookStore';

const cx = classnames.bind(require('./AppStyles.css'));

export default observer(function CarList() {
    const store = getStore();
    const selectedCategoryId = getStore().selectedCategoryId;
    return (
        <div className={cx('category')}>
            <h2>Fucking Cars</h2>
            {store.newCars.map((car: Car) => {
                return (
                    <div
                        onClick={() => {
                            selectCategory(car.name);
                        }}
                        key={car.name}
                        className={cx({ selected: selectedCategoryId == car.name }, 'selectable')}>
                        <div style={{ display: 'flex' }}>
                            {car.name}
                            <button
                                className={cx('cellButton')}
                                onClick={e => {
                                    removeBookFromCart(car);
                                    e.preventDefault();
                                }}>
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
});
