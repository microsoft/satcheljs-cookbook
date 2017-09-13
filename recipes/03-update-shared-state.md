# Update Shared State Across Different Component Subtrees

This example demonstrates the power of the shared state tree. Having a single state tree means even if multiple event sources call an action, it would still update the same bit of data consistently.

## Problem
There are multiple parts of your UI that need to make changes to a shared state. This is the classic example from Facebook's Flux architecture. The example shows a single counter that needs to be incremented (maybe by different amounts) by separate parts of the application.

## Solution
Use the SatchelJS state tree. Then simply update the shared state by dispatching actions of the same type from muliple places. Since there is only one mutator subscribing the action being dispatched, only one kind of mutation happens at a time.

## Discussion
Flux, at its heart, requires a bit of shared state outside of the component tree. It also requires the use of a dispatcher that coordinates action messages. Implementing these two parts in SatchelJS are the dispatching action creator and the mutator. This means any component file can simply have an import of the action creator and begin dispatching action messages. The shared state tree is observable, and is observed by one or more components which would cause those components to re-render.