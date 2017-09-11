import * as React from 'react';
import getStore from '../store/store';
import selectCategory from '../actions/selectCategory';
import {observer} from 'mobx-react';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

@observer
export default class CategoryList extends React.Component<any, any> {
    render() {
        const store = getStore();
        const selectedCategoryId = getStore().selectedCategoryId;
        return (<div>
            {Object.keys(store.categories).map(categoryId => {
                const category = store.categories[categoryId];
                return (
                    <div
                        onClick={() => {selectCategory(categoryId);}}
                        key={categoryId}
                        className={cx({selected: selectedCategoryId == categoryId})}>
                        {category.name}
                    </div>
                );
            })}
        </div>)
    }
}