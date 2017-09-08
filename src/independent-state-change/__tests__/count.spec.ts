import count from '../actions/count';
import {dispatch} from 'satcheljs';
import * as store from '../store/store';

describe('count', () => {
    it('should increment count if no parameter is given', () => {
        // Arrange
        // * create a spy that overrides the getStore() selector
        let myStore = { counter: 0 };
        spyOn(store, 'default').and.returnValue(myStore);

        // Act
        // * don't need to dispatch the actionCreator - because it is a boundActionCreator
        count();

        // Assert
        expect(myStore.counter).toBe(1);
    });

    it('should increment count by parameter', () => {
        // Arrange
        // * create a spy that overrides the getStore() selector
        let myStore = { counter: 0 };
        spyOn(store, 'default').and.returnValue(myStore);

        // Act
        // * don't need to dispatch the actionCreator - because it is a boundActionCreator
        count(5);

        // Assert
        expect(myStore.counter).toBe(5);
    });
});