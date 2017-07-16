# TDD
Test Driven development highlights from Eric Elliot's [medium articles](#sources)

## Process

### Red, Green Refactor
- Start with a falsifiable stated requirement, e.g., double() should take a number x and return the product of x and 2.
- Write a test to prove that the stated requirement is satisfied.
- Watch the test fail. This proves that the test won’t produce a false positive, and that the added code is what makes the test pass.
- Add the implementation code.
- Watch the test pass.
- Look over the code and improve it, if necessary, relying on the test to prove that the improved code continues to work as expected.

## Test Format
### 5 Questions Every Unit Test Must Answer
A failing test should read like a good bug report. That means that answers to the following questions should be obvious at a glance:

- What component is being tested?
- What behavior of the component is being tested (test setup / givens)?
- What are the actual results?
- What are the expected results?
- How can actual results be reproduced?

### Test setup/teardown.
Do not use functions frameworks functions like beforeTest, afterTest, as they encourage side effects. Instead use factory, and setup function inside of each test that create new data and instances so that their are no side effects that happen between tests.

### Test Clarity ( R.I.T.E )
- **R**eadable
- **I**solated or **I**ntegrated
- **T**horough
- **E**xplicit
 
### Test libraries and frameworks
Keep tests simple with a simple framework or library or use simple vanilla js. BDD style frameworks add complexity.

## Why TDD
### Cost of skipping TDD
- TDD reduces bug density aprox 40-80%, depending on the project.
- Software built without TDD takes longer, costs more, and has more bugs.
## Types of tests

### Unit
### Functional
### Integration

## Sources
- [TDD the RITE Way](https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3)
- [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)
- [The Outrageous Cost of Skipping TDD & Code Reviews](https://medium.com/javascript-scene/the-outrageous-cost-of-skipping-tdd-code-reviews-57887064c412)
