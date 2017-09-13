import {orchestrator} from 'satcheljs';
import {setBuying, buy} from '../actions/cart';
import getStore from '../store/store';
import makePurchase from '../services/makePurchase';

orchestrator(buy, async() => {
    const store = getStore();
    setBuying(true);
    await makePurchase(store.cart.books);
    setBuying(false);
});