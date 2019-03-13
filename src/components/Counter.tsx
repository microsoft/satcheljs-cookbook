import * as React from 'react';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import getStore from '../store/store';

export default observer(function Cart() {
    const cartTotal = getStore().cart.books.reduce((acc, book) => acc + book.quantity, 0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    return (
        <div>
            <div>Cart total: {cartTotal}</div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    );
});
