# Independent State Changes
[https://github.com/Microsoft/satcheljs-cookbook/tree/master/src/independent-state-change]()

This example shows the way Flux deals with independent state changes given a single action.

## Problem
You have multiple pieces of data inside the state tree that need to change based on the result of dispatching a single action message.

## Solution
Since mutators subscribe to actions, simply have two or more mutators listen for a single action to have a single action update two parts of the state tree.

## Discussion
