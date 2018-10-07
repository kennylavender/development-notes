```
function Foo() {}
Foo.prototype.aFooeyFunction = () => { console.log('I am a fooey method') }

const bar = { a : 'a' }
Foo.prototype = bar;

const baz = Object.create(bar)

if (baz instanceof Foo) {
  // instanceOf false positive
  // baz instanceof Foo says its a Foo
  // but trying to use foo methods
  // results in oops.
  try {
    baz.aFooeyFunction()
  } catch(e) {
    console.log('baz: oops I guess I am not a foo')
  }
}


// Why do we use instanceof
// 1. To see if an object is of a certain type ( has certain properties or methods )
// 2. To see if 2 or more objects are the same type ( have the same properties or methods )

```

```
class User {
  constructor ({userName, avatar}) {
    this.userName = userName;
    this.avatar = avatar;
  }
}

const currentUser = new User({
  userName: 'Foo',
  avatar: 'foo.png'
});
User.prototype = {};
console.log(
  currentUser instanceof User, // <-- false -- Oops!
// But it clearly has the correct shape:
  // { avatar: "foo.png", userName: "Foo" }
  currentUser
);
```
