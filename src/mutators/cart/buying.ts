import {mutator} from 'satcheljs';
import {setBuying} from '../../actions/cart';
import getStore from '../../store/store';

mutator(setBuying, (msg) => {
    getStore().cart.isBuying = msg.buying;
});