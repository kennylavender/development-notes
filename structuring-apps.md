UI components should not be concerned with application state
UI components should not be listening for async events to complete
Program logic should not be concerned with UI/DOM
Program logic should not be listening for async events to complete


1 UI-drawing/user-event handling code
2 State management - handled by pure functions applied to transactions (Redux transactions = action objects)
3 Side effect handling, network i/o, loggging, saving/loading to disk local storage local db, 
Redux-saga
Redux observables
3 should be happening async

Newbies - solve simple problems with complex code
Mid level devs - solve complex problems with complex code
Advanced devs - solve simple problems with simple code
Masters - solve complex problems with simple code
composition is THE KEY to solving complex problems with simple code.
