---
title: Frontend API mocking strategy
date: 2025-06-04
author: "ion rosgrim"
---

Is there a way to build a fully functioning frontend that consumes APIs but doesn't break when there's no connection or the server is down?

Or maybe you want to run automated tests for your frontend while keeping it completely decoupled from any backend?

I've spent countless hours trying all kinds of solutions and while I’ve already achieved this through other means, I’ve found that the hardest part is always generating the data because most of the time, data from one API call is tightly coupled with data from others, so you end up needing logic to maintain those relationships.

As an exercise, I built a request recorder tool that acts as a transparent proxy between the frontend and backend APIs.
It can record actual fetch requests, store them in [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), and then replay them from storage when running in "fake" mode.

This could be extended further, for example, the request interceptor could fake ([faker.js?](https://fakerjs.dev/)) specific properties (not implemented yet).

The recordings can be exported/imported as JSON files.



### Link to source code and example:

[request-recorder](https://github.com/irosgrim/request-recorder/)

### See it in action:

[Basic React.js app using the Pokemon API](https://irosgrim.github.io/request-recorder/)  


https://pokeapi.co