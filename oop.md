# Class vs Prototypal Inheritance

OOP Inheritance highlights from Eric Elliot's medium articles

## Class Inheritance
A class is like a blueprint — a description of the object to be created. Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.

**duplicate**
In class inheritance, instances inherit from a blueprint (the class), and create sub-class relationships. In other words, you can’t use the class like you would use an instance. You can’t invoke instance methods on a class definition itself. You must first create an instance and then invoke methods on that instance.

In JavaScript, class inheritance is implemented on top of prototypal inheritance, but that does not mean that it does the same thing:

JavaScript’s class inheritance uses the prototype chain to wire the child `Constructor.prototype` to the parent `Constructor.prototype` for delegation. Usually, the `super()` constructor is also called. Those steps form single-ancestor parent/child hierarchies and create the tightest coupling available in OO design.

**Class inheritance creates parent/child object taxonomies as a side-effect.**

Class affords extending, ie parent/child heirarchies.

### Issues with parent/child heirarchies
* Inflexible hierarchy problem
* The fragile base class problem
* The tight coupling problem
* Duplication by necessity
* The Gorilla/banana problem

## Prototypal Inheritance
A prototype is a working object instance. Objects inherit directly from other objects.

Instances may be composed from many different source objects, allowing for easy selective inheritance and a **flat [[Prototype]] delegation** hierarchy. In other words, class taxonomies are not an automatic side-effect of prototypal OO: a critical distinction.

### Types of prototypal inheritance
#### Prototype delegaition/ Inheritance
In JavaScript, an object may have a link to a prototype for delegation. If a property is not found on the object, the lookup is delegated to the delegate prototype, which may have a link to its own delegate prototype, and so on up the chain until you arrive at `Object.prototype`, which is the root delegate. This is the prototype that gets hooked up when you attach to a `Constructor.prototype` and instantiate with `new`. You can also use `Object.create()` for this purpose, and even mix this technique with concatenation in order to flatten multiple prototypes to a single delegate, or extend the object instance after creation.
#### Functional Inheritance
In JavaScript, any function can create an object. When that function is not a constructor (or `class`), it’s called a factory function. Functional inheritance works by producing an object from a factory, and extending the produced object by assigning properties to it directly (using concatenative inheritance).
#### Concatenative Inheritance
The process of inheriting features directly from one object to another by copying the source objects properties. In JavaScript, source prototypes are commonly referred to as mixins.

Delegate prototypes aren’t the great alternative to class inheritance — object composition is.



[Eric Elliot Comment](https://medium.com/@_ericelliott/im-not-surprised-at-all-but-class-inheritance-is-not-what-is-giving-you-your-features-2043b3bae064)
Just because you’re using the class keyword doesn’t mean you’re doing class inheritance.
Likewise, just because you’re using Object.assign() or the prototype chain doesn’t mean you’re doing feature-based object composition. You can create the same brittle taxonomies using both delegation and concatenation.
The distinction isn’t in the tools and techniques. It’s in the relationships you create: is-a vs has-a or uses-a.
That said, class affords extends taxonomies like balls afford throwing and chairs afford sitting. Object.assign() affords composition. Affordances are important. They shape the way we think about problems.
My advice: Use the tools that most afford the kind of thinking you want to encourage in your project. Don’t try to drive a screw with a hammer.

## The **new** keyword
Create a new instance
Bind `this` to the new instance
Reference the new object’s delegate [[Prototype]] to the object referenced by the constructor function’s `prototype` property.
Reference the new object’s .constructor property to the constructor that was invoked.
Names the object type after the constructor, which you’ll notice mostly in the debugging console. You’ll see `[Object Foo]`, for example, instead of `[Object object]`.
Allows `instanceof` to check whether or not an object’s prototype reference is the same object referenced by the .prototype property of the constructor.

WAT? `new` also does some weird stuff to return values. If you try to return a primitive, it won’t work. If you return any other arbitrary object, that does work, but `this` gets thrown away, breaking all references to it (including `.call()` and `.apply()`), and breaking the link to the constructor’s `.prototype` reference.

## Instance of
Instead, it does an identity check on the prototype object, and it’s easily fooled. It won’t work across execution contexts

It’s also easily tricked into false positives (and more commonly) false negatives from another source. Since it’s an identity check against a target object’s `.prototype` property, it can lead to strange things:

`instanceof` limits the reusability of your code, and potentially introduces bugs into the programs that use your code.

# Sources
* [Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
* [Common Misconceptions About Inheritance in JavaScript](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a)
