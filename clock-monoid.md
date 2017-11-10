```javascript
// build clock monoid
// clock(v) => {}
// clock.empty() => 12
// Algebra function - pure function which maps every value from set A -> set B
// hidden figures movie
// curry howard isomporphism
// everything in formal logic can be expressed in lamda calculus and back.
// everything you can express in lamda calculus you can express in universal turing machines and back.

const Clock = (val = 0, v = Math.abs(val) % Clock.empty()) => ({
  valueOf: () => v,
  concat: y => Clock(v + y),
  toString: () => `Clock(${v})`
});

Clock.empty = () => 12;
Clock.of = Clock;

const clock = Clock(15);

{
  const x = 7;
  console.log(
  	Clock(x).toString(),
    Clock(x).concat(Clock.empty()).toString()
  );
}
```
