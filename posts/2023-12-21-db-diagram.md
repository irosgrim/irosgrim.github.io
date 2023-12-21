---
title: DB Diagram app
date: 2023-12-21
author: "ion rosgrim"
---

A quick and effective way to understand the structure of a database is by examining its [Entity-Relationship (ER) Diagram](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model). 

I use [DBeaver](https://dbeaver.io/) and I find this feature, within it, very useful. 

When designing a database, being able to visualize its structure makes the process a lot easier.
In the beginning it's like sketching for a painting: add or delete columns, countless name changes, deciding on the data types, create foreign keys and set up indexes. Visualizing all these components in a diagram greatly simplifies the process, and the ability to export the structure as SQL is a pretty cool trick.

While such tools already exist, I wanted to create my own version as a personal exercise. 

The result is the `DB Diagram` tool, developed using React, Typescript, and, most importantly, [React Flow](https://reactflow.dev/). 

### Link to source code:

[https://github.com/irosgrim/db-diagram](https://github.com/irosgrim/db-diagram)

### In action:

[db-diagram](https://irosgrim.github.io/db-diagram)

