import {orchestrator} from 'satcheljs';
import {beginBuying, finishBuying, buy} from '../actions/cart';
import getStore from '../store/store';
import makePurchase from '../services/makePurchase';

orchestrator(buy, async() => {
    const store = getStore();
    beginBuying();
    await makePurchase(store.cart.books);
    finishBuying();
});