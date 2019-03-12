import { mutator } from 'satcheljs';
import { beginBuying, finishBuying } from '../../actions/cart';
import getStore from '../../store/store';

mutator(beginBuying, () => {
    getStore().cart.isBuying = true;
});

mutator(finishBuying, () => {
    getStore().cart.isBuying = false;
});
