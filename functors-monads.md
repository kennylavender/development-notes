# Functors, Monads, Monoids

## Associativity Rule
Group combinations in any way, as long as the order of combinations is the same, the result is the same.

`x + ( y + z ) === ( x + y ) + z`

## Commutativity Rule
Combining in any order the result should be the same.

`y + z === z + y`

`y * z === z * y`

## Special Member Rule
sm = is a placeholder for the special member, special member can be any thing of the collection of things.
x combined with sm equals x, combine could any form of combination

`x + sm = x`

`x * sm = x`

## Monoid
Is a collection of things and a rule for combining those things.
The rule for combining those things must follow 2 meta rules: associativity and special member.

A monoid must contain a special member that when x combined witht the special member always equals x.
x + sm = x;

It does not have to satisfy communativity.

#### Examples of monoids
__strings__
- Thing: Strings
- Combine Rule: concat
- Special Member: emtpy string

__numbers__
- Thing: Numbers
- Combine Rule: addition
- Special Member: 0

## Functions under composition are a monoid
- Thing: function
- Combine: Composition
- Special Member: identity function, x => x

## Functor
types that map, must be 
## Semi Group
types that have concat, concat must be associative.

## Monads
