# Accessing Data from Component

[https://github.com/Microsoft/satcheljs-cookbook/tree/master/src/bound-action-creator]()

This example shows how to access data stored in the state tree from a component. It further shows how to make sure the components are still testable with the help of Enzyme's

## Problem
After creating a few action creators, you noticed that you're almost always needing to dispatch those action messages as they are being created. You want to combine these so that you are not having to type a lot redundant code.

## Solution
SatchelJS provides a set of convenience functions that we expect most developers will use. The API pointed out here is the ```actionCreator()``` function. The action creator function that is returned from this API will also call ```dispatch()``` saving some keystrokes.

## Discussion
A common error when creating Flux application is to forget to dispatch the action message that has been created. Even when everything else is hooked up properly (observer component, mutator, etc), nothing would change in the UI if the action message is not dispatched. To prevent this and to save some keystrokes, SatchelJS gives a simple API in the form of ```actionCreator()```.

Testing action creators are usually not necessary for a typical SatchelJS application. This is quite different than other similar Flux frameworks (like Redux). SatchelJS encourages most business logic to occur inside orchestrators such as side effects, network calls, and coordination of actions. We guarantee the simplicity of these action creators by keeping the shape of the action message as close to the arguments to the actionCreator function.
