/**
 Dynamic Delegation

 Directions:
 Copy this into the babel repl or save it to a file and run it with node.
*/

console.clear()

console.log("\n", 'Setting prototype', "\n\n")

{
  // ES6 Class
  console.log('ES6 Class')
  
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
}

console.log("\n")

{
  // Constructor Function
  console.log('Constructor Function')
  
  function Foo () {}
  Foo.prototype.bar = 'original'
  
  function Bar () {}
  Bar.prototype = Object.create(Foo.prototype)

  const myBar = new Bar()

  console.log(myBar, myBar.bar)

  Bar.prototype = { bar: 'new' }

  console.log(myBar, myBar.bar)
}

console.log("\n")

{
  // Object Delegation
  console.log('Object Delegation')
 
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
  // ES6 Class
  console.log('ES6 Class')
  
  class Foo {
    constructor() {
      this.bar = 'original'
    }
  }
  
  class Bar extends Foo {}

  const myBar = new Bar()

  console.log(myBar, myBar.bar)

  Object.setPrototypeOf(Bar, { bar: 'new' })

  console.log(myBar, myBar.bar)
}

console.log("\n")

{
  // Constructor Function
  console.log('Constructor Function')
  
  function Foo () {}
  Foo.prototype.bar = 'original'
  
  function Bar () {}
  Bar.prototype = Foo.prototype

  const myBar = new Bar()

  console.log(myBar, myBar.bar)

  Object.setPrototypeOf(Bar, { bar: 'new' })

  console.log(myBar, myBar.bar)
}

console.log("\n")

{
  // Object Delegation
  console.log('Object Delegation')
 
  const foo = { bar: 'original' }
  
  const bar = Object.create(foo)
  
  const myBar = Object.create(bar)

  console.log(myBar, myBar.bar)

  Object.setPrototypeOf(bar, { bar: 'new' })

  console.log(myBar, myBar.bar)
}

console.log("\n")
