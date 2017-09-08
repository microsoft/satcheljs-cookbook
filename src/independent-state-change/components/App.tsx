import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import getStore from '../store/store';
import select from '../actions/select';

export default observer(() => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={{width: 150}}>
                    {/* sidebar */}
                    {getStore().items.map(item => {
                        <div onClick={() => select(item.name)}>{item.name}</div>
                    })}
                </div>
                <div>
                    {/* section 2 of an app */}
                    {getStore().selected && (<div>{getStore().selected}</div>)}
                </div>
            </div>
        </div>);
});