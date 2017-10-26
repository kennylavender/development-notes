# Functors, Monads, Monoids

## Associativity Rule
Group combinations in any way, as long as the order of combinations is the same, the result is the same.

`x + ( y + z ) === ( x + y ) + z`

## Commutativity Rule
Combining in any order the result is the same.

`y + z === z + y`

`y * z === z * y`

## Special Member Rule - unit
__Note:__ This might have an actual name, I don't know yet, so calling it special member for now.
Might also be called a neutral identity.

sm = is a placeholder for the special member, special member can be any thing of the collection of things.
`x combined with sm equals x`, combine could any form of combination

`x + sm = x`

`x * sm = x`

## Semi Group
A type that implements a concat method. The concat method must be associative. Because Semi groups combine and are associative they can be a monoid, but not all of them are because not all of them allow/follow the special member rule.

## Monoid
Is a collection of things and a rule for combining those things.
The rule for combining those things must follow 2 meta rules: 

- associativity rule
- special member rule

It does not have to satisfy commutativity, but sometimes monoids do.

#### Examples of monoids
__strings__
- Thing: Strings
- Combine Rule: concat
- unit: ""
- empty: ""

__numbers__
- Thing: Numbers
- Combine Rule: add
- unit: 0
- empty: 0

__numbers__
- Thing: Numbers
- Combine Rule: multiply
- unit: 1
- empty: 0

__12 hour clock__
- Thing: Hours
- Combine Rule: (x + y) % 12
- unit: 0
- empty: 12

### Functions under composition are a monoid

- Thing: function
- Combine Rule: compose
- Special Member: identity function, `const id = x => x`




## Functor
A type that implements map.

- A mapping between categories which preserves structure
- Functors map WITH CONTEXT
- Ability to map from F(a) -> F(b) where F() reperesents the functor context (available morphisms/compositions)

#### Functor Laws
- Identity
- Composition
Since a functor is a mapping between categories, functors must respect identity and composition. Together, they’re known as the functor laws.


## Endofunctor
Endofunctors only map from A -> A

## Category.
* A collection of objects and arrows (morphisms) between objects
* Identity: for every X in C', X -> X
* Composition: for every A --f --> B -- g --> C in C', h: A -- h --> C

## Morphism
* Roughly, a mapping and/or function thing.

In the category of types and functions: A -> B

* An object is a type
* A morphism is a function

### Kleisli Category
* An object is a category
* A morphism is a functor

## Mapping
* For some input X, there exists some corresponding output Y

## Structure
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

## Monad
What is a Monad?
A monad implements .of and .chain
of and chain
A chainable functor. (Map + computation)

A monad is a way of composing functions that require context in addition to the return value, such as computation, branching, or I/O.

#### Monad Laws
- Left identity: unit(x).chain(f) ==== f(x)
- Right identity: m.chain(unit) ==== m
- Associativity: m.chain(f).chain(g) ==== m.chain(x => f(x).chain(g)

## Methods
### .map

```
F(a) => F(b)
M(a) => M(b)
```

The map method has 2 laws. identity and function composition law.


__identity rule__ ( special member for functions )
```javascript
 const id = x => x;
 F.map(id) === F;
```
__composition rule__ ( combine rule for functions )
```javascript
const g = x => x + 1;
const f = x => x * 2;
F.map(g).map(f) === F.map(compose(f, g))
```
The map method must preserve structure, meaning returns the same type of functor.
```javascript
Array(Number) => Array(Object) // OK
Array(Number) => Observable(Object) // Not ok
```

The map/fmap signature
```
// fmap Functor f ~> (a => b) => f(a) => f(b)
```


### .flatten
```
M(M(a)) => M(a)
M(a) => a
```
AKA: join

### .chain
Flatten and map
```
M(M(a)) => M(b)
```
AKA: flatmap, bind, >>==, shove

### .fold
Think of fold as a removal of a value from a type. fold may take a differnt argument depending on the type.
.chain and and flatten are types of folders I think?

### .of
Lifts a value into a type. avoids constructor complexities and allows you to place a value directly into a type.
```
a => M(a)
a => F(a)
```

AKA: lift ( Type lift )

## Insights

### Composition

> Composition is the way to control and build complexity in apps.

From Erics article: 

> the essence of software development is composition

- functions map: `a => b` and let you compose functions of type `a => b`

- functors map with context: `Functor(a) => Functor(b)`, which lets you compose functions `F(a) => F(b)`

- Flatten and map with context: `Monad(Monad(a)) => Monad(b)`, which lets you compose lifting functions `a => F(b)`

> Function composition creates function pipelines that your data flows through. You put some input in the first stage of the pipeline, and some data pops out of the last stage of the pipeline, transformed. But for that to work, each stage of the pipeline must be expecting the data type that the previous stage returns.

## Sources
- [Monads made simple](https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8) - Eric Elliot 
- [Functors and Categories](https://medium.com/javascript-scene/functors-categories-61e031bac53f) - Eric Elliot
- [Brian Lansdorf Egghead videos](https://egghead.io/instructors/brian-lonsdorf)- Brian Lonsdorf
- [Mostly Adequate Guide](https://www.gitbook.com/book/drboolean/mostly-adequate-guide/details) - Brian Lonsdorf
- [Brian Beckman Monads](https://www.youtube.com/watch?v=ZhuHCtR3xq8&t=1035s) - Brain Beckman + Channel 9

