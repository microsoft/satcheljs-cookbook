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
        // * don't forget to dispatch the actionCreator
        dispatch(toggleButton());

        // Assert
        expect(myStore.flag).toBe(false);
    });
});