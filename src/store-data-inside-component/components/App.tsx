import * as React from 'react';
import {observer} from 'mobx-react';
import getStore from '../store/store';
import AnimalList from './AnimalList';
import {Fabric} from 'office-ui-fabric-react/lib/components/Fabric';

export default observer(() => (
<Fabric>
    <AnimalList />
</Fabric>));