import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import getStore from '../store/store';
import toggleButton from '../actions/toggleButton';

export default observer(() => (
<div>
    <button onClick={() => dispatch(toggleButton())}>Flag is {getStore().flag ? 'on' : 'off'}</button>
</div>));