import getStore from '../store/store';

export default function getSelectedBookId() {
    const store = getStore();
    return store.selectedBookId || store.cart.selectedBookId;
}
