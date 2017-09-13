# Simple State Change

This example shows how to create a basic state change with:

* actionCreator that creates action messages
* dispatching action message
* mutator to receive this message and change the state
* observer to update views accordingly

## Problem

You have a simple state change that needs to be reflected in the view.

## Solution

Use a mutator to change the state. The component observer will automatically cause React to re-render. To accomplish this, you'll need to:

1. create an action message
2. dispatch this action message
3. set up a mutator that would listen to this action message while modifying the state
4. component observer will pick up the change and re-render

## Discussion

In [selectedBookId.ts](../src/mutators/selectedBookId.ts) we demonstrate the basic APIs of SatchelJS. We will not use the convenience APIs available to illustrate all the pieces of Flux working together.

To create an action message, we use an action creator function.

```typescript
action('selectBook', (id: string) => ({id}));
```

`action()` returns a function that can be subscribed by _mutators_ and _orchestrators_. In addition, it will also dispatch the action when the function is called. If you are more used to the tradition action creators that merely returns an **message object** that represents the type of message along with a payload then you can use the `actionCreator()` API instead. **Note** messages created by `actionCreator()` need to be dispatched with ```dispatch()``` in order for SatchelJS to pass this action message along to all the mutators that are listening to this action.

Finally, SatchelJS utilizes ```mobx-react``` for its component ```observer``` decorator. The state change causes the component to re-render when the observable state has been accessed inside the ```render()```. In fact, the entire state tree in SatchelJS is a large observable object: anything stored inside the state tree is automatically observable. Because this pattern is so often use, most developers will choose to write actions with `action()` API.
