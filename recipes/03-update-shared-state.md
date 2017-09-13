# Update Shared State Across Different Component Subtrees

## Problem
You have multiple parts of your UI that need to make changes to a shared state. This is the classic example from Facebook's Flux architecture. Their example shows a single counter that needs to be incremented (maybe by different amounts) by separate parts of the application.

## Solution
Use the SatchelJS state tree. Then simply update the shared state by dispatching actions of the same type from muliple places. Since there is only one mutator subscribing the action being dispatched, only one kind of mutation happens at a time.

## Discussion
Flux, at its heart, requires a bit of shared state outside of the component tree. It also requires the use of a dispatcher that coordinates action messages. Implementing these two parts in SatchelJS are the dispatching action creator and the mutator. This means any component file can simply have an import of the action creator and begin dispatching action messages. The shared state tree is observable, and is observed by one or more components which would cause those components to re-render.

Selection scenarios within our example illustrate this point. For example, selecting a book inside the book list will deselect the item inside the cart and vice versa. This is needed so that the detail description for the book is shared between the cart and the book list [src/mutators/cart/selectedBookId.ts](../src/mutators/cart/selectedBookId.ts):

```typescript
mutator(selectBook, (msg) => {
    getStore().cart.selectedBookId = null;
});

mutator(selectBookInCart, (msg) => {
    getStore().cart.selectedBookId = msg.bookId;
});
```

One single state is being acted on by two separate action. Placing these two mutators in a single file helps code maintainers see what actions could affect this `store.cart.selectedBookId` field.
