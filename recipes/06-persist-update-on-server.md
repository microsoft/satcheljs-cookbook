# Side Effects: Persist Update to Server

## Problem
You have finished the work on client side and need to persist some state on a server via an API

## Solution
Use an orchestrator to call these service calls.

## Discussion
Orchestrator is the only place within the SatchelJS library that allows for asynchronous calls. This is the perfect place to call into those network calls or asynchronous side effect function calls. Since orchestrators themselves cannot modify the state, it forces developers to separate coordination logic (business logic) from the store update logic. Just like the `removeBookFromCart` orchestrator from the previous recipe, the [`buy`](../src/orchestrators/buy.ts) orchestrator coordinates the asynchronous "network call" `makePurchase` and various actions. One of the actions, `finishBuying` is subscribed by many mutators to complete the purchase flow. The new async / await pair of API provided by the newer browser & Typescript itself is a nice way to write these orchestrator:

```typescript
orchestrator(buy, async() => {
    const store = getStore();
    beginBuying();
    await makePurchase(store.cart.books);
    finishBuying();
});
```


