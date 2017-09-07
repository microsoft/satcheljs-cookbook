import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import getStore from '../store/store';
import {Button} from 'office-ui-fabric-react/lib/components/Button';
import {Fabric} from 'office-ui-fabric-react/lib/components/Fabric';
import count from '../actions/count';

export default observer(() => (
<Fabric>
    <strong>Count: {getStore().counter}</strong>
    <div style={{display: 'flex'}}>
        <div style={{width: 150}}>
            {/* section 1 of an app */}
            <Button onClick={() => count()}>Count Up</Button>
        </div>
        <div>
            {/* section 2 of an app */}
            <Button onClick={() => count(5)}>Count Up By 5</Button>
        </div>
    </div>
</Fabric>));