import * as React from 'react';

const links: {[topic: string]: {[url: string]: string}} = {
    'Basics': {
        'simple-state-changes': 'Simple State Change',
        'bound-action-creator': 'Bound Action Creator',
        'store-data-inside-component': 'Using store data inside a component',
    },
    'Coordination': {
        'update-shared-state': 'Update Shared State Displayed in Different Component Subtrees',
        'independent-state-change': 'Independent State Changes in Multiple Stores',
        'related-state-change': 'Related State Changes in Multiple Stores',
    },
    'Side Effects': {
        'persist-update': 'Persisting an Update to a Server'
    },
    'Testing': {
        'mock-store': 'Mock the Store During Tests'
    }
};

export default () => (
<div>
    <ul>
    {Object.keys(links).map(topic => {
        return <li>
            {topic}
            <ul>
                {Object.keys(links[topic]).map(url => {
                const label = links[topic][url];
                return <li><a href={url}>{label}</a></li>;
                })}
            </ul>
        </li>;
    })}
    </ul>
</div>
);