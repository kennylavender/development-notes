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

#### When to use

When you want to apply opertions to a collection of objects.

#### Considerations
If memory is an issue because of thousands or millions of sub objects, consider using streams as they will be more memory effecient.


### Concatenation

Forming an object by adding new properties to an existing object.

#### Examples

- jQuery.fn allows you to extend jQuery
- adding properties via object.assign or the spread operator.

#### When to use

When you want to progressively build an object at runtime. Merging objects, creating update to immutable state.

#### Considerations

- Becareful mutating existing objects.
- Avoid is-a relationships.
- Avoid implicit dependencies
- Key collisions, last in wins.


### Delegation

When an object forwards or delegates to another object.

#### Examples

JavaScript Array and Object instance delegate to Array.prototype and Object.prototype

##### Dynamic Delgation Examples

Creating instances from a 'master' object. If the master is updated all instances update at runtime.

- Ivan Sutherlands Sketchpad ( 1962 )
- Photoshop smart objects

#### Considerations

- Trading memory for computation to lookup delegates.
- Need to define instance vs delegate state.
- Shared state is not instance safe. Share state on dynamic delegates is commonly but not always a bug.
- Avoid is-a relationships.
- Key collisions, last in wins.
- ES6 classes do no support dynamic delegates.
- keys will not be enumerable by Object.keys


## Sources
- [The Hidden Treasures of Object Composition](https://medium.com/javascript-scene/the-hidden-treasures-of-object-composition-60cd89480381)
