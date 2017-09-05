# Functors, Monads, Monoids

## Associativity Rule
Group combinations in any way, as long as the order of combinations is the same, the result is the same.

`x + ( y + z ) === ( x + y ) + z`

## Commutativity Rule
Combining in any order the result is the same.

`y + z === z + y`

`y * z === z * y`

## Special Member Rule
__Note:__ This might have an actual name, I don't know yet, so calling it special member for now.
Might also be called a neutral identity.

sm = is a placeholder for the special member, special member can be any thing of the collection of things.
`x combined with sm equals x`, combine could any form of combination

`x + sm = x`

`x * sm = x`

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
- Special Member: emtpy string

__numbers__
- Thing: Numbers
- Combine Rule: add
- Special Member: 0

__numbers__
- Thing: Numbers
- Combine Rule: multiply
- Special Member: 0

## Functions under composition are a monoid
__Notes__: functions under composition might have a special name, I just don't know it.

- Thing: function
- Combine Rule: compose
- Special Member: identity function, `const id = x => x`



## Semi Group
A type that implements a concat method. The concat method must be associative. Because Semi groups combine and are associative they can be a monoid, but not all of them are because not all of them allow/follow the special member rule.


## Functor
A type that implements map. The map method must follow the identity rule composition rules.

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

Functors are allowed to map its value(s) from A -> A or A -> B


Functor = maps from A -> B
Endofunctor = maps from A -> A
```javascript
// Functor laws
// id = x => x;
const id = x => x;
{
  const X = [20];
  const a = X.map(id);
  const b = X;
  console.log(a[0], b[0]);
}

// Compositionu law
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v) ,x);

const g = x => x + 1;
const f = x => x * 2;
{
  const X = [20];
  const a = X.map(g).map(f);
  const b = X.map(compose(f, g));
  console.log(a[0], b[0]);
}
```
## Monads
What is a Monad?
A chainable functor. (Map + computation)

## .fold
think of fold as a removal of a value from a type. fold may take a differnt argument depending on the type.
