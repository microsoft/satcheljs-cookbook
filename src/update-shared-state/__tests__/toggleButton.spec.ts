import toggleButton from '../actions/toggleButton';
import {dispatch} from 'satcheljs';
import * as store from '../store/store';

describe('toggleButton', () => {
    it('should toggle the store flag', () => {
        // Arrange
        // * create a spy that overrides the getStore() selector
        let myStore = { flag: true };
        spyOn(store, 'default').and.returnValue(myStore);

        // Act
        // * don't need to dispatch the actionCreator - because it is a boundActionCreator
        toggleButton();

        // Assert
        expect(myStore.flag).toBe(false);
    });
});