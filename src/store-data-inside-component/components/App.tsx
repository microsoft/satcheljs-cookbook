import * as React from 'react';
import {observer} from 'mobx-react';
import getStore from '../store/store';
import AnimalList from './AnimalList';

export default observer(() => (
<div>
    <AnimalList />
</div>));