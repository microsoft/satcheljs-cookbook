import * as React from 'react';
import { shallow } from 'enzyme';

import AnimalList from '../components/AnimalList';
import * as store from '../store/store';

describe('<AnimalList />', () => {
    it('renders three item components given three items in the store', () => {
        spyOn(store, 'default').and.returnValue({
            items: [
                {name: 'name1', description: 'description1'},
                {name: 'name2', description: 'description2'},
                {name: 'name3', description: 'description3'},
            ]
        });

        const wrapper = shallow(<AnimalList />);

        expect(wrapper.find('li').length).toBe(3);
    });
});
