import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import getStore from '../store/store';
import {Button} from 'office-ui-fabric-react/lib/components/Button';
import {Fabric} from 'office-ui-fabric-react/lib/components/Fabric';
import toggleButton from '../actions/toggleButton';

export default observer(() => (
<div>
    <Button onClick={() => dispatch(toggleButton)}>Flag is {getStore().flag ? 'on' : 'off'}</Button>
</div>));