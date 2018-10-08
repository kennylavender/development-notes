* string
* number
* boolean
* null
* undefined
* object

> Note that the simple primitives (string, number, boolean, null, and undefined) are not themselves objects. null is sometimes referred to as an object type, but this misconception stems from a bug in the language which causes typeof null to return the string "object" incorrectly (and confusingly). In fact, null is its own primitive type.

> It's a common mis-statement that "everything in JavaScript is an object". This is clearly not true.

> By contrast, there are a few special object sub-types, which we can refer to as complex primitives.

> function is a sub-type of object (technically, a "callable object"). Functions in JS are said to be "first class" in that they are basically just normal objects (with callable behavior semantics bolted on), and so they can be handled like any other plain object.

> Arrays are also a form of objects, with extra behavior. The organization of contents in arrays is slightly more structured than for general objects.

source: https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md
