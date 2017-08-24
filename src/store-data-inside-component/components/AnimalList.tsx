import * as React from 'react';
import {observer} from 'mobx-react';
import getStore from '../store/store';
import {List} from 'office-ui-fabric-react/lib/components/List';

export default observer(() => (
    <ul>
        {getStore().items.map((item, index) => (
            <li style={{ padding: 5 }} key={item.name}>
                <strong>{ `Animal ${index}` }</strong>
                <div>{ item.name }</div>
                <div>{ item.description }</div>
            </li>
        ))}
    </ul>));