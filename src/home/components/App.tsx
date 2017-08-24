import * as React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib/components/Fabric';

const links: {[url: string]: string} = {
    'public/simple-state-changes.html': 'Simple State Change',
    'public/bound-action-creator.html': 'Bound Action Creator',
    'public/store-data-inside-component.html': 'Using store data inside a component',
/*Packaging a control for reuse
Cooridinate independent state changes in multiple stores
Cooridinate chained state changes in multiple stores
Normalized state
Embedded state
Persisting an update to a server
Handling errors from a service call
How to mock the store during tests'*/
};

export default () => (
<Fabric>
    <ul>
    {Object.keys(links).map(url => (
        <li><a href={url}>{links[url]}</a></li>
    ))}
    </ul>
</Fabric>
);