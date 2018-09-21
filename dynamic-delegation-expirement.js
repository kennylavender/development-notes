/**
 Dynamic Delegation
 Proof that dynamic delgation does not work with es5 constructor functions or es6 classes.
 I might have issues around the es5 constructor functions, I have not used them in a long time.
 
 Directions:
 Copy this into the babel repl or save it to a file and run it with node.
*/

console.clear()

console.log("\n", 'Setting prototype', "\n\n")

{
  // Class
  console.log('Class')
  
  class Foo {
    constructor() {
      this.bar = 'original'
    }
  }
  
  class Bar extends Foo {}

  const myBar = new Bar()

  console.log(myBar, myBar.bar)

  Bar.prototype = { bar: 'new' }

  console.log(myBar, myBar.bar)
  console.log("\n")
}
{
  // es5 contructor function
  console.log('es5 Class')
  
  function Foo () {}
  Foo.prototype.bar = 'original'
  
  function Bar () {}
  Bar.prototype = Foo.prototype

  const myBar = new Bar()

  console.log(myBar, myBar.bar)

  Bar.prototype = { bar: 'new' }

  console.log(myBar, myBar.bar)
  console.log("\n")
}

{
  // Object Delegeation
  console.log('Object.create')
  const foo = { bar: 'original' }
  
  const bar = Object.create(foo)
  
  const myBar = Object.create(bar)

  console.log(myBar, myBar.bar)

  bar.prototype = { bar: 'new' }

  console.log(myBar, myBar.bar)
  console.log("\n")
}


console.log("\n Setting __proto__ \n\n")

{
  // Class Dynamic Delgation Attempt
  console.log('Class')
  
  class Foo {
    constructor() {
      this.bar = 'original'
    }
  }
  
  class Bar extends Foo {}

  const myBar = new Bar()

  console.log(myBar, myBar.bar)

  Bar.__proto__ = { bar: 'new' }

  console.log(myBar, myBar.bar)
  console.log("\n")
}

{
  // es5 contructor function
  console.log('es5 Class')
  
  function Foo () {}
  Foo.prototype.bar = 'original'
  
  function Bar () {}
  Bar.prototype = Foo.prototype

  const myBar = new Bar()

  console.log(myBar, myBar.bar)

  Bar.__proto__ = { bar: 'new' }

  console.log(myBar, myBar.bar)
  console.log("\n")
}

{
  // Object Delegeation
  console.log('Object.create')
  const foo = { bar: 'original' }
  
  const bar = Object.create(foo)
  
  const myBar = Object.create(bar)

  console.log(myBar, myBar.bar)

  bar.__proto__ = { bar: 'new' }

  console.log(myBar, myBar.bar)
  console.log("\n")
}