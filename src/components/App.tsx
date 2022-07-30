import * as React from 'react';
import { observer } from 'mobx-react';
import { dispatch } from 'satcheljs';
import getStore from '../store/store';
import RaceList from './RaceList';
import Cart from './Cart';
import CarList from './CarList';
import Description from './Description';
import * as classnames from 'classnames/bind';

const className = classnames.bind(require('./AppStyles.css'));

export default observer(() => {
    return (
        <div>
            <div className="title">FUCKFEST</div>
            <div style={{ display: 'flex' }}>
                <div>
                    <div style={{ display: 'flex' }}>
                        <CarList />
                        <RaceList />
                    </div>
                    {/* <div>
                        <h2>Shopping Cart</h2>
                        <Cart />
                    </div> */}
                </div>
                <Description />
            </div>
        </div>
    );
});
