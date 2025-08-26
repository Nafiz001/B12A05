1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans. 'getElementById' selects a single element by its unique id. 'getElementsByClassName' selects a live collection of all elements that share a given class name. 'querySelector' selects the first single element that matches a CSS selector. 'querySelectorAll' selects a collection of all elements that match a CSS selector.

2.How do you create and insert a new element into the DOM?
Ans. You create a new element with 'document.createElement('tag')', modify its properties, and then insert it using a method like 'parentElement.appendChild(newElement)'.

3.What is Event Bubbling and how does it work?
Ans. Event Bubbling is a mechanism where an event starts from the target element that was clicked and then propagates upward, triggering handlers on all its parent elements sequentially until it reaches the root.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans. Event Delegation is the technique of attaching a single event listener to a parent element to handle events from its child elements. It is useful because it improves performance for dynamic content and reduces memory usage by needing fewer event listeners.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans. 'preventDefault()' stops the browser's default action for the event, while 'stopPropagation()' prevents the event from bubbling up the DOM tree to parent elements.