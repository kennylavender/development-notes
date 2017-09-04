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

## Functor
types that map, must be 

## Semi Group
A type thats has a concat method, concat must be associative. Because Semi groups combine and are associative they can be a monoid, but not all of them are because not all of them allow/follow the special member rule.

#### Examples of Semi Groups
__strings__

## Monads
