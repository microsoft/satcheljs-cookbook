# Side Effects: Persist Update to Server

## Problem
You have finished the work on client side and need to persist some state on a server via an API

## Solution
Use an orchestrator to call these service calls.

## Discussion
Orchestrator is the only place within the SatchelJS library that allows for asynchronous calls. This is the perfect place to call into those network calls or asynchronous side effect function calls. Since orchestrators themselves cannot modify the state, it forces developers to separate coordination logic (business logic) from the store update logic.