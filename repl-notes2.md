# Monads

```javascript
/*
WTF is a Functor?
* Something you can map over (actually, it's the map opperation which is  the functor)
* A mapping between categories which preserves structure
* Functors map WITH CONTEXT
* Ability to map from F(a) -> F(b) where F() reperesents the functor context (available morphisms/compositions)


WTF is a category?
* A collection of objects and arrows (morphisms) between objects
* Identity: for every X in C', X -> X
* Composition: for every A --f --> B -- g --> C in C', h: A -- h --> C

## WTF is a morphisg
* Roughly, a mapping and/or function thing.

In the category of types and functions: A -> B

* An object is a type
* A morphism is a function


In the Kleisli category:
* An object is a category
* A morphism is a functor


WTF is a mapping?
* For some input X, there exists some corresponding output Y


WTF is structure?
* The available compositions in the catogry
* Compositions are the combined morphisms, e.g., g: A -> B, f: B -> C, h: A -> C

const double = n => n * 2;

// theoretically, the same
const doubleS = {
  [1]: 2,
  [2]: 4,
  [3]: 6,
  [4]: 8
  // ...
}
```
