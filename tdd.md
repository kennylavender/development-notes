# TDD
Test Driven Development highlights from Eric Elliot's [medium articles](#sources)

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

- What component/unit/function/thing is being tested? ( describe )
- What behavior of the component is being tested? ( given, should )
- What are the actual results?
- What are the expected results?
- How can actual results be reproduced?

### Test setup/teardown.
For unit tests, do not use functions frameworks functions like beforeTest, afterTest, as they encourage side effects. Instead use factory, and setup function inside of each test that create new data and instances so that their are no side effects that happen between tests.

beforeTest and afterTest functions should only be used for functional/integration tests as needed.

### Test Clarity ( R.I.T.E )
- **R**eadable
- **I**solated or **I**ntegrated
- **T**horough - Cover edge cases, edges of the domain ( initial value, empty, very large, very small, one value from each edge ).
- **E**xplicit - Should be able to uderstand everything you need to know about the test, without looking at anything but the test. Avoid Magic.
 
### Test libraries and frameworks
Keep tests simple with a simple framework or library or use simple vanilla js. BDD style frameworks add complexity.

## Why TDD

### Cost of skipping TDD
- TDD reduces bug density aprox 40-80%, depending on the project.
- Software built without TDD takes longer, costs more, and has more bugs.
- How much more expensive is it to fix a bug in production vs TDD time? 15x, 100x more than design time.
- You save about 30%+ of total cost of development + maintenance.

### Ways they help
- Design aid, gives clearer perspective on the ideal api design.
- Feature documentation
- 
- **Quality assurance:** 
- **Continuous Delivery Aid:**

## Types of tests

### Unit
Ensure that individual components of the app work as expected. Assertions test the component API. Realtime feedback while developing.

### Functional
Ensure that the app works as expected from the user’s perspective. Assertions primarily test the user interface.

### Integration
Ensure that component collaborations work as expected. Assertions may test component API, UI, or side-effects (such as database I/O, logging, etc…)


## Sources
- [TDD the RITE Way](https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3)
- [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)
- [The Outrageous Cost of Skipping TDD & Code Reviews](https://medium.com/javascript-scene/the-outrageous-cost-of-skipping-tdd-code-reviews-57887064c412)
