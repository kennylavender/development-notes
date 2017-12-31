# Object Composition

Object composition is the process of creating a composite object.

## Composite Object

An object formed from primitive and/or other composite objects.

## Forms of Object Composition

These forms of composition are not mutually exclusive.

### Aggregation

When you form an object that is an enumerable collection of sub objects. Each subobject must retain its own identity so that it can be destructured from the aggregate without loosing any of the sub objects information.

#### Examples

Arrays, Maps, Sets, Graphs, Trees, DOM nodes


### Concatenation

Forming an object by adding new properties to an existing object.

#### Examples

- jQuery.fn allows you to extend jQuery
- adding properties via object.assign or the spread operator.


### Delegation

When an object forwards or delegates to another object.

### Examples

- JavaScript Array and Object instance delegate to Array.prototype and Object.prototype

#### Dynamic Delgation

- Ivan Sutherlands Sketchpad ( 1962 )
- Photoshop smart objects


## Sources
- [The Hidden Treasures of Object Composition](https://medium.com/javascript-scene/the-hidden-treasures-of-object-composition-60cd89480381)
