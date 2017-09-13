# Independent State Changes

## Problem
You have multiple pieces of data inside the state tree that need to change based on the result of dispatching a single action message.

## Solution
Since mutators subscribe to actions, simply have two or more mutators listen for a single action to have a single action update two parts of the state tree.

## Discussion
In our example, when a category is selected, we call the `selectCategory()` action. There are two separate mutators that subscribe this action. The intended behavior is to have this action both trigger a selection of the category and also the first book in the category. This action creator is consumed inside `selectedCategoryId` and `selectedBookId` mutators. The first one sets the id of the selected category while the second one does a quick linear search for the first book in the books list that is in the selecte category.

For the purpose of clarity, we moved the action creators out into its own folder. Also, for consistency, we kept the `selectBook()` action a plain action rather than a `mutatorAction`. Note as well we try to keep our mutators in the same shape as the tree structure itself. The file  `mutators/selectedCategoryId.ts` matches the name of the key of the top level tree that stores the `selectedCategoryId`. This consistency is a convention that you adopt to make it clear which part of the tree is being mutated by the mutators. Also note that the mutators have to be registered inside some place like inside the `store.ts`.

The relevants files are here:
* [selectedBookId.ts](../src/mutators/selectedBookId.ts)
```typescript
mutator(selectCategory, (msg) => {
    const store = getStore();

    let found: string | null = null;

    Object.keys(store.books).forEach(bookId => {
        const book = store.books[bookId];
        if (book.categoryId == msg.id && !found) {
            found = bookId;
        }
    });

    store.selectedBookId = found;
});
```

* [selectedCategoryId.ts](../src/mutators/selectedCategoryId.ts)
```typescript
mutator(selectCategory, (msg) => {
    getStore().selectedCategoryId = msg.id;
});
```