import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import getStore from '../store/store';
import count from '../actions/count';

export default observer(() => (
<div>
    <strong>Count: {getStore().counter}</strong>
    <div style={{display: 'flex'}}>
        <div style={{width: 150}}>
            {/* section 1 of an app */}
            <button onClick={() => count()}>Count Up</button>
        </div>
        <div>
            {/* section 2 of an app */}
            <button onClick={() => count(5)}>Count Up By 5</button>
        </div>
    </div>
</div>));