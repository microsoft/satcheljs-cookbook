# Simple State Change

[https://github.com/Microsoft/satcheljs-cookbook/tree/master/src/simple-state-changes]()

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

In this example, we demonstrate the basic APIs of SatchelJS. We will not use the convenience APIs available to illustrate all the pieces of Flux working together. To create an action message, we use an action creator function. It merely returns an object that represents the type of message along with a payload (which is just a blank object ```{}``` in this example). This object needs to be dispatched with ```dispatch()``` in order for SatchelJS to pass this action message along to all the mutators that are listening to this action. Finally, SatchelJS utilizes ```mobx-react``` for its component ```observer``` decorator. The state change causes the component to re-render when the observable state has been accessed inside the ```render()```. In fact, the entire state tree in SatchelJS is a large observable object: anything stored inside the state tree is automatically observable.
