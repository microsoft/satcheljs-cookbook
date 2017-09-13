# Accessing Store Data From Inside a Component

This example demonstrates how to access data from the SatchelJS state tree from inside a component. Also, an enzyme test is provided to show how a component test can be written using a Jasmine spy on the ```getStore()``` function.

## Problem
You want to display some piece of data inside the state tree inside a component.

## Solution
Simply use a *selector* function inside the render function of the component.

## Discussion
A *selector* in SatchelJS is a function that retrieves a piece of the state tree. The function itself doesn't keep state. Keep these functions simple so that it is easy to create a spy to override these selector's behavior during tests. An example is in [getSelectedBookId.ts](../src/selectors/getSelectedBookId.ts):

```typescript
function getSelectedBookId() {
    const store = getStore();
    return store.selectedBookId || store.cart.selectedBookId;
}
```

We encourage this so much that the ```createStore()``` function actually returns a selector rather than the store itself. This allows you to test the mutators, orchestrators, and components even if it accesses the root level of the store.

To use it, just call the selector inside your render function:

```jsx
export default class CategoryList extends React.Component<any, any> {
    render() {
        const store = getStore();
        const selectedCategoryId = getStore().selectedCategoryId;
        return (<div>
            {Object.keys(store.categories).map(categoryId => {
                const category = store.categories[categoryId];
                return (
                    <div
                        onClick={() => {selectCategory(categoryId);}}
                        key={categoryId}
                        className={cx({selected: selectedCategoryId == categoryId})}>
                        {category.name}
                    </div>
                );
            })}
        </div>)
    }
}
```