import * as React from 'react';
import getStore from '../store/store';
import selectCategory from '../actions/selectCategory';
import {observer} from 'mobx-react';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

@observer
export default class CategoryList extends React.Component<any, any> {
    render() {
        const selectedCategoryId = getStore().selectedCategoryId;
        return (<div>
            {getStore().categories.map(category => (
                <div
                    onClick={() => {selectCategory(category.id);}}
                    key={category.id}
                    className={cx({selected: selectedCategoryId == category.id})}>
                    {category.name}
                </div>
            ))}
        </div>)
    }
}