# Accessing Store Data From Inside a Component

This example demonstrates how to access data from the SatchelJS state tree from inside a component. Also, an enzyme test is provided to show how a component test can be written using a Jasmine spy on the getStore() function.

## Problem
You want to display some piece of data inside the state tree inside a component.

## Solution
Simply use a *selector* function inside the render function of the component.

## Discussion
A *selector* in SatchelJS is any complex or simple function that retrieves a piece of the state tree. The function itself doesn't keep state. Keep these functions simple so that it is easy to create a spy to override these selector's behavior during tests.

