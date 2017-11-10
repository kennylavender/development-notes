# Transducers

## Why Transducers

- There composable
- evaluate 1 object at a time.


Random notes, need to be fixed up.

```javascript

const result = [1,2,3,4,5]
.filter(x => x % 2)
.map(x => x * 2)
.reduce((a, b) => a + b);

console.log(
  result
);

const map = transform => reducer => (a, b, ...rest) => reducer(a, transform(b, ...rest));

const filter = predicate => reducer => (acc, value) => predicate(value) ? reducer(acc, value) : acc;

const v = map(x => x * 2)((acc, v) => [...acc, v])([],23,324,34,4)

const isEven = filter(x => x % 2 === 0);
const double = map(x => x * 2);

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 

const doubleEvens = compose(double, isEven);

const sum = (acc, v) => acc + v;

const r1 = [1,2,3,4,5,].reduce(doubleEvens(sum), 0);

console.log(r1);
```

```
const map = xform => step => (a = step(), c, ...rest) => step(a, xform(c), ...rest);
const filter = predicate => step => (a = step(), c, ...rest) => predicate(c) ? step(a, c, ...rest) : a;
const transduce = (step, initial) => xform => (foldable = initial) => foldable.reduce(xform(step), initial);
const concatArray = (a = [], c) => a.concat([c]);
const toArray = transduce(concatArray, []);

const compose = (...fns) => x => fns.reduceRight((y,f) => f(y), x);

const double = n => n * 2;
const increment = n => n  + 1;
const isEven = n => n % 2 === 0;



const filterEven = filter(isEven);

const mapDouble = map(double);
const mapIncrement = map(increment);

const doubleThenIncrement = compose(
  mapIncrement,
  mapDouble
);


const arr = [1, 2, 3, 4, 5, 6];




const doubleEvens = compose(
  filter(isEven),
  map(double),
);



const arr2 = toArray(doubleEvens)();
```
