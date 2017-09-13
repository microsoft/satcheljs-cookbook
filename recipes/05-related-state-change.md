# Independent State Changes

This example shows how SatchelJS orchestrators coordinate related state changes

## Problem
You have an action that triggers a series of mutators that needs to happen in serial.

## Solution
Use an orchestrator to coordinate work.

## Discussion
Orchestrator cannot actually make changes to the store. All changes are done inside mutators. Orchestrators is a concept provided by SatchelJS to help code readers to understand more complex flows of a scenario. In the example, after the user adds multiple items into the shopping cart, she can then remove the entire entry from the cart by pressing the "Remove" button. The removal of an item in the shopping cart is an example of a complex action. In our example, the behavior specified is this: when the remove button is pressed, the selection goes to the first item in the shopping cart. Alternatively, when the shopping cart is empty from a removal action, the first book of the currently selected category is selected. Having this sort of business logic captured inside the orchestrator truly helps maintainability of the scenario. Anyone unfamiliar with this flow can simply refer to this one orchestrator to understand all the logic behind removing an item from a cart.

A few conventions that we've adopted here that is recommended:

1. mutators are structured exactly like the keys inside the schema of the state tree
2. many action creators that are related CAN be placed in one file
3. mixing and matching independent and related state change patterns is okay as long as they are aggregated inside an orchestrator
4. an action that is not expected to be called by outside the orchestrator are prefixed with a "_" to let other developers know not to call these from anywhere else

An example of an orchestrator that does dispatches out to multiple actions in order is [removeBookFromCart.ts](../src/orchestrators/removeBookFromCart.ts):

