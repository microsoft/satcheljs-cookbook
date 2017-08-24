import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import getStore from '../store/store';
import {List} from 'office-ui-fabric-react/lib/components/List';
import {Fabric} from 'office-ui-fabric-react/lib/components/Fabric';

export default observer(() => (
<Fabric>
    <List
        items={ getStore().items }
        onRenderCell={ (item, index) => (
        <div>
            <strong>{ `Animal ${index}` }</strong>
            <div>{ item.name }</div>
            <div>{ item.description }</div>
       </div>
        ) }
    />
</Fabric>));